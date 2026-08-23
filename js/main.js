/* ==============================================================
   SPLASHES — SHARED SITE JAVASCRIPT
   Loaded on every page (after jQuery + Bootstrap's JS).
   Contains:
     1. Hamburger menu open/close (vanilla JS)
     2. Sign In / Sign Up modal mode toggle + basic validation (jQuery)
     3. Back-to-top fade button (jQuery)
     4. Swim Programs schedule — loaded via jQuery Ajax
============================================================== */

document.addEventListener("DOMContentLoaded", function () {

    /* ---------------------------------------------------------
       1. HAMBURGER MENU (vanilla JS — no jQuery dependency here
          so the menu still works even if jQuery fails to load)
    --------------------------------------------------------- */

    var menuButton = document.getElementById("menuButton");
    var mobileNav = document.getElementById("mobileNav");

    if (menuButton && mobileNav) {

        menuButton.addEventListener("click", function () {
            mobileNav.classList.toggle("open");

            var menuIsOpen = mobileNav.classList.contains("open");
            menuButton.setAttribute("aria-expanded", menuIsOpen ? "true" : "false");
        });

        var mobileLinks = mobileNav.querySelectorAll("a, button");

        mobileLinks.forEach(function (link) {
            link.addEventListener("click", function () {
                mobileNav.classList.remove("open");
                menuButton.setAttribute("aria-expanded", "false");
            });
        });

        window.addEventListener("resize", function () {
            if (window.innerWidth >= 1200) {
                mobileNav.classList.remove("open");
                menuButton.setAttribute("aria-expanded", "false");
            }
        });
    }

});


/* jQuery-dependent components live in their own $(document).ready
   so a missing/blocked jQuery CDN never breaks the hamburger menu above. */
$(function () {

    /* ---------------------------------------------------------
       2. SIGN IN MODAL
          jQuery component #1 — validates and handles the Sign In
          form submit inside the Bootstrap modal (open/close of the
          modal itself is handled by Bootstrap's data-toggle="modal").
    --------------------------------------------------------- */

    var $signinModal = $("#signinModal");

    $signinModal.on("submit", "#signinForm", function (event) {
        event.preventDefault();

        window.alert("Welcome back! You're signed in.");

        this.reset();
        $signinModal.modal("hide");
    });


    /* ---------------------------------------------------------
       3. BACK TO TOP BUTTON
          jQuery component #2 — fades in/out with scroll position
          and animates the scroll back to the top on click.
    --------------------------------------------------------- */

    var $backToTop = $(
        '<button id="backToTop" type="button" aria-label="Back to top">&uarr;</button>'
    ).appendTo("body");

    $(window).on("scroll", function () {
        if ($(window).scrollTop() > 400) {
            $backToTop.fadeIn(150);
        } else {
            $backToTop.fadeOut(150);
        }
    });

    $backToTop.on("click", function () {
        $("html, body").animate({ scrollTop: 0 }, 500);
    });


    /* ---------------------------------------------------------
       4. SWIM PROGRAMS SCHEDULE — jQuery + AJAX
          Only runs on swim-programs.html (checks the table exists).
          Loads additional class times from data/schedule.json and
          appends them to the schedule table.
    --------------------------------------------------------- */

    var $scheduleBody = $("#scheduleTableBody");

    if ($scheduleBody.length) {

        $.getJSON("data/schedule.json")
            .done(function (classes) {

                classes.forEach(function (item) {
                    var $row = $("<tr>").append(
                        $("<td>").text(item.program),
                        $("<td>").text(item.ageGroup),
                        $("<td>").text(item.skillLevel),
                        $("<td>").text(item.schedule)
                    );

                    $scheduleBody.append($row);
                });
            })
            .fail(function () {
                console.warn("Splashes: could not load additional class times from data/schedule.json");
            });
    }

});
