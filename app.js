(function () {
  "use strict";

  var SITE = window.SITE || {};
  // same cache-busting version as in index.html
  var ASSET_V = ((document.currentScript && document.currentScript.src.split("v=")[1]) || "");
  var FILES = window.PORTFOLIO_FILES || { projects: [], certificates: [] };
  var LANGS = ["de", "en"];
  var params = new URLSearchParams(window.location.search);
  var EDIT = params.has("edit");
  var lang = chooseLang();

  window.PORTFOLIO_PROJECTS = window.PORTFOLIO_PROJECTS || [];
  window.PORTFOLIO_CERTIFICATES = window.PORTFOLIO_CERTIFICATES || [];

  function chooseLang() {
    var q = params.get("lang");
    if (LANGS.indexOf(q) > -1) return q;
    try {
      var saved = window.localStorage.getItem("lt-lang");
      if (LANGS.indexOf(saved) > -1) return saved;
    } catch (e) {}
    var nav = (navigator.language || "de").toLowerCase();
    return nav.indexOf("en") === 0 ? "en" : "de";
  }

  // i18n helpers
  function pick(value) {
    if (value === null || value === undefined) return "";
    if (typeof value === "string" || Array.isArray(value)) return value;
    if (value[lang] !== undefined) return value[lang];
    return value.de !== undefined ? value.de : (value.en || "");
  }
  // fields starting with TODO stay hidden unless ?edit is set
  function isTodo(s) { return typeof s === "string" && /^\s*TODO/i.test(s); }
  function ui(key) { return pick((SITE.ui || {})[key]) || ""; }

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text !== undefined && text !== null) n.textContent = text;
    return n;
  }
  function text(parent, tag, value, cls) {
    var s = pick(value);
    if (!s || Array.isArray(s)) return null;
    if (isTodo(s) && !EDIT) return null;
    var n = el(tag, cls, s);
    if (isTodo(s)) n.classList.add("todo");
    parent.appendChild(n);
    return n;
  }
  function list(value) {
    var arr = pick(value);
    if (!Array.isArray(arr)) return [];
    return arr.filter(function (s) { return EDIT || !isTodo(s); });
  }
  function usableUrl(u) { return typeof u === "string" && u.trim() !== "" && !isTodo(u); }
  function link(href, label, cls) {
    var a = el("a", cls, label);
    a.href = href;
    if (/^https?:/.test(href)) { a.target = "_blank"; a.rel = "noopener"; }
    return a;
  }
  function todoLine(parent, value) {
    if (!EDIT) return;
    parent.appendChild(el("p", "todo", value));
  }

  // content files are plain scripts, so the site also works from file://
  function loadAll(paths, done) {
    var left = paths.length;
    if (!left) { done(); return; }
    paths.forEach(function (p) {
      var s = document.createElement("script");
      s.src = p;
      s.async = false;
      s.onload = finish;
      s.onerror = function () { console.warn("Datei nicht gefunden: " + p); finish(); };
      document.head.appendChild(s);
    });
    function finish() { left -= 1; if (left === 0) done(); }
  }

  function renderStatic() {
    document.documentElement.lang = lang;
    document.title = pick(SITE.pageTitle) || document.title;
    var meta = document.querySelector('meta[name="description"]');
    if (meta && SITE.pageDescription) meta.setAttribute("content", pick(SITE.pageDescription));

    Array.prototype.forEach.call(document.querySelectorAll("[data-ui]"), function (n) {
      var v = ui(n.getAttribute("data-ui"));
      n.textContent = v;
      n.hidden = (v === "");
    });
    Array.prototype.forEach.call(document.querySelectorAll(".lang button"), function (b) {
      b.setAttribute("aria-pressed", String(b.getAttribute("data-lang") === lang));
    });

    var banner = document.getElementById("edit-banner");
    if (EDIT) { banner.hidden = false; banner.textContent = ui("editBanner"); }
  }

  function renderHero() {
    var root = document.getElementById("top");
    root.textContent = "";
    var h = SITE.hero || {};

    var photo = el("div", "photo");
    function initials() {
      photo.textContent = "";
      var i = el("span", "initials", SITE.initials || "LT");
      i.setAttribute("aria-hidden", "true");
      photo.appendChild(i);
      if (EDIT) photo.classList.add("todo");
    }
    if (usableUrl(SITE.photo)) {
      var img = el("img");
      img.src = SITE.photo;
      img.alt = pick(h.photoAlt) || SITE.name || "";
      img.width = 440; img.height = 550;
      img.onerror = initials;
      photo.appendChild(img);
    } else {
      initials();
    }
    root.appendChild(photo);

    var box = el("div", "hero-text");
    box.appendChild(el("h1", "", SITE.name || ""));
    text(box, "p", h.role, "role");
    text(box, "p", h.direction, "direction");
    list(h.intro).forEach(function (p) { var n = el("p", "intro", p); if (isTodo(p)) n.classList.add("todo"); box.appendChild(n); });

    text(box, "p", h.status, "status-pill");
    var actions = el("div", "actions");
    actions.appendChild(link("#kontakt", ui("ctaContact"), "btn"));
    var more = link("#projekte", ui("ctaProjects"), "btn btn-ghost");
    var arrow = el("span", "btn-arrow");
    arrow.setAttribute("aria-hidden", "true");
    arrow.innerHTML = '<svg viewBox="0 0 12 14" width="12" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 1.5v10.5M1.75 7.75 6 12l4.25-4.25"/></svg>';
    more.appendChild(arrow);
    actions.appendChild(more);
    box.appendChild(actions);

    var facts = el("dl", "facts");
    (h.facts || []).forEach(function (f) {
      var v = pick(f.value);
      if (!v || (isTodo(v) && !EDIT)) return;
      var d = el("div");
      d.appendChild(el("dt", "", pick(f.label)));
      var dd = el("dd", "", v);
      if (isTodo(v)) dd.classList.add("todo");
      d.appendChild(dd);
      facts.appendChild(d);
    });
    box.appendChild(facts);
    root.appendChild(box);
  }

  function sorted(arr) {
    return arr.slice().sort(function (a, b) { return (a.order || 999) - (b.order || 999); });
  }

  function statusLine(dl, kind, key) {
    dl.appendChild(el("dt", "", ui("labelStatus")));
    var dd = el("dd");
    dd.appendChild(el("span", "status" + (kind === "open" ? " open" : ""), ui(key)));
    dl.appendChild(dd);
  }
  function metaRow(dl, labelKey, value) {
    var v = pick(value);
    if (!v || (isTodo(v) && !EDIT)) return;
    dl.appendChild(el("dt", "", ui(labelKey)));
    var dd = el("dd", "", v);
    if (isTodo(v)) dd.classList.add("todo");
    dl.appendChild(dd);
  }
  var PROJECT_STATUS = { progress: ["open", "statusProgress"], done: ["done", "statusDone"], ended: ["done", "statusEnded"] };
  var CERT_STATUS = { passed: ["done", "certPassed"], progress: ["open", "certProgress"], expected: ["open", "certExpected"] };

  // detail dialog
  var dialog = null, lastFocus = null;
  function getDialog() {
    if (dialog) return dialog;
    dialog = el("dialog", "detail");
    dialog.setAttribute("aria-labelledby", "detail-title");
    dialog.addEventListener("click", function (e) { if (e.target === dialog) closeDialog(); });
    dialog.addEventListener("close", function () {
      document.documentElement.classList.remove("no-scroll");
      clearHash();
      if (lastFocus) { try { lastFocus.focus({ preventScroll: true }); } catch (e) { lastFocus.focus(); } }
    });
    document.body.appendChild(dialog);
    return dialog;
  }
  function closeDialog() {
    if (!dialog || !dialog.open) return;
    if (reduceMotion) { dialog.close(); return; }
    dialog.classList.add("closing");
    setTimeout(function () { dialog.classList.remove("closing"); dialog.close(); }, 180);
  }
  var HASH_PREFIX = "#p/";
  function setHash(id) {
    try { history.replaceState(null, "", location.pathname + location.search + HASH_PREFIX + encodeURIComponent(id)); } catch (e) {}
  }
  function clearHash() {
    if (location.hash.indexOf(HASH_PREFIX) !== 0) return;
    try { history.replaceState(null, "", location.pathname + location.search); } catch (e) {}
  }
  function projectUrl(id) { return location.origin + location.pathname + "?lang=" + lang + HASH_PREFIX + encodeURIComponent(id); }
  function openDialog(build, opener, hashId) {
    var d = getDialog();
    d.textContent = "";
    var inner = el("div", "detail-inner");
    var close = el("button", "detail-close", "×");
    close.type = "button";
    close.setAttribute("aria-label", ui("close"));
    close.addEventListener("click", closeDialog);
    inner.appendChild(close);
    build(inner);
    d.appendChild(inner);
    lastFocus = opener || null;
    document.documentElement.classList.add("no-scroll");
    if (hashId) setHash(hashId);
    if (typeof d.showModal === "function") d.showModal(); else d.setAttribute("open", "");
    close.focus();
  }

  function renderShots(parent, images) {
    var valid = (images || []).filter(function (im) { return im && usableUrl(im.src); });
    if (!valid.length) return;
    parent.appendChild(el("h4", "detail-sub", ui("labelShots")));
    var grid = el("div", "shots");
    valid.forEach(function (im) {
      var fig = el("figure");
      var a = link(im.src, "");
      var img = el("img");
      img.src = im.src;
      img.alt = pick(im.alt) || "";
      img.loading = "lazy";
      img.onerror = function () { fig.remove(); };
      a.appendChild(img);
      fig.appendChild(a);
      text(fig, "figcaption", im.caption);
      grid.appendChild(fig);
    });
    parent.appendChild(grid);
  }

  function tile(opts) {
    var art = el("article", "tile reveal");
    if (opts.search) art.setAttribute("data-search", opts.search);
    if (opts.badge) art.setAttribute("data-badge", opts.badge);
    if (opts.id) art.setAttribute("data-id", opts.id);
    if (opts.proj) art.setAttribute("data-proj", opts.proj);
    var top = el("div", "tile-top");
    if (opts.badge) {
      var b = el("span", "tile-badge", opts.badge);
      b.setAttribute("aria-hidden", "true");
      top.appendChild(b);
    }
    var st = el("span", "status" + (opts.statusKind === "open" ? " open" : ""), ui(opts.statusKey));
    top.appendChild(st);
    if (opts.when) top.appendChild(el("span", "tile-when", opts.when));
    art.appendChild(top);
    art.appendChild(el("h3", "", opts.title));
    if (opts.kicker) art.appendChild(el("p", "tile-kicker", opts.kicker));
    if (opts.highlight) art.appendChild(el("p", "tile-highlight", opts.highlight));
    if (opts.summary) art.appendChild(el("p", "tile-summary", opts.summary));
    if (opts.thought) {
      var th = el("div", "lab-thought");
      th.appendChild(el("strong", "", ui("labThought")));
      th.appendChild(el("p", "", opts.thought));
      art.appendChild(th);
    }
    if (opts.chips && opts.chips.length) {
      var ul = el("ul", "chips");
      opts.chips.slice(0, 4).forEach(function (c) { ul.appendChild(el("li", "", c)); });
      if (opts.chips.length > 4) ul.appendChild(el("li", "more", "+" + (opts.chips.length - 4)));
      art.appendChild(ul);
    }
    var btn = el("button", "tile-btn", ui("details"));
    btn.type = "button";
    btn.setAttribute("aria-haspopup", "dialog");
    btn.addEventListener("click", function () { openDialog(opts.detail, btn, opts.hashId); });
    art.appendChild(btn);
    art.addEventListener("click", function (e) {
      if (e.target.closest("a,button")) return;
      openDialog(opts.detail, btn, opts.hashId);
    });
    return art;
  }
  function firstText(value) {
    var arr = list(value);
    for (var i = 0; i < arr.length; i++) if (!isTodo(arr[i])) return arr[i];
    return "";
  }
  function clean(value) {
    var v = pick(value);
    return (v && !isTodo(v)) ? v : "";
  }

  function renderSections(main, sections) {
    (sections || []).forEach(function (sec) {
      var sp = list(sec.points);
      var intro = pick(sec.text);
      if (!sp.length && !intro) return;
      main.appendChild(el("h4", "detail-sub", pick(sec.title)));
      if (intro && (EDIT || !isTodo(intro))) main.appendChild(el("p", "", intro));
      if (!sp.length) return;
      var sl = el("ul", "points");
      sp.forEach(function (t) { var li = el("li", "", t); if (isTodo(t)) li.classList.add("todo"); sl.appendChild(li); });
      main.appendChild(sl);
    });
  }
  function searchText(p) {
    return JSON.stringify([p.title, p.subtitle, p.tools, p.text, p.points, p.sections, p.overview]).toLowerCase();
  }

  // skills: chips filter the project cards
  var activeSkill = null;
  document.addEventListener("click", function (e) {
    if (!e.target.closest) return;
    if (e.target.closest("#skill-filter .sf-reset")) { activeSkill = null; applySkillFilter(false); }
    if (e.target.closest("#skill-filter .sf-path") && activeSkill) showPath(activeSkill);
  });
  function skillLabel(it) { return pick(it.label !== undefined ? it.label : it); }
  function skillTerms(it) {
    var m = (it.match || [skillLabel(it)]);
    return m.map(function (x) { return String(x).toLowerCase(); });
  }
  function matchingTiles(terms) {
    return Array.prototype.filter.call(document.querySelectorAll(".tile[data-proj]"), function (t) {
      var hay = t.getAttribute("data-search") || "";
      return terms.some(function (w) { return hay.indexOf(w) > -1; });
    });
  }
  function applySkillFilter(scroll) {
    var tiles = document.querySelectorAll(".tile[data-proj]");
    var bar = document.getElementById("skill-filter");
    Array.prototype.forEach.call(document.querySelectorAll(".skill-chip"), function (c) {
      c.setAttribute("aria-pressed", String(!!activeSkill && c.getAttribute("data-key") === activeSkill.key));
    });
    if (!activeSkill) {
      Array.prototype.forEach.call(tiles, function (t) { t.classList.remove("dim", "hit"); });
      if (bar) bar.hidden = true;
      return;
    }
    var hits = matchingTiles(activeSkill.terms);
    Array.prototype.forEach.call(tiles, function (t) {
      var hit = hits.indexOf(t) > -1;
      t.classList.toggle("hit", hit);
      t.classList.toggle("dim", !hit);
      if (hit) t.classList.add("in");
    });
    if (bar) {
      bar.hidden = false;
      bar.querySelector(".sf-label").textContent = ui("skillFilter") + " " + activeSkill.label + " (" + hits.length + ")";
      bar.querySelector(".sf-reset").textContent = ui("skillReset");
      var nPath = pathCount(activeSkill.terms);
      var pb = bar.querySelector(".sf-path");
      pb.hidden = !nPath;
      pb.textContent = ui("pathInPath") + " (" + nPath + ")";
    }
    var inProj = hits.filter(function (t) { return t.closest("#project-list"); }).length;
    var host = document.getElementById(inProj || !hits.length ? "project-list" : "lab-list");
    if (bar && host && bar.nextSibling !== host) host.parentNode.insertBefore(bar, host);
    if (scroll && host) host.closest("section").scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
  }
  function showCert(badge) {
    var t = document.querySelector('#cert-list .tile[data-badge="' + badge + '"]');
    if (!t) return;
    t.classList.add("in");
    t.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "center" });
    t.classList.remove("pulse");
    void t.offsetWidth;
    t.classList.add("pulse");
    setTimeout(function () { t.classList.remove("pulse"); }, 2600);
  }
  // career path details
  function stepSearch(s) { return JSON.stringify([s.title, s.text, s.detail]).toLowerCase(); }
  function stepHit(s, terms) { var h = stepSearch(s); return terms.some(function (w) { return h.indexOf(w) > -1; }); }
  function pathCount(terms) { return (SITE.path || []).filter(function (s) { return s.detail && stepHit(s, terms); }).length; }
  function openProof(selector) {
    closeDialog();
    setTimeout(function () {
      var t = document.querySelector(selector);
      if (!t) return;
      t.classList.add("in");
      t.scrollIntoView({ behavior: "auto", block: "center" });
      var b = t.querySelector(".tile-btn");
      if (b) b.click();
    }, 230);
  }
  function proofButton(badge, title, sub, onClick) {
    var bt = el("button", "proof");
    bt.type = "button";
    var bd = el("span", "tile-badge" + (badge ? "" : " proj"), badge || "");
    if (!badge) bd.innerHTML = '<svg viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="12" height="10" rx="1.5"/><path d="M2 6.5h12"/></svg>';
    bd.setAttribute("aria-hidden", "true");
    bt.appendChild(bd);
    var tx = el("span", "proof-text");
    tx.appendChild(el("span", "proof-name", title));
    if (sub) tx.appendChild(el("span", "proof-sub", sub));
    bt.appendChild(tx);
    var ar = el("span", "proof-arrow", "›");
    ar.setAttribute("aria-hidden", "true");
    bt.appendChild(ar);
    bt.addEventListener("click", onClick);
    return bt;
  }
  function openStep(s, opener) {
    var d = s.detail || {};
    openDialog(function (box) {
      var head = el("header", "detail-head");
      var tp = el("div", "tile-top");
      text(tp, "span", s.tag, "step-tag");
      var w = clean(s.when); if (w) tp.appendChild(el("span", "tile-when", w));
      head.appendChild(tp);
      var h = el("h3", "", pick(s.title)); h.id = "detail-title"; head.appendChild(h);
      text(head, "p", s.text, "sub");
      box.appendChild(head);
      var cols = el("div", "detail-cols");
      var main = el("div", "detail-main");
      [["did", "pathDid"], ["gain", "pathGain"]].forEach(function (pair) {
        var pts = list(d[pair[0]]);
        if (!pts.length) return;
        var b = el("div", "block");
        b.appendChild(el("h4", "", ui(pair[1])));
        var ul = el("ul", "points");
        pts.forEach(function (t) { ul.appendChild(el("li", "", t)); });
        b.appendChild(ul);
        main.appendChild(b);
      });
      text(main, "p", d.link, "step-link");
      text(main, "p", d.note, "step-note");
      cols.appendChild(main);

      var projs = (d.projects || []).map(function (id) {
        return (window.PORTFOLIO_PROJECTS || []).filter(function (p) { return p.id === id; })[0];
      }).filter(Boolean);
      var certs = (d.certs || []).map(function (bdg) {
        return (window.PORTFOLIO_CERTIFICATES || []).filter(function (c) { return c.badge === bdg; })[0];
      }).filter(Boolean);
      if (projs.length || certs.length) {
        var side = el("aside", "side proofs");
        side.appendChild(el("h4", "", ui("pathProof")));
        if (projs.length) {
          side.appendChild(el("p", "proof-label", ui("pathProjects")));
          projs.forEach(function (p) {
            side.appendChild(proofButton("", pick(p.title), clean(p.context), function () { openProof('.tile[data-proj="' + p.id + '"]'); }));
          });
        }
        if (certs.length) {
          side.appendChild(el("p", "proof-label", ui("pathCerts")));
          certs.forEach(function (c) {
            var st = CERT_STATUS[c.status] || CERT_STATUS.passed;
            var dt = clean(c.date);
            var subt = c.status === "passed" ? dt : ui(st[1]) + (dt ? ", " + dt : "");
            side.appendChild(proofButton(c.badge, pick(c.name), subt, function () { openProof('#cert-list .tile[data-badge="' + c.badge + '"]'); }));
          });
        }
        cols.appendChild(side);
      }
      box.appendChild(cols);
    }, opener);
  }
  var pathTimer = null;
  function showPath(skill) {
    var steps = document.querySelectorAll(".path .step");
    var first = null;
    Array.prototype.forEach.call(steps, function (li) {
      var s = (SITE.path || [])[+li.getAttribute("data-i")];
      var hit = !!(s && s.detail && stepHit(s, skill.terms));
      li.classList.toggle("hit", hit);
      li.classList.toggle("dim", !hit);
      li.classList.add("in");
      if (hit && !first) first = li;
    });
    var path = document.querySelector(".path");
    if (path) path.setAttribute("data-hits", ui("pathHits") + " " + skill.label);
    (first || document.getElementById("ueber-mich")).scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "center" });
    clearTimeout(pathTimer);
    pathTimer = setTimeout(function () {
      Array.prototype.forEach.call(steps, function (li) { li.classList.remove("hit", "dim"); });
      if (path) path.removeAttribute("data-hits");
    }, 5000);
  }
  function renderSkills() {
    var root = document.getElementById("skills-list");
    if (!root) return;
    root.textContent = "";
    (SITE.skills || []).forEach(function (grp, gi) {
      var box = el("div", "skill-group reveal");
      box.appendChild(el("h3", "", pick(grp.title)));
      var ul = el("ul", "skill-chips");
      (grp.items || []).forEach(function (it, ii) {
        var label = skillLabel(it);
        var terms = skillTerms(it);
        var count = matchingTiles(terms).length;
        var li = el("li");
        var chip;
        if (it.cert) {
          chip = el("button", "skill-chip to-cert", label);
          chip.type = "button";
          chip.title = pick(it.hint) || ui("skillCertHint");
          chip.addEventListener("click", function () { showCert(it.cert); });
        } else if (count) {
          chip = el("button", "skill-chip", label);
          chip.type = "button";
          chip.setAttribute("data-key", gi + "-" + ii);
          chip.setAttribute("aria-pressed", "false");
          chip.title = ui("skillHint");
          chip.addEventListener("click", function () {
            var key = gi + "-" + ii;
            activeSkill = (activeSkill && activeSkill.key === key) ? null : { key: key, label: label, terms: terms };
            applySkillFilter(!!activeSkill);
          });
          var total = count + pathCount(terms);
          var n = el("span", "skill-count", String(total));
          n.setAttribute("aria-label", total + " " + ui("skillUses"));
          chip.appendChild(n);
        } else if (pathCount(terms)) {
          chip = el("button", "skill-chip", label);
          chip.type = "button";
          chip.title = ui("pathSkillHint");
          var pc = pathCount(terms);
          var pn = el("span", "skill-count", String(pc));
          pn.setAttribute("aria-label", pc + " " + ui("skillUses"));
          chip.appendChild(pn);
          (function (c) { c.addEventListener("click", function () { showPath({ label: label, terms: terms }); }); })(chip);
        } else {
          chip = el("span", "skill-chip static", label);
        }
        li.appendChild(chip);
        ul.appendChild(li);
      });
      box.appendChild(ul);
      root.appendChild(box);
    });
  }


  // infrastructure diagram (inline SVG from a small spec in the project file)
  var SVGNS = "http://www.w3.org/2000/svg";
  var DIA_KIND = {
    cloud: ["#0F6CBD", "M4.5 13h7.2a3 3 0 0 0 .3-6A4.6 4.6 0 0 0 3.2 8.3 2.4 2.4 0 0 0 4.5 13z"],
    server: ["#12284B", "M2 2.5h12v4.5H2zM2 9h12v4.5H2zM4.5 4.75h.01M4.5 11.25h.01"],
    client: ["#3B6EA8", "M1.5 2.5h13v8.5h-13zM6 14h4M8 11v3"],
    user: ["#1F8A4C", "M8 2.2a2.8 2.8 0 1 1 0 5.6 2.8 2.8 0 0 1 0-5.6zM2.5 14.5c0-3 2.5-4.8 5.5-4.8s5.5 1.8 5.5 4.8"],
    app: ["#7A4FB5", "M2 2h5v5H2zM9 2h5v5H9zM2 9h5v5H2zM9 9h5v5H9z"],
    net: ["#B4540E", "M1.8 6.2a8.8 8.8 0 0 1 12.4 0M4.3 9a5.2 5.2 0 0 1 7.4 0M7.3 12.2a1 1 0 0 1 1.4 0"],
    shield: ["#B42318", "M8 1.5l6 2.5v4c0 3.4-2.5 5.9-6 6.9-3.5-1-6-3.5-6-6.9V4z"],
    storage: ["#0E7490", "M2 4c0-1.4 2.7-2.5 6-2.5s6 1.1 6 2.5v8c0 1.4-2.7 2.5-6 2.5S2 13.4 2 12zM2 4c0 1.4 2.7 2.5 6 2.5S14 5.4 14 4"]
  };
  var DIA_ZONE = {
    cloud: ["#EEF4FB", "#9DBBE0", "#0F5AA0", ""],
    local: ["#F4F6F9", "#B8C3D1", "#516074", "6 4"],
    corp: ["#F0F7F2", "#A3CDB0", "#1C6E3E", ""],
    neutral: ["#FBF7F0", "#D9C7A6", "#7A5A1E", "6 4"]
  };
  function sv(tag, attrs, parent) {
    var n = document.createElementNS(SVGNS, tag);
    for (var k in attrs) if (attrs.hasOwnProperty(k)) n.setAttribute(k, attrs[k]);
    if (parent) parent.appendChild(n);
    return n;
  }
  function svText(parent, x, y, str, attrs) {
    var a = { x: x, y: y }; for (var k in attrs) a[k] = attrs[k];
    var t = sv("text", a, parent); t.textContent = str; return t;
  }
  function renderDiagram(box, d) {
    var fig = el("figure", "diagram");
    var scroller = el("div", "diagram-scroll");
    var svg = sv("svg", { viewBox: "0 0 " + d.w + " " + d.h, role: "img", "font-family": "IBM Plex Sans, system-ui, sans-serif" });
    var title = pick(d.alt) || pick(d.caption) || "";
    if (title) { var tt = sv("title", {}, svg); tt.textContent = title; }
    var defs = sv("defs", {}, svg);
    var mk = sv("marker", { id: "dia-arrow", viewBox: "0 0 10 10", refX: "9", refY: "5", markerWidth: "7", markerHeight: "7", orient: "auto-start-reverse" }, defs);
    sv("path", { d: "M0 0L10 5L0 10z", fill: "#516074" }, mk);

    (d.zones || []).forEach(function (z) {
      var t = DIA_ZONE[z.tone] || DIA_ZONE.local;
      sv("rect", { x: z.x, y: z.y, width: z.w, height: z.h, rx: 10, fill: t[0], stroke: t[1], "stroke-width": 1.2, "stroke-dasharray": t[3] }, svg);
      svText(svg, z.x + 14, z.y + 22, String(pick(z.label)).toUpperCase(), { "font-size": 11, "font-weight": 600, fill: t[2], "letter-spacing": ".06em" });
    });

    var nodes = {};
    (d.nodes || []).forEach(function (n) {
      var lines = list(n.lines);
      n._h = n.h || (lines.length ? 36 + lines.length * 15 + 6 : 42);
      nodes[n.id] = n;
    });
    function anchor(n, side, off) {
      off = off || 0;
      if (side === "r") return [n.x + n.w, n.y + n._h / 2 + off];
      if (side === "l") return [n.x, n.y + n._h / 2 + off];
      if (side === "t") return [n.x + n.w / 2 + off, n.y];
      return [n.x + n.w / 2 + off, n.y + n._h];
    }
    var labels = sv("g", {}, null);
    (d.links || []).forEach(function (l) {
      var a = nodes[l.from], b = nodes[l.to];
      if (!a || !b) return;
      var s = anchor(a, l.fs || "r", l.fo), e = anchor(b, l.ts || "l", l.to_);
      var hs = (l.fs || "r") === "r" || (l.fs || "r") === "l";
      var he = (l.ts || "l") === "r" || (l.ts || "l") === "l";
      var dd, mid;
      if (hs && he) {
        var mx = l.mx !== undefined ? l.mx : (s[0] + e[0]) / 2;
        dd = "M" + s[0] + " " + s[1] + "H" + mx + "V" + e[1] + "H" + e[0];
        mid = s[1] === e[1] ? [(s[0] + e[0]) / 2, s[1]] : [mx, (s[1] + e[1]) / 2];
      } else if (!hs && !he) {
        var my = l.my !== undefined ? l.my : (s[1] + e[1]) / 2;
        dd = "M" + s[0] + " " + s[1] + "V" + my + "H" + e[0] + "V" + e[1];
        mid = s[0] === e[0] ? [s[0], (s[1] + e[1]) / 2] : [(s[0] + e[0]) / 2, my];
      } else if (hs) {
        dd = "M" + s[0] + " " + s[1] + "H" + e[0] + "V" + e[1];
        mid = [e[0], (s[1] + e[1]) / 2];
      } else {
        dd = "M" + s[0] + " " + s[1] + "V" + e[1] + "H" + e[0];
        mid = [(s[0] + e[0]) / 2, e[1]];
      }
      sv("path", { d: dd, fill: "none", stroke: "#516074", "stroke-width": 1.4, "stroke-dasharray": l.dashed ? "4 4" : "", "marker-end": l.oneway === false ? "" : "url(#dia-arrow)", "marker-start": l.both ? "url(#dia-arrow)" : "" }, svg);
      var lab = pick(l.label);
      if (lab) {
        var flat = hs && he && s[1] === e[1];
        var lx = l.lx !== undefined ? l.lx : mid[0], ly = l.ly !== undefined ? l.ly : (flat ? mid[1] - 6 : mid[1] + 4);
        svText(labels, lx, ly, lab, { "font-size": 10.5, "text-anchor": "middle", fill: "#1B2432", stroke: "#fff", "stroke-width": 4, "paint-order": "stroke", "stroke-linejoin": "round" });
      }
    });
    var panel = el("div", "dia-panel");
    panel.setAttribute("aria-live", "polite");
    var selected = null;
    function showNode(n, g, scroll) {
      if (selected) selected.classList.remove("on");
      selected = g; g.classList.add("on");
      panel.textContent = "";
      panel.classList.add("filled");
      var hd = el("div", "dia-panel-head");
      hd.appendChild(el("span", "dia-dot")).style.background = (DIA_KIND[n.kind] || DIA_KIND.server)[0];
      hd.appendChild(el("h4", "", pick(n.title)));
      panel.appendChild(hd);
      var ul = el("ul", "points");
      list(n.details).forEach(function (t) { ul.appendChild(el("li", "", t)); });
      panel.appendChild(ul);
      if (scroll && panel.scrollIntoView && window.innerWidth < 760) panel.scrollIntoView({ block: "nearest", behavior: reduceMotion ? "auto" : "smooth" });
    }
    (d.nodes || []).forEach(function (n) {
      var k = DIA_KIND[n.kind] || DIA_KIND.server;
      var g = sv("g", { "class": "dia-node" }, svg);
      var hasDetails = list(n.details).length > 0;
      if (hasDetails) {
        g.setAttribute("class", "dia-node clickable");
        g.setAttribute("role", "button");
        g.setAttribute("tabindex", "0");
        g.setAttribute("aria-label", pick(n.title) + ": " + ui("diagramShow"));
        g.addEventListener("click", function () { showNode(n, g, true); });
        g.addEventListener("keydown", function (e) { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); showNode(n, g, true); } });
      }
      sv("rect", { "class": "dia-box", x: n.x, y: n.y, width: n.w, height: n._h, rx: 7, fill: "#fff", stroke: "#C9D2DD", "stroke-width": 1.2 }, g);
      sv("rect", { x: n.x, y: n.y + 6, width: 3.5, height: n._h - 12, rx: 1.5, fill: k[0] }, g);
      var ic = sv("g", { transform: "translate(" + (n.x + 13) + " " + (n.y + 12) + ")" }, g);
      sv("path", { d: k[1], fill: "none", stroke: k[0], "stroke-width": 1.5, "stroke-linecap": "round", "stroke-linejoin": "round" }, ic);
      svText(g, n.x + 36, n.y + 25, pick(n.title), { "font-size": 13.5, "font-weight": 600, fill: "#12284B" });
      list(n.lines).forEach(function (ln, i) {
        svText(g, n.x + 14, n.y + 45 + i * 15, ln, { "font-size": 11.5, fill: "#516074" });
      });
      if (hasDetails) {
        var bx = n.x + n.w - 13, by = n.y + 13;
        sv("circle", { "class": "dia-plus", cx: bx, cy: by, r: 7.5, fill: "#EEF2F7", stroke: "#C9D2DD" }, g);
        sv("path", { d: "M" + (bx - 3.5) + " " + by + "h7M" + bx + " " + (by - 3.5) + "v7", stroke: "#12284B", "stroke-width": 1.6, "stroke-linecap": "round" }, g);
      }
    });
    svg.appendChild(labels);
    scroller.appendChild(svg);
    fig.appendChild(el("p", "dia-hint", ui("diagramHint")));
    fig.appendChild(scroller);
    panel.appendChild(el("p", "dia-empty", ui("diagramEmpty")));
    fig.appendChild(panel);
    var cap = pick(d.caption);
    if (cap) fig.appendChild(el("figcaption", "", cap));
    box.appendChild(fig);
  }

  function projectTile(p, extra) {
      var st = PROJECT_STATUS[p.status] || PROJECT_STATUS.done;
      var o = {
        proj: p.id,
        statusKind: st[0], statusKey: st[1],
        when: clean(p.period),
        title: pick(p.title),
        kicker: clean(p.context),
        summary: clean(p.subtitle) || firstText(p.text),
        chips: p.tools || [],
        search: searchText(p),
        id: p.id,
        hashId: p.id,
        detail: function (box) {
          var head = el("header", "detail-head");
          var tp = el("div", "tile-top");
          tp.appendChild(el("span", "status" + (st[0] === "open" ? " open" : ""), ui(st[1])));
          head.appendChild(tp);
          var h = el("h3", "", pick(p.title)); h.id = "detail-title"; head.appendChild(h);
          text(head, "p", p.subtitle, "sub");
          if (p.id) {
            var cp = el("button", "copy-link", ui("copyLink"));
            cp.type = "button";
            cp.addEventListener("click", function () {
              var url = projectUrl(p.id);
              function done() { cp.textContent = ui("linkCopied"); setTimeout(function () { cp.textContent = ui("copyLink"); }, 2000); }
              if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(url).then(done, function () { window.prompt(ui("copyLink"), url); });
              else window.prompt(ui("copyLink"), url);
            });
            head.appendChild(cp);
          }
          box.appendChild(head);
          var hasTarget = !!(p.diagram && p.diagramTarget);
          var tabs = null;
          if (hasTarget) { tabs = el("div", "dia-tabs"); tabs.setAttribute("role", "group"); box.appendChild(tabs); }
          if (p.overview && p.overview.lead) {
            var lead = el("p", "ov-lead cur-only");
            lead.appendChild(el("strong", "", ui("overviewDid") + " "));
            lead.appendChild(document.createTextNode(pick(p.overview.lead)));
            box.appendChild(lead);
          }
          if (p.target && p.target.lead) {
            var tlead = el("p", "ov-lead tgt-only");
            tlead.appendChild(el("strong", "", ui("targetDoing") + " "));
            tlead.appendChild(document.createTextNode(pick(p.target.lead)));
            box.appendChild(tlead);
          }
          if (hasTarget) {
            var dwrap = el("div", "dia-switch-wrap");
            var holder = el("div", "dia-holder");
            [["diagramNow", p.diagram], ["diagramTarget", p.diagramTarget]].forEach(function (pair, i) {
              var bt = el("button", "dia-tab", ui(pair[0]));
              bt.type = "button";
              bt.setAttribute("aria-pressed", i === 0 ? "true" : "false");
              bt.addEventListener("click", function () {
                Array.prototype.forEach.call(tabs.children, function (x) { x.setAttribute("aria-pressed", "false"); });
                bt.setAttribute("aria-pressed", "true");
                box.classList.toggle("show-target", i === 1);
                holder.textContent = "";
                renderDiagram(holder, pair[1]);
              });
              tabs.appendChild(bt);
            });
            dwrap.appendChild(holder);
            renderDiagram(holder, p.diagram);
            box.appendChild(dwrap);
          } else if (p.diagram) renderDiagram(box, p.diagram);
          var cols = el("div", "detail-cols");
          var mainOuter = el("div", "detail-main");
          var main = el("div", "cur-only");
          mainOuter.appendChild(main);
          if (p.target) {
            var tm = el("div", "tgt-only");
            var tg = p.target;
            if (tg.facts && tg.facts.length) {
              var tfg = el("div", "ov-facts");
              tg.facts.forEach(function (f) {
                var c = el("div", "ov-fact");
                c.appendChild(el("span", "ov-num", f.value));
                c.appendChild(el("span", "ov-label", pick(f.label)));
                tfg.appendChild(c);
              });
              tm.appendChild(tfg);
            }
            var tsk = list(tg.skills);
            if (tsk.length) {
              tm.appendChild(el("h4", "detail-sub", ui("targetSkills")));
              var tsl = el("ul", "ov-skills");
              tsk.forEach(function (t) { tsl.appendChild(el("li", "", t)); });
              tm.appendChild(tsl);
            }
            renderSections(tm, tg.sections);
            mainOuter.appendChild(tm);
          }
          var body = main;
          if (p.overview) {
            var ov = p.overview;
            if (ov.facts && ov.facts.length) {
              var fg = el("div", "ov-facts");
              ov.facts.forEach(function (f) {
                var c = el("div", "ov-fact");
                c.appendChild(el("span", "ov-num", f.value));
                c.appendChild(el("span", "ov-label", pick(f.label)));
                fg.appendChild(c);
              });
              main.appendChild(fg);
            }
            var sk = list(ov.skills);
            if (sk.length) {
              main.appendChild(el("h4", "detail-sub", ui("overviewSkills")));
              var sul = el("ul", "ov-skills");
              sk.forEach(function (t) { sul.appendChild(el("li", "", t)); });
              main.appendChild(sul);
            }
            var det = el("details", "ov-details");
            det.appendChild(el("summary", "", ui("overviewDetails")));
            main.appendChild(det);
            body = det;
          }
          list(p.text).forEach(function (t) { var n = el("p", "", t); if (isTodo(t)) n.classList.add("todo"); body.appendChild(n); });
          var pts = list(p.points);
          if (pts.length) {
            var ul = el("ul", "points");
            pts.forEach(function (t) { var li = el("li", "", t); if (isTodo(t)) li.classList.add("todo"); ul.appendChild(li); });
            body.appendChild(ul);
          }
          renderSections(body, p.sections);
          text(body, "p", p.note, "note");
          cols.appendChild(mainOuter);
          var side = el("aside", "side"); var dl = el("dl");
          metaRow(dl, "labelContext", p.context);
          metaRow(dl, "labelPeriod", p.period);
          if (p.tools && p.tools.length) { dl.appendChild(el("dt", "", ui("labelTools"))); dl.appendChild(el("dd", "", p.tools.join(", "))); }
          side.appendChild(dl); cols.appendChild(side);
          box.appendChild(cols);
          var shots = (p.images || []).filter(function (im) { return im && usableUrl(im.src); });
          var shotBox = el("div", "cur-only");
          box.appendChild(shotBox);
          if (shots.length) renderShots(shotBox, shots); else if (EDIT) todoLine(shotBox, ui("todoScreenshots"));
        }
      };
      if (extra) for (var k in extra) if (extra.hasOwnProperty(k)) o[k] = extra[k];
      return tile(o);
  }
  function renderProjects() {
    var root = document.getElementById("project-list");
    root.textContent = "";
    var grid = el("div", "tiles");
    sorted(window.PORTFOLIO_PROJECTS).filter(function (p) { return !p.lab; }).forEach(function (p) { grid.appendChild(projectTile(p)); });
    root.appendChild(grid);
  }
  function renderLab() {
    var root = document.getElementById("lab-list");
    if (!root) return;
    root.textContent = "";
    var labs = window.PORTFOLIO_PROJECTS.filter(function (p) { return p.lab; })
      .sort(function (a, b) { return (a.lab.step || 99) - (b.lab.step || 99); });
    var ol = el("ol", "lab-steps");
    labs.forEach(function (p, i) {
      var li = el("li", "lab-step" + (i === labs.length - 1 ? " latest" : ""));
      var mk = el("span", "lab-mark", String(i + 1));
      mk.setAttribute("aria-hidden", "true");
      li.appendChild(mk);
      var lbl = clean(p.lab.label);
      if (lbl) li.appendChild(el("span", "lab-label", lbl));
      li.appendChild(projectTile(p, { thought: clean(p.lab.thought) }));
      ol.appendChild(li);
    });
    root.appendChild(ol);
    var now = SITE.lab && SITE.lab.now;
    var pts = now ? list(now.points) : [];
    if (pts.length) {
      var box = el("div", "lab-now reveal");
      box.appendChild(el("h3", "", pick(now.title)));
      text(box, "p", now.text, "lab-now-text");
      var ul = el("ul", "lab-now-list");
      pts.forEach(function (t) { ul.appendChild(el("li", "", t)); });
      box.appendChild(ul);
      root.appendChild(box);
    }
  }

  function renderCertificates() {
    var root = document.getElementById("cert-list");
    root.textContent = "";
    var grid = el("div", "tiles");
    sorted(window.PORTFOLIO_CERTIFICATES).forEach(function (c) {
      var st = CERT_STATUS[c.status] || CERT_STATUS.passed;
      grid.appendChild(tile({
        badge: c.badge || "",
        statusKind: st[0], statusKey: st[1],
        when: clean(c.date),
        title: pick(c.name),
        kicker: clean(c.issuer),
        summary: clean(c.atWork) || clean(c.confirms),
        highlight: clean(c.highlight),
        chips: list(c.skills).filter(function (s) { return !isTodo(s); }),
        detail: function (box) {
          var head = el("header", "detail-head");
          var tp = el("div", "tile-top");
          if (c.badge) tp.appendChild(el("span", "tile-badge", c.badge));
          tp.appendChild(el("span", "status" + (st[0] === "open" ? " open" : ""), ui(st[1])));
          head.appendChild(tp);
          var h = el("h3", "", pick(c.name)); h.id = "detail-title"; head.appendChild(h);
          text(head, "p", c.fullName, "sub");
          box.appendChild(head);
          var cols = el("div", "detail-cols");
          var main = el("div", "detail-main");
          [["confirms", "labelConfirms"], ["didThis", "labelDid"], ["atWork", "labelAtWork"]].forEach(function (pair) {
            var v = pick(c[pair[0]]);
            if (!v || (isTodo(v) && !EDIT)) return;
            var b = el("div", "block");
            b.appendChild(el("h4", "", ui(pair[1])));
            text(b, "p", c[pair[0]]);
            main.appendChild(b);
          });
          renderSections(main, c.sections);
          cols.appendChild(main);
          var side = el("aside", "side"); var dl = el("dl");
          metaRow(dl, "labelDate", c.date);
          metaRow(dl, "labelIssuer", c.issuer);
          var skills = list(c.skills);
          if (skills.length) {
            dl.appendChild(el("dt", "", ui("labelSkills")));
            var sd = el("dd", "", skills.join(", "));
            if (skills.some(isTodo)) sd.classList.add("todo");
            dl.appendChild(sd);
          }
          if (usableUrl(c.verifyUrl)) {
            var vd = el("dd"); vd.appendChild(link(c.verifyUrl, ui("verifyLink"), "verify")); dl.appendChild(vd);
          } else if (EDIT && c.status === "passed") {
            dl.appendChild(el("dd", "todo", ui("todoVerify")));
          }
          side.appendChild(dl); cols.appendChild(side);
          box.appendChild(cols);
        }
      }));
    });
    root.appendChild(grid);
  }

  function renderAbout() {
    var root = document.getElementById("about-text");
    root.textContent = "";
    list(SITE.about).forEach(function (p) {
      var n = el("p", "", p);
      if (isTodo(p)) n.classList.add("todo");
      root.appendChild(n);
    });

    var wrap = document.getElementById("path-wrap");
    wrap.textContent = "";
    var steps = (SITE.path || []).map(function (s, i) { s._i = i; return s; }).slice().reverse();
    if (!steps.length) return;

    var box = el("div", "path");
    box.setAttribute("role", "group");
    box.setAttribute("aria-label", ui("pathLabel"));
    box.appendChild(el("span", "path-end path-top", ui("pathTop")));
    var rail = el("div", "rail");
    rail.setAttribute("aria-hidden", "true");
    rail.appendChild(el("div", "rail-fill"));
    box.appendChild(rail);

    var ol = el("ol", "steps");
    steps.forEach(function (s) {
      var li = el("li", "step reveal" + (s.open ? " open" : "") + (s.current ? " current" : "") + (s.detail ? " has-detail" : ""));
      li.setAttribute("data-i", s._i);
      var dot = el("span", "dot");
      dot.setAttribute("aria-hidden", "true");
      li.appendChild(dot);
      var card = el("div", "card");
      var head = el("div", "card-head");
      var when = pick(s.when);
      if (when && (EDIT || !isTodo(when))) {
        var w = el("span", "when", when);
        if (isTodo(when)) w.classList.add("todo");
        head.appendChild(w);
      }
      text(head, "span", s.tag, "tag");
      if (s.current) head.appendChild(el("span", "now-pill", ui("currentNow")));
      card.appendChild(head);
      text(card, "h3", s.title);
      text(card, "p", s.text);
      if (s.detail) {
        var db = el("button", "tile-btn step-btn", ui("details"));
        db.type = "button";
        db.setAttribute("aria-haspopup", "dialog");
        db.addEventListener("click", function () { openStep(s, db); });
        card.appendChild(db);
        card.addEventListener("click", function (e) { if (!e.target.closest("a,button")) openStep(s, db); });
      }
      li.appendChild(card);
      ol.appendChild(li);
    });
    box.appendChild(ol);
    box.appendChild(el("span", "path-end path-bottom", ui("pathBottom")));
    wrap.appendChild(box);
  }

  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var observer = null;
  if (!reduceMotion && "IntersectionObserver" in window) {
    document.documentElement.classList.add("anim");
    observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { var t = e.target; t.classList.add("in"); observer.unobserve(t); setTimeout(function () { t.style.transitionDelay = ""; }, 1200); }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.12 });
  }
  function watchReveals(instant) {
    Array.prototype.forEach.call(document.querySelectorAll(".tiles"), function (g) {
      Array.prototype.forEach.call(g.children, function (t, i) { t.style.transitionDelay = (instant ? 0 : (i % 2) * 90 + Math.floor(i / 2) * 40) + "ms"; });
    });
    Array.prototype.forEach.call(document.querySelectorAll(".reveal"), function (n) {
      if (!observer || instant) n.classList.add("in");
      else observer.observe(n);
    });
  }

  // fill the career path line while scrolling
  var ticking = false;
  function updatePath() {
    ticking = false;
    var path = document.querySelector(".path");
    if (!path) return;
    var fill = path.querySelector(".rail-fill");
    var rect = path.getBoundingClientRect();
    var mark = window.innerHeight * 0.6;
    var progress = reduceMotion ? 1 : Math.max(0, Math.min(1, (mark - rect.top) / rect.height));
    fill.style.transform = "scaleY(" + progress.toFixed(4) + ")";
    Array.prototype.forEach.call(path.querySelectorAll(".step"), function (s) {
      var d = s.querySelector(".dot").getBoundingClientRect();
      s.classList.toggle("on", reduceMotion || d.top < mark);
    });
  }
  function requestPath() {
    if (!ticking) { ticking = true; window.requestAnimationFrame(updatePath); }
  }
  window.addEventListener("scroll", requestPath, { passive: true });
  window.addEventListener("resize", requestPath);

  function renderContact() {
    var root = document.getElementById("contact-block");
    root.textContent = "";
    text(root, "p", SITE.contactIntro);
    if (SITE.email && SITE.email.user && SITE.email.domain) {
      var addr = SITE.email.user + "@" + SITE.email.domain;
      root.appendChild(link("mailto:" + addr, addr, "contact-mail"));
    }
    var ul = el("ul", "contact-list");
    function add(url, label) {
      var li = el("li");
      if (usableUrl(url)) { li.appendChild(link(url, label)); ul.appendChild(li); }
      else if (EDIT) { li.className = "todo"; li.textContent = label + ": " + (url || "TODO"); ul.appendChild(li); }
    }
    add(SITE.linkedin, "LinkedIn");
    add(SITE.cv, ui("cvLink"));
    if (SITE.location) ul.appendChild(el("li", "", pick(SITE.location)));
    root.appendChild(ul);
  }

  function renderAll(instant) {
    renderStatic();
    renderHero();
    renderAbout();
    renderProjects();
    renderLab();
    renderSkills();
    if (activeSkill) applySkillFilter(false);
    renderCertificates();
    renderContact();
    watchReveals(instant);
    updatePath();
  }

  Array.prototype.forEach.call(document.querySelectorAll(".lang button"), function (b) {
    b.addEventListener("click", function () {
      lang = b.getAttribute("data-lang");
      activeSkill = null;
      try { window.localStorage.setItem("lt-lang", lang); } catch (e) {}
      renderAll(true);
    });
  });

  var paths = []
    .concat((FILES.projects || []).map(function (n) { return "projects/" + n + ".js?v=" + ASSET_V; }))
    .concat((FILES.certificates || []).map(function (n) { return "certificates/" + n + ".js?v=" + ASSET_V; }));
  function openFromHash() {
    if (location.hash.indexOf(HASH_PREFIX) !== 0) return;
    var id = decodeURIComponent(location.hash.slice(HASH_PREFIX.length));
    var t = document.querySelector('.tile[data-proj="' + id.replace(/"/g, "") + '"]');
    if (!t) return;
    if (dialog && dialog.open) return;
    t.classList.add("in");
    t.scrollIntoView({ behavior: "auto", block: "center" });
    var b = t.querySelector(".tile-btn");
    if (b) b.click();
  }
  window.addEventListener("hashchange", openFromHash);
  renderStatic();
  loadAll(paths, function () { renderAll(false); openFromHash(); });
})();
