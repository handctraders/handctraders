document.addEventListener("DOMContentLoaded", () => {


    /* =====================================================
       MOBILE NAVIGATION
    ===================================================== */

    const menuButton =
        document.querySelector(".menu-toggle");

    const nav =
        document.querySelector(".nav");


    if (menuButton) {

        menuButton.addEventListener("click", () => {

            const isOpen =
                nav.classList.toggle("open");

            menuButton.setAttribute(
                "aria-expanded",
                String(isOpen)
            );

        });

    }



    /* =====================================================
       CLOSE MOBILE MENU AFTER CLICK
    ===================================================== */

    document
        .querySelectorAll(".nav a, .nav-cta")
        .forEach(link => {

            link.addEventListener("click", () => {

                nav.classList.remove("open");

            });

        });



    /* =====================================================
       SCROLL REVEAL ANIMATION
    ===================================================== */

    const observer =
        new IntersectionObserver(

            (entries, obs) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target
                            .classList
                            .add("visible");

                        obs.unobserve(
                            entry.target
                        );

                    }

                });

            },

            {
                threshold: 0.12
            }

        );


    document
        .querySelectorAll(".reveal")
        .forEach(element => {

            observer.observe(element);

        });



    /* =====================================================
       CURRENT YEAR
    ===================================================== */

    const year =
        document.getElementById("year");


    if (year) {

        year.textContent =
            new Date().getFullYear();

    }



    /* =====================================================
       WHATSAPP ENQUIRY FORM
    ===================================================== */

    const form =
        document.getElementById("enquiryForm");


    if (form) {

        form.addEventListener(
            "submit",
            event => {

                event.preventDefault();


                const name =
                    document
                        .getElementById("name")
                        .value
                        .trim();


                const phone =
                    document
                        .getElementById("phone")
                        .value
                        .trim();


                const message =
                    document
                        .getElementById("message")
                        .value
                        .trim();



                const whatsappMessage =

                    `Hello H&C Traders,%0A%0A` +

                    `Name: ${
                        encodeURIComponent(name)
                    }%0A` +

                    `Phone: ${
                        encodeURIComponent(phone)
                    }%0A` +

                    `Requirement: ${
                        encodeURIComponent(message)
                    }%0A%0A` +

                    `I found H&C Traders through your website.`;



                window.open(

                    `https://wa.me/919346629168?text=${whatsappMessage}`,

                    "_blank",

                    "noopener"

                );

            }

        );

    }

});