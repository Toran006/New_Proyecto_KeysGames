/* =========================================
   G3BKeys
   JavaScript
========================================= */


document.addEventListener("DOMContentLoaded", () => {


    /* =========================================
       MENÚ RESPONSIVE
    ========================================= */

    const menuToggle = document.getElementById("menuToggle");

    const navMenu = document.getElementById("navMenu");

    const navLinks = document.querySelectorAll(".nav-link");


    if (menuToggle && navMenu) {

        menuToggle.addEventListener("click", () => {

            navMenu.classList.toggle("active");


            const icon = menuToggle.querySelector("i");


            if (navMenu.classList.contains("active")) {

                icon.classList.remove("fa-bars");

                icon.classList.add("fa-xmark");

            } else {

                icon.classList.remove("fa-xmark");

                icon.classList.add("fa-bars");

            }

        });


        /* Cerrar menú al seleccionar una opción */

        navLinks.forEach(link => {

            link.addEventListener("click", () => {

                navMenu.classList.remove("active");


                const icon = menuToggle.querySelector("i");

                icon.classList.remove("fa-xmark");

                icon.classList.add("fa-bars");

            });

        });

    }



    /* =========================================
       AÑO AUTOMÁTICO
    ========================================= */

    const currentYear = document.getElementById("currentYear");


    if (currentYear) {

        currentYear.textContent = new Date().getFullYear();

    }



    /* =========================================
       BOTÓN VOLVER ARRIBA
    ========================================= */

    const backToTop = document.getElementById("backToTop");


    if (backToTop) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 500) {

                backToTop.classList.add("show");

            } else {

                backToTop.classList.remove("show");

            }

        });


        backToTop.addEventListener("click", () => {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        });

    }



    /* =========================================
       NAVEGACIÓN ACTIVA
    ========================================= */

    const sections = document.querySelectorAll("section[id]");


    const updateActiveLink = () => {

        let currentSection = "";


        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 150;

            const sectionHeight =
                section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight
            ) {

                currentSection = section.getAttribute("id");

            }

        });


        navLinks.forEach(link => {

            link.classList.remove("active");


            const href =
                link.getAttribute("href");


            if (href === `#${currentSection}`) {

                link.classList.add("active");

            }

        });

    };


    window.addEventListener(
        "scroll",
        updateActiveLink
    );


    updateActiveLink();



    /* =========================================
       ANIMACIONES AL HACER SCROLL
    ========================================= */

    const animatedElements = document.querySelectorAll(
        ".problem-card, " +
        ".feature-card, " +
        ".solution-item, " +
        ".tech-card, " +
        ".database-box, " +
        ".team-card"
    );


    animatedElements.forEach(element => {

        element.classList.add("fade-in");

    });


    const observer = new IntersectionObserver(

        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.15
        }

    );


    animatedElements.forEach(element => {

        observer.observe(element);

    });



    /* =========================================
       EFECTO DEL HEADER AL HACER SCROLL
    ========================================= */

    const header = document.querySelector(".header");


    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {

            header.style.background =
                "rgba(8, 6, 10, 0.96)";

        } else {

            header.style.background =
                "rgba(11, 8, 16, 0.82)";

        }

    });



    /* =========================================
       EFECTO DE ESCRITURA EN TERMINAL
    ========================================= */

    const terminalCursor =
        document.querySelector(".terminal-cursor");


    if (terminalCursor) {

        setInterval(() => {

            terminalCursor.style.opacity =
                terminalCursor.style.opacity === "0"
                    ? "1"
                    : "0";

        }, 500);

    }



    /* =========================================
       SMOOTH SCROLL PARA ENLACES
    ========================================= */

    document.querySelectorAll(
        'a[href^="#"]'
    ).forEach(anchor => {

        anchor.addEventListener("click", function (event) {

            const targetId =
                this.getAttribute("href");


            if (
                targetId === "#" ||
                targetId === ""
            ) {

                return;

            }


            const target =
                document.querySelector(targetId);


            if (target) {

                event.preventDefault();


                const headerHeight =
                    document.querySelector(".header")
                    .offsetHeight;


                const targetPosition =
                    target.offsetTop -
                    headerHeight;


                window.scrollTo({

                    top: targetPosition,

                    behavior: "smooth"

                });

            }

        });

    });

});