// (function () {
//     "use strict";

//     /**
//      * Apply .scrolled class to the body as the page is scrolled down
//      */
//     function toggleScrolled() {
//         const selectBody = document.querySelector("body");
//         const selectHeader = document.querySelector("#header");
//         if (
//             !selectHeader.classList.contains("scroll-up-sticky") &&
//             !selectHeader.classList.contains("sticky-top") &&
//             !selectHeader.classList.contains("fixed-top")
//         )
//             return;
//         window.scrollY > 100 ? selectBody.classList.add("scrolled") : selectBody.classList.remove("scrolled");
//     }

//     document.addEventListener("scroll", toggleScrolled);
//     window.addEventListener("load", toggleScrolled);

//     /**
//      * Mobile nav toggle
//      */
//     const mobileNavToggleBtn = document.querySelector(".mobile-nav-toggle");

//     function mobileNavToogle() {
//         document.querySelector("body").classList.toggle("mobile-nav-active");
//         mobileNavToggleBtn.classList.toggle("bi-list");
//         mobileNavToggleBtn.classList.toggle("bi-x");
//     }
//     mobileNavToggleBtn.addEventListener("click", mobileNavToogle);

//     /**
//      * Hide mobile nav on same-page/hash links
//      */
//     document.querySelectorAll("#navmenu a").forEach((navmenu) => {
//         navmenu.addEventListener("click", () => {
//             if (document.querySelector(".mobile-nav-active")) {
//                 mobileNavToogle();
//             }
//         });
//     });

//     /**
//      * Toggle mobile nav dropdowns
//      */
//     document.querySelectorAll(".navmenu .toggle-dropdown").forEach((navmenu) => {
//         navmenu.addEventListener("click", function (e) {
//             e.preventDefault();
//             this.parentNode.classList.toggle("active");
//             this.parentNode.nextElementSibling.classList.toggle("dropdown-active");
//             e.stopImmediatePropagation();
//         });
//     });

//     /**
//      * Preloader
//      */
//     const preloader = document.querySelector("#preloader");
//     if (preloader) {
//         window.addEventListener("load", () => {
//             preloader.remove();
//         });
//     }

//     /**
//      * Scroll top button
//      */
//     let scrollTop = document.querySelector(".scroll-top");

//     function toggleScrollTop() {
//         if (scrollTop) {
//             window.scrollY > 100 ? scrollTop.classList.add("active") : scrollTop.classList.remove("active");
//         }
//     }
//     scrollTop.addEventListener("click", (e) => {
//         e.preventDefault();
//         window.scrollTo({
//             top: 0,
//             behavior: "smooth",
//         });
//     });

//     window.addEventListener("load", toggleScrollTop);
//     document.addEventListener("scroll", toggleScrollTop);

//     /**
//      * Animation on scroll function and init
//      */
//     function aosInit() {
//         AOS.init({
//             duration: 600,
//             easing: "ease-in-out",
//             once: true,
//             mirror: false,
//         });
//     }
//     window.addEventListener("load", aosInit);

//     /**
//      * Initiate glightbox
//      */
//     const glightbox = GLightbox({
//         selector: ".glightbox",
//     });

//     /**
//      * Init swiper sliders
//      */
//     function initSwiper() {
//         document.querySelectorAll(".init-swiper").forEach(function (swiperElement) {
//             let config = JSON.parse(swiperElement.querySelector(".swiper-config").innerHTML.trim());

//             if (swiperElement.classList.contains("swiper-tab")) {
//                 initSwiperWithCustomPagination(swiperElement, config);
//             } else {
//                 new Swiper(swiperElement, config);
//             }
//         });
//     }

//     window.addEventListener("load", initSwiper);

//     /**
//      * Frequently Asked Questions Toggle
//      */
//     document.querySelectorAll(".faq-item h3, .faq-item .faq-toggle").forEach((faqItem) => {
//         faqItem.addEventListener("click", () => {
//             faqItem.parentNode.classList.toggle("faq-active");
//         });
//     });

//     /**
//      * Animate the skills items on reveal
//      */
//     let skillsAnimation = document.querySelectorAll(".skills-animation");
//     skillsAnimation.forEach((item) => {
//         new Waypoint({
//             element: item,
//             offset: "80%",
//             handler: function (direction) {
//                 let progress = item.querySelectorAll(".progress .progress-bar");
//                 progress.forEach((el) => {
//                     el.style.width = el.getAttribute("aria-valuenow") + "%";
//                 });
//             },
//         });
//     });

//     /**
//      * Init isotope layout and filters
//      */
//     document.querySelectorAll(".isotope-layout").forEach(function (isotopeItem) {
//         let layout = isotopeItem.getAttribute("data-layout") ?? "masonry";
//         let filter = isotopeItem.getAttribute("data-default-filter") ?? "*";
//         let sort = isotopeItem.getAttribute("data-sort") ?? "original-order";

//         let initIsotope;
//         imagesLoaded(isotopeItem.querySelector(".isotope-container"), function () {
//             initIsotope = new Isotope(isotopeItem.querySelector(".isotope-container"), {
//                 itemSelector: ".isotope-item",
//                 layoutMode: layout,
//                 filter: filter,
//                 sortBy: sort,
//             });
//         });

//         isotopeItem.querySelectorAll(".isotope-filters li").forEach(function (filters) {
//             filters.addEventListener(
//                 "click",
//                 function () {
//                     isotopeItem.querySelector(".isotope-filters .filter-active").classList.remove("filter-active");
//                     this.classList.add("filter-active");
//                     initIsotope.arrange({
//                         filter: this.getAttribute("data-filter"),
//                     });
//                     if (typeof aosInit === "function") {
//                         aosInit();
//                     }
//                 },
//                 false
//             );
//         });
//     });

//     /**
//      * Correct scrolling position upon page load for URLs containing hash links.
//      */
//     window.addEventListener("load", function (e) {
//         if (window.location.hash) {
//             if (document.querySelector(window.location.hash)) {
//                 setTimeout(() => {
//                     let section = document.querySelector(window.location.hash);
//                     let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
//                     window.scrollTo({
//                         top: section.offsetTop - parseInt(scrollMarginTop),
//                         behavior: "smooth",
//                     });
//                 }, 100);
//             }
//         }
//     });

//     /**
//      * Navmenu Scrollspy
//      */
//     let navmenulinks = document.querySelectorAll(".navmenu a");

//     function navmenuScrollspy() {
//         navmenulinks.forEach((navmenulink) => {
//             if (!navmenulink.hash) return;
//             let section = document.querySelector(navmenulink.hash);
//             if (!section) return;
//             let position = window.scrollY + 200;
//             if (position >= section.offsetTop && position <= section.offsetTop + section.offsetHeight) {
//                 document.querySelectorAll(".navmenu a.active").forEach((link) => link.classList.remove("active"));
//                 navmenulink.classList.add("active");
//             } else {
//                 navmenulink.classList.remove("active");
//             }
//         });
//     }
//     window.addEventListener("load", navmenuScrollspy);
//     document.addEventListener("scroll", navmenuScrollspy);
// })();


(function () {
    "use strict";

    const body = document.querySelector("body");
    const header = document.querySelector("#header");
    const mobileNavToggleBtn = document.querySelector(".mobile-nav-toggle");
    const preloader = document.querySelector("#preloader");
    const scrollTop = document.querySelector(".scroll-top");

    /** Add/remove classes based on scroll position */
    function toggleScrolled() {
        if (
            !header.classList.contains("scroll-up-sticky") &&
            !header.classList.contains("sticky-top") &&
            !header.classList.contains("fixed-top")
        )
            return;
        window.scrollY > 100 ? body.classList.add("scrolled") : body.classList.remove("scrolled");
    }

    /** Toggle mobile navigation */
    function mobileNavToogle() {
        body.classList.toggle("mobile-nav-active");
        mobileNavToggleBtn.classList.toggle("bi-list");
        mobileNavToggleBtn.classList.toggle("bi-x");
    }

    /** Hide mobile nav on same-page links */
    function setupNavLinks() {
        document.querySelectorAll("#navmenu a").forEach((link) => {
            link.addEventListener("click", () => {
                if (body.classList.contains("mobile-nav-active")) mobileNavToogle();
            });
        });
    }

    /** Toggle dropdowns in mobile nav */
    function setupDropdowns() {
        document.querySelectorAll(".navmenu .toggle-dropdown").forEach((toggle) => {
            toggle.addEventListener("click", function (e) {
                e.preventDefault();
                this.parentNode.classList.toggle("active");
                this.parentNode.nextElementSibling.classList.toggle("dropdown-active");
                e.stopImmediatePropagation();
            });
        });
    }

    /** Remove preloader on page load */
    function handlePreloader() {
        if (preloader) {
            preloader.remove();
        }
    }

    /** Show/hide scroll-to-top button */
    function toggleScrollTop() {
        if (scrollTop) {
            window.scrollY > 100 ? scrollTop.classList.add("active") : scrollTop.classList.remove("active");
        }
    }

    /** Scroll to top smoothly */
    function setupScrollTop() {
        if (scrollTop) {
            scrollTop.addEventListener("click", (e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
            });
        }
    }

    // /** Initialize AOS */
    // function aosInit() {
    //     AOS.init({ duration: 600, easing: "ease-in-out", once: true, mirror: false });
    // }

    function aosInit() {
        AOS.init({ duration: 600, easing: "ease-in-out", once: true, mirror: false });
    
        // Forzar actualización de AOS después de 1 segundo
        setTimeout(() => {
            AOS.refresh();
        }, 1000);
    }
    

    /** Initialize GLightbox */
    function initGlightbox() {
        GLightbox({ selector: ".glightbox" });
    }

    /** Initialize Swiper sliders */
    function initSwiper() {
        document.querySelectorAll(".init-swiper").forEach((swiperElement) => {
            let config = JSON.parse(swiperElement.querySelector(".swiper-config").textContent.trim());
            new Swiper(swiperElement, config);
        });
    }

    /** Toggle FAQ items */
    function setupFAQs() {
        document.querySelectorAll(".faq-item h3, .faq-item .faq-toggle").forEach((faqItem) => {
            faqItem.addEventListener("click", () => {
                faqItem.parentNode.classList.toggle("faq-active");
            });
        });
    }

    /** Animate skills bars */
    function setupSkillsAnimation() {
        document.querySelectorAll(".skills-animation").forEach((item) => {
            new Waypoint({
                element: item,
                offset: "80%",
                handler: function () {
                    item.querySelectorAll(".progress .progress-bar").forEach((el) => {
                        el.style.width = el.getAttribute("aria-valuenow") + "%";
                    });
                },
            });
        });
    }

    /** Initialize Isotope layouts */
    function initIsotope() {
        document.querySelectorAll(".isotope-layout").forEach((isotopeItem) => {
            let layout = isotopeItem.dataset.layout || "masonry";
            let filter = isotopeItem.dataset.defaultFilter || "*";
            let sort = isotopeItem.dataset.sort || "original-order";

            imagesLoaded(isotopeItem.querySelector(".isotope-container"), () => {
                let initIsotope = new Isotope(isotopeItem.querySelector(".isotope-container"), {
                    itemSelector: ".isotope-item",
                    layoutMode: layout,
                    filter: filter,
                    sortBy: sort,
                });

                isotopeItem.querySelectorAll(".isotope-filters li").forEach((filterBtn) => {
                    filterBtn.addEventListener("click", function () {
                        isotopeItem.querySelector(".filter-active").classList.remove("filter-active");
                        this.classList.add("filter-active");
                        initIsotope.arrange({ filter: this.dataset.filter });
                        aosInit();
                    });
                });
            });
        });
    }

    /** Correct scrolling position for hash links on load */
    function fixHashScrolling() {
        if (window.location.hash) {
            let section = document.querySelector(window.location.hash);
            if (section) {
                setTimeout(() => {
                    let scrollMarginTop = parseInt(getComputedStyle(section).scrollMarginTop);
                    window.scrollTo({ top: section.offsetTop - scrollMarginTop, behavior: "smooth" });
                }, 100);
            }
        }
    }

    /** Update active nav menu link on scroll */
    function navmenuScrollspy() {
        document.querySelectorAll(".navmenu a").forEach((link) => {
            if (!link.hash) return;
            let section = document.querySelector(link.hash);
            if (!section) return;
            let position = window.scrollY + 200;
            link.classList.toggle(
                "active",
                position >= section.offsetTop && position <= section.offsetTop + section.offsetHeight
            );
        });
    }

    // Event listeners
    document.addEventListener("scroll", () => {
        toggleScrolled();
        toggleScrollTop();
        navmenuScrollspy();
    });

    window.addEventListener("load", () => {
        toggleScrolled();
        handlePreloader();
        toggleScrollTop();
        aosInit();
        initGlightbox();
        initSwiper();
        setupNavLinks();
        setupDropdowns();
        setupFAQs();
        setupSkillsAnimation();
        initIsotope();
        fixHashScrolling();
        navmenuScrollspy();
    });

    mobileNavToggleBtn?.addEventListener("click", mobileNavToogle);
    setupScrollTop();
})();
