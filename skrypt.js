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

let facts = ["A black hole is created when big stars explode. Its gravitational force is so strong that nothing can escape from it – luckily the closest black hole is about 10,000 light-years from Earth.",
    "When venturing into space, astronauts wear spacesuits which have to be warmed, cooled, pressurised and supplied with fresh air. This takes six hours for them to put on!",
    "The universe has no centre and is constantly expanding (getting bigger) every second – making it impossible to reach the edge.",
    "The Earth is about 4.5 billion years old – but that’s only a third of the age of the universe – which is 13.5 billion years old!",
    "The Earth is tiny in comparison with the rest of the universe – it could fit into the Sun 1.3 million times.",
    "The Moon is the reason why we have tides and waves on Earth. Along with the Sun, it moves billions of tonnes of water each day.",
    "A day on Mercury lasts longer than its year! Mercury moves around the Sun faster than any other planet – making its year the equivalent of 88 Earth days. While a day on Mercury – the interval between one sunrise and the next – lasts 176 Earth days!",
    "In 2006, Pluto was reclassified as a ‘dwarf planet’ after 76 years classified as the outermost planet in our solar system since its discovery in 1930."
];

let trivia = document.getElementById("trivia");
let fact = document.getElementById("randomFact");

fact.addEventListener("click", function() {
    trivia.textContent = facts[Math.floor(Math.random() * facts.length)];
});