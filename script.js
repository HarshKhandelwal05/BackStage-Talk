const sections = document.querySelectorAll("main> div");

const colors = {
    section7: "#ff5500",
    section6: "#F2E4B6",
    section5: "#FF5D8F",
    section4: "#7d7a7a",
    section3: "#00c1b5",
    section2: "#ffbe00",
    section1: "#e30512"
};

window.addEventListener("scroll", function () {
    let currentSection = "";

    sections.forEach(function (section) {
        const position = section.getBoundingClientRect();

        if (
            position.top <= window.innerHeight / 2 &&
            position.bottom >= window.innerHeight / 2
        ) {
            currentSection = section.id;
        }
    });

    if (currentSection !== "") {
        document.body.style.backgroundColor = colors[currentSection];
    }
})