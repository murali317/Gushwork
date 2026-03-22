(function () {
  "use strict";

  var header = document.querySelector("[data-header]");
  var toggle = document.querySelector("[data-nav-toggle]");
  var menu = document.querySelector("[data-nav-menu]");
  var yearEls = document.querySelectorAll("[data-year]");

  if (yearEls.length) {
    var y = String(new Date().getFullYear());
    yearEls.forEach(function (el) {
      el.textContent = y;
    });
  }

  function setMenuOpen(isOpen) {
    if (!toggle || !menu) return;
    toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    menu.classList.toggle("is-open", isOpen);
  }

  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      var expanded = toggle.getAttribute("aria-expanded") === "true";
      setMenuOpen(!expanded);
    });

    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        if (window.matchMedia("(max-width: 900px)").matches) {
          setMenuOpen(false);
        }
      });
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") setMenuOpen(false);
    });

    document.addEventListener("click", function (e) {
      if (!toggle.contains(e.target) && !menu.contains(e.target)) {
        setMenuOpen(false);
      }
    });

    window.addEventListener("resize", function () {
      if (!window.matchMedia("(max-width: 900px)").matches) {
        setMenuOpen(false);
      }
    });
  }

  // Subtle scroll shadow on header (no layout thrash)
  if (header) {
    var onScroll = function () {
      var scrolled = window.scrollY > 2;
      header.dataset.scrolled = scrolled ? "true" : "false";
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  // Respect reduced motion for any future animations
  var reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  if (!reduceMotion && "IntersectionObserver" in window) {
    var revealables = document.querySelectorAll(
      ".steps__item, .stat-card, .agent-card, .quote, .cta__inner",
    );
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { root: null, threshold: 0.12, rootMargin: "0px 0px -5% 0px" },
    );

    revealables.forEach(function (el) {
      el.classList.add("reveal");
      io.observe(el);
    });
  }

  /* Modals: datasheet + quote */
  var modal1 = document.getElementById("modalAction1");
  var modal2 = document.getElementById("modalAction2");
  var btnOpen1 = document.getElementById("btnAction1");
  var btnOpen2 = document.getElementById("btnAction2");
  var close1 = document.getElementById("closeAction1");
  var close2 = document.getElementById("closeAction2");
  var openModals = [];

  function getOpenModal() {
    return openModals.length ? openModals[openModals.length - 1] : null;
  }

  function openModal(modal) {
    if (!modal || modal.classList.contains("active")) return;
    modal.removeAttribute("hidden");
    openModals.push(modal);
    document.body.style.overflow = "hidden";
    requestAnimationFrame(function () {
      modal.classList.add("active");
    });
    var focusable = modal.querySelector(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
    );
    if (focusable) focusable.focus();
  }

  function closeModal(modal) {
    if (!modal) return;
    modal.classList.remove("active");
    var idx = openModals.indexOf(modal);
    if (idx !== -1) openModals.splice(idx, 1);
    window.setTimeout(function () {
      if (!modal.classList.contains("active")) {
        modal.setAttribute("hidden", "");
      }
      if (!openModals.length) {
        document.body.style.overflow = "";
      }
    }, 320);
  }

  function closeTopModal() {
    var m = getOpenModal();
    if (m) closeModal(m);
  }

  if (btnOpen1 && modal1) {
    btnOpen1.addEventListener("click", function () {
      openModal(modal1);
    });
  }
  if (close1 && modal1) {
    close1.addEventListener("click", function () {
      closeModal(modal1);
    });
  }

  if (btnOpen2 && modal2) {
    btnOpen2.addEventListener("click", function () {
      openModal(modal2);
    });
  }
  if (close2 && modal2) {
    close2.addEventListener("click", function () {
      closeModal(modal2);
    });
  }

  var formDatasheet = document.getElementById("formDatasheet");
  if (formDatasheet && modal1) {
    formDatasheet.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!formDatasheet.checkValidity()) {
        formDatasheet.reportValidity();
        return;
      }
      closeModal(modal1);
      formDatasheet.reset();
    });
  }

  var formQuote = document.getElementById("formQuote");
  if (formQuote && modal2) {
    formQuote.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!formQuote.checkValidity()) {
        formQuote.reportValidity();
        return;
      }
      closeModal(modal2);
      formQuote.reset();
    });
  }

  [modal1, modal2].forEach(function (modal) {
    if (!modal) return;
    modal.addEventListener("click", function (e) {
      if (e.target === modal) closeModal(modal);
    });
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && getOpenModal()) {
      e.preventDefault();
      closeTopModal();
    }
  });

  /* Versatile applications: horizontal slider arrows */
  var appsSlider = document.getElementById("appsSlider");
  var appsPrev = document.getElementById("appsPrev");
  var appsNext = document.getElementById("appsNext");

  function getApplicationsScrollStep() {
    if (!appsSlider) return 320;
    var card = appsSlider.querySelector(".app-card--overlay");
    if (!card) return 320;
    var gap = 0;
    var g =
      window.getComputedStyle(appsSlider).gap ||
      window.getComputedStyle(appsSlider).columnGap;
    if (g && g !== "normal") {
      var parsed = parseFloat(g, 10);
      if (!isNaN(parsed)) gap = parsed;
    }
    return card.offsetWidth + gap;
  }

  function scrollApplications(dir) {
    if (!appsSlider) return;
    var step = getApplicationsScrollStep();
    appsSlider.scrollBy({
      left: dir * step,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  }

  if (appsPrev && appsSlider) {
    appsPrev.addEventListener("click", function () {
      scrollApplications(-1);
    });
  }
  if (appsNext && appsSlider) {
    appsNext.addEventListener("click", function () {
      scrollApplications(1);
    });
  }

  /* Hero carousel: hover zoom lens + magnified preview */
  var carouselMain = document.getElementById("carouselMain");
  var mainImage = document.getElementById("mainImage");
  var zoomLens = document.getElementById("zoomLens");
  var zoomPreview = document.getElementById("zoomPreview");
  var zoomMedia = window.matchMedia("(min-width: 769px)");

  function clampNum(v, min, max) {
    return Math.max(min, Math.min(max, v));
  }

  function hideCarouselZoom() {
    if (zoomLens) zoomLens.style.display = "none";
    if (zoomPreview) zoomPreview.classList.remove("active");
  }

  function updateCarouselZoom(e) {
    if (!carouselMain || !mainImage || !zoomLens) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      hideCarouselZoom();
      return;
    }
    var nw = mainImage.naturalWidth;
    var nh = mainImage.naturalHeight;
    var rect = mainImage.getBoundingClientRect();
    if (!nw || !nh) {
      nw = rect.width;
      nh = rect.height;
    }

    var cw = rect.width;
    var ch = rect.height;
    var x = e.clientX - rect.left;
    var y = e.clientY - rect.top;

    if (x < 0 || y < 0 || x > cw || y > ch) {
      hideCarouselZoom();
      return;
    }

    var scale = Math.max(cw / nw, ch / nh);
    var dw = nw * scale;
    var dh = nh * scale;
    if (dw <= 0 || dh <= 0) return;
    var offsetX = (cw - dw) / 2;
    var offsetY = (ch - dh) / 2;

    var lensW = 120;
    var lensH = 120;
    var lensLeft = clampNum(x - lensW / 2, 0, cw - lensW);
    var lensTop = clampNum(y - lensH / 2, 0, ch - lensH);

    zoomLens.style.left = lensLeft + "px";
    zoomLens.style.top = lensTop + "px";
    zoomLens.style.display = "block";

    var relX = clampNum((x - offsetX) / dw, 0, 1);
    var relY = clampNum((y - offsetY) / dh, 0, 1);
    var nx = relX * nw;
    var ny = relY * nh;

    var zoomLevel = 2.5;
    var previewW = 400;
    var previewH = 400;

    if (zoomPreview && zoomMedia.matches) {
      var src = mainImage.currentSrc || mainImage.src;
      zoomPreview.style.backgroundImage =
        'url("' + src.replace(/"/g, '\\"') + '")';
      zoomPreview.style.backgroundSize =
        nw * zoomLevel + "px " + nh * zoomLevel + "px";
      var bgX = -(nx * zoomLevel - previewW / 2);
      var bgY = -(ny * zoomLevel - previewH / 2);
      var maxX = 0;
      var maxY = 0;
      var minX = -(nw * zoomLevel - previewW);
      var minY = -(nh * zoomLevel - previewH);
      bgX = clampNum(bgX, minX, maxX);
      bgY = clampNum(bgY, minY, maxY);
      zoomPreview.style.backgroundPosition = bgX + "px " + bgY + "px";
      zoomPreview.classList.add("active");
    }
  }

  if (carouselMain && mainImage && zoomLens) {
    carouselMain.addEventListener("mousemove", updateCarouselZoom);
    carouselMain.addEventListener("mouseenter", function (e) {
      updateCarouselZoom(e);
    });
    carouselMain.addEventListener("mouseleave", hideCarouselZoom);
    window.addEventListener(
      "resize",
      function () {
        if (!zoomPreview || !zoomPreview.classList.contains("active")) return;
        hideCarouselZoom();
      },
      { passive: true },
    );
  }

  /* ── Sticky header: show on scroll-down past hero, hide on scroll-up ── */
  var stickyHeader = document.getElementById("stickyHeader");
  if (stickyHeader) {
    var heroSection = document.getElementById("hero");
    var lastScrollTop = window.scrollY;

    window.addEventListener(
      "scroll",
      function () {
        var currentY = window.scrollY;
        var heroBottom = heroSection
          ? heroSection.offsetTop + heroSection.offsetHeight
          : 400;

        if (currentY > lastScrollTop && currentY > heroBottom) {
          // Scrolling DOWN and past hero → show
          stickyHeader.classList.add("visible");
        } else if (currentY < lastScrollTop) {
          // Scrolling UP → hide
          stickyHeader.classList.remove("visible");
        }
        lastScrollTop = currentY <= 0 ? 0 : currentY;
      },
      { passive: true },
    );
  }
})();
