const switchTheme = document.getElementById("theme");
const main = document.getElementById("main");
const header = document.getElementById("header");
const footer = document.getElementById("footer");

switchTheme.addEventListener("click", function() {
    header.classList.toggle("header");
    footer.classList.toggle("footer");
    main.classList.toggle("light-mode");
    document.body.classList.toggle("normal");
});