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

let bolded = document.getElementById("bold");
let italic = document.getElementById("italic");
let underline = document.getElementById("underline");

let textTransform = document.getElementById("transformer");

let transform = document.getElementById("text");

transform.addEventListener("click", function() {
    if (bolded.checked) {
        textTransform.style.fontWeight = "bold";
    } else {
        textTransform.style.fontWeight = "normal";
    }

    if (italic.checked) {
        textTransform.style.fontStyle = "italic";
    } else {
        textTransform.style.fontStyle = "normal";
    }

    if (underline.checked) {
        textTransform.style.textDecoration = "underline";
    } else {
        textTransform.style.textDecoration = "none";
    }
});

