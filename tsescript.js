document.addEventListener("DOMContentLoaded", () => {

    /* ================= MOBILE MENU ================= */

    const menuBtn = document.querySelector(".menu-btn");
    const navLinks = document.querySelector(".nav-links");

    if (menuBtn && navLinks) {

        const icon = menuBtn.querySelector("i");

        menuBtn.addEventListener("click", () => {

            navLinks.classList.toggle("show");

            if (icon) {
                icon.classList.toggle("fa-bars");
                icon.classList.toggle("fa-times");
            }

        });

    }


    /* ================= SCROLL REVEAL ================= */

    const reveals = document.querySelectorAll(".reveal");

    function revealSections() {

        reveals.forEach(section => {

            const revealTop = section.getBoundingClientRect().top;

            if (revealTop < window.innerHeight - 120) {
                section.classList.add("active");
            }

        });

    }

    window.addEventListener("scroll", revealSections);
    revealSections();


    /* ================= TESTIMONIAL SLIDER ================= */

    const slides = document.querySelectorAll(".testi-slide");

    if (slides.length > 0) {

        let currentSlide = 0;

        setInterval(() => {

            slides[currentSlide].classList.remove("active");

            currentSlide = (currentSlide + 1) % slides.length;

            slides[currentSlide].classList.add("active");

        }, 5000);

    }


    /* ================= COUNTER ================= */

    const counterSection = document.querySelector(".counter-section");
    const counters = document.querySelectorAll(".counter");

    if (counterSection && counters.length > 0) {

        const startCounter = () => {

            counters.forEach(counter => {

                const update = () => {

                    const target = +counter.dataset.target;
                    const count = +counter.innerText;

                    const increment = Math.ceil(target / 100);

                    if (count < target) {

                        counter.innerText = count + increment;

                        setTimeout(update, 20);

                    } else {

                        counter.innerText = target + "+";

                    }

                };

                update();

            });

        };

        const observer = new IntersectionObserver(entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    startCounter();
                    observer.unobserve(counterSection);

                }

            });

        });

        observer.observe(counterSection);

    }


    /* ================= FAQ ================= */

    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {

        const question = item.querySelector(".faq-question");

        question.addEventListener("click", () => {

            faqItems.forEach(faq => {

                if (faq !== item) {
                    faq.classList.remove("active");
                }

            });

            item.classList.toggle("active");

        });

    });


    /* ================= WHATSAPP ================= */

    const whatsapp = document.querySelector(".whatsapp");

    if (whatsapp) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 300) {

                whatsapp.style.opacity = "1";
                whatsapp.style.visibility = "visible";

            } else {

                whatsapp.style.opacity = "0";
                whatsapp.style.visibility = "hidden";

            }

        });

    }


    /* ================= BACK TO TOP ================= */

    const backToTop = document.getElementById("backToTop");

    if (backToTop) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 300) {

                backToTop.style.opacity = "1";
                backToTop.style.visibility = "visible";

            } else {

                backToTop.style.opacity = "0";
                backToTop.style.visibility = "hidden";

            }

        });

        backToTop.addEventListener("click", () => {

            window.scrollTo({

                top: 0,
                behavior: "smooth"

            });

        });

    }


    /* ================= NEWSLETTER ================= */

    const newsletter = document.querySelector(".newsletter-form");

    if (newsletter) {

        newsletter.addEventListener("submit", e => {

            e.preventDefault();

            alert("Thank you for subscribing to Tsega Milk!");

            newsletter.reset();

        });

    }

});


/* ================= LOADER ================= */

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    if (loader) {

        setTimeout(() => {

            loader.classList.add("hide");

        }, 2000);

    }

});