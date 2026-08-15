document.addEventListener("DOMContentLoaded", function () {

    var menuButton = document.getElementById("menuButton");
    var mobileNav = document.getElementById("mobileNav");


    // Open / close mobile menu
    if (menuButton && mobileNav) {

        menuButton.addEventListener("click", function () {

            mobileNav.classList.toggle("open");

            var menuIsOpen =
                mobileNav.classList.contains("open");

            menuButton.setAttribute(
                "aria-expanded",
                menuIsOpen ? "true" : "false"
            );

        });

    }


    // Close menu after clicking a mobile navigation link
    var mobileLinks =
        document.querySelectorAll("#mobileNav a");


    mobileLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            if (mobileNav) {
                mobileNav.classList.remove("open");
            }

            if (menuButton) {
                menuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );
            }

        });

    });


    // Close mobile menu if browser becomes desktop width
    window.addEventListener("resize", function () {

        if (
            window.innerWidth >= 1200 &&
            mobileNav &&
            menuButton
        ) {

            mobileNav.classList.remove("open");

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

        }

    });

});