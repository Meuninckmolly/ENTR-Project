/* =========================
   MOBILE NAVIGATION
========================= */

const menuButton =
    document.getElementById("menuButton");

const navLinks =
    document.getElementById("navLinks");


if (menuButton) {

    menuButton.addEventListener("click", () => {

        navLinks.classList.toggle("show");

    });

}


/* =========================
   ORIGIN TIMELINE
========================= */

const timelineButtons =
    document.querySelectorAll(".timeline-button");


timelineButtons.forEach(button => {

    button.addEventListener("click", () => {

        const target =
            button.dataset.target;


        timelineButtons.forEach(btn => {

            btn.classList.remove("active");

        });


        document
            .querySelectorAll(".timeline-panel")
            .forEach(panel => {

                panel.classList.remove("active");

            });


        button.classList.add("active");


        const panel =
            document.getElementById(target);


        if (panel) {

            panel.classList.add("active");

        }

    });

});


/* =========================
   BUSINESS MODEL CANVAS
========================= */

const canvasButtons =
    document.querySelectorAll(".canvas-card");


const canvasTitle =
    document.getElementById("canvasTitle");


const canvasText =
    document.getElementById("canvasText");


const canvasInformation = {

    partners: {
        title: "Key Partners",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },

    activities: {
        title: "Key Activities",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },

    resources: {
        title: "Key Resources",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },

    value: {
        title: "Value Proposition",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },

    relationships: {
        title: "Customer Relationships",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },

    channels: {
        title: "Channels",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },

    customers: {
        title: "Customer Segments",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },

    costs: {
        title: "Cost Structure",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },

    revenue: {
        title: "Revenue Streams",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    }

};


canvasButtons.forEach(button => {

    button.addEventListener("click", () => {

        canvasButtons.forEach(btn => {

            btn.classList.remove("selected");

        });


        button.classList.add("selected");


        const info =
            canvasInformation[button.dataset.info];


        if (canvasTitle) {

            canvasTitle.textContent =
                info.title;

            canvasText.textContent =
                info.text;

        }

    });

});


/* =========================
   RISK EXPERIMENT
========================= */

const experimentButtons =
    document.querySelectorAll(".experiment-button");


experimentButtons.forEach(button => {

    button.addEventListener("click", () => {

        const target =
            button.dataset.experiment;


        experimentButtons.forEach(btn => {

            btn.classList.remove("active");

        });


        document
            .querySelectorAll(".experiment-panel")
            .forEach(panel => {

                panel.classList.remove("active");

            });


        button.classList.add("active");


        const panel =
            document.getElementById(target);


        if (panel) {

            panel.classList.add("active");

        }

    });

});


/* =========================
   CHALLENGE ACCORDION
========================= */

const accordionButtons =
    document.querySelectorAll(".accordion-button");


accordionButtons.forEach(button => {

    button.addEventListener("click", () => {

        const item =
            button.parentElement;


        item.classList.toggle("open");


        const symbol =
            button.querySelector("strong");


        if (symbol) {

            if (item.classList.contains("open")) {

                symbol.textContent = "−";

            } else {

                symbol.textContent = "+";

            }

        }

    });

});


/* =========================
   SCROLL REVEAL
========================= */

const revealElements =
    document.querySelectorAll(
        ".case-card, .resource-card, .person-card, .current-grid > div"
    );


const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";

                }

            });

        },
        {
            threshold: .15
        }
    );


revealElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(25px)";

    element.style.transition =
        "opacity .6s ease, transform .6s ease";

    observer.observe(element);

});