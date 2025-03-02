document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("nav ul li a");

    links.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const section = document.querySelector(this.getAttribute("href"));
            if (section) {
                window.scrollTo({
                    top: section.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });

    window.addEventListener("scroll", function () {
        let nav = document.querySelector("nav");
        if (window.scrollY > 50) {
            nav.style.background = "#222";
        } else {
            nav.style.background = "#444";
        }
    });
});
