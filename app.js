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
    text(box, "p", h.status, "status-pill");
    box.appendChild(el("h1", "", SITE.name || ""));
    text(box, "p", h.role, "role");
    text(box, "p", h.direction, "direction");
    list(h.intro).forEach(function (p) { var n = el("p", "intro", p); if (isTodo(p)) n.classList.add("todo"); box.appendChild(n); });

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
      if (lastFocus) lastFocus.focus();
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
  function openDialog(build, opener) {
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
    if (opts.chips && opts.chips.length) {
      var ul = el("ul", "chips");
      opts.chips.slice(0, 4).forEach(function (c) { ul.appendChild(el("li", "", c)); });
      if (opts.chips.length > 4) ul.appendChild(el("li", "more", "+" + (opts.chips.length - 4)));
      art.appendChild(ul);
    }
    var btn = el("button", "tile-btn", ui("details"));
    btn.type = "button";
    btn.setAttribute("aria-haspopup", "dialog");
    btn.addEventListener("click", function () { openDialog(opts.detail, btn); });
    art.appendChild(btn);
    art.addEventListener("click", function (e) {
      if (e.target.closest("a,button")) return;
      openDialog(opts.detail, btn);
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
    return JSON.stringify([p.title, p.subtitle, p.tools, p.text, p.points, p.sections]).toLowerCase();
  }

  // skills: chips filter the project cards
  var activeSkill = null;
  document.addEventListener("click", function (e) {
    if (e.target.closest && e.target.closest("#skill-filter button")) { activeSkill = null; applySkillFilter(false); }
  });
  function skillLabel(it) { return pick(it.label !== undefined ? it.label : it); }
  function skillTerms(it) {
    var m = (it.match || [skillLabel(it)]);
    return m.map(function (x) { return String(x).toLowerCase(); });
  }
  function matchingTiles(terms) {
    return Array.prototype.filter.call(document.querySelectorAll("#project-list .tile"), function (t) {
      var hay = t.getAttribute("data-search") || "";
      return terms.some(function (w) { return hay.indexOf(w) > -1; });
    });
  }
  function applySkillFilter(scroll) {
    var tiles = document.querySelectorAll("#project-list .tile");
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
      bar.querySelector("button").textContent = ui("skillReset");
    }
    if (scroll) document.getElementById("projekte").scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
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
          chip.title = ui("skillCertHint");
          var tag = el("span", "skill-count cert", it.cert);
          tag.setAttribute("aria-hidden", "true");
          chip.appendChild(tag);
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
          var n = el("span", "skill-count", String(count));
          n.setAttribute("aria-label", count + " " + ui("navProjects"));
          chip.appendChild(n);
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

  function renderProjects() {
    var root = document.getElementById("project-list");
    root.textContent = "";
    var grid = el("div", "tiles");
    sorted(window.PORTFOLIO_PROJECTS).forEach(function (p) {
      var st = PROJECT_STATUS[p.status] || PROJECT_STATUS.done;
      grid.appendChild(tile({
        statusKind: st[0], statusKey: st[1],
        when: clean(p.period),
        title: pick(p.title),
        kicker: clean(p.context),
        summary: clean(p.subtitle) || firstText(p.text),
        chips: p.tools || [],
        search: searchText(p),
        detail: function (box) {
          var head = el("header", "detail-head");
          var tp = el("div", "tile-top");
          tp.appendChild(el("span", "status" + (st[0] === "open" ? " open" : ""), ui(st[1])));
          head.appendChild(tp);
          var h = el("h3", "", pick(p.title)); h.id = "detail-title"; head.appendChild(h);
          text(head, "p", p.subtitle, "sub");
          box.appendChild(head);
          var cols = el("div", "detail-cols");
          var main = el("div", "detail-main");
          list(p.text).forEach(function (t) { var n = el("p", "", t); if (isTodo(t)) n.classList.add("todo"); main.appendChild(n); });
          var pts = list(p.points);
          if (pts.length) {
            var ul = el("ul", "points");
            pts.forEach(function (t) { var li = el("li", "", t); if (isTodo(t)) li.classList.add("todo"); ul.appendChild(li); });
            main.appendChild(ul);
          }
          renderSections(main, p.sections);
          text(main, "p", p.note, "note");
          cols.appendChild(main);
          var side = el("aside", "side"); var dl = el("dl");
          metaRow(dl, "labelContext", p.context);
          metaRow(dl, "labelPeriod", p.period);
          if (p.tools && p.tools.length) { dl.appendChild(el("dt", "", ui("labelTools"))); dl.appendChild(el("dd", "", p.tools.join(", "))); }
          side.appendChild(dl); cols.appendChild(side);
          box.appendChild(cols);
          var shots = (p.images || []).filter(function (im) { return im && usableUrl(im.src); });
          if (shots.length) renderShots(box, shots); else if (EDIT) todoLine(box, ui("todoScreenshots"));
        }
      }));
    });
    root.appendChild(grid);
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
    var steps = (SITE.path || []).slice().reverse();
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
      var li = el("li", "step reveal" + (s.open ? " open" : ""));
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
      card.appendChild(head);
      text(card, "h3", s.title);
      text(card, "p", s.text);
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
  renderStatic();
  loadAll(paths, function () { renderAll(false); });
})();
