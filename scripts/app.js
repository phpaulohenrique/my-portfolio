ScrollReveal({
    origin: "left",
    distance: "100px",
    duration: 1500,
}).reveal(`
    #header h1`);

ScrollReveal({
    origin: "right",
    distance: "100px",
    duration: 1500,
}).reveal(`
    #header img`);

ScrollReveal({
    origin: "bottom",
    distance: "70px",
    duration: 2500,
}).reveal(`
    #main__section-hello, #main__section-hello,
    #main__section-about-me h1,
    #main__section-about-me p,
    #main__section-projects h1,
    .main__section-projects__cards__card,
    .main__section-projects__link-github,
    #main__section-knowledge h1,
    .main__section-knowledge__techs__instruction,
    .main__section-knowledge__icons img,
    #main__section-contact h1,
    .main__section-contact__contacts a`);



// =======================================

const IS_ACTIVE = 'is--active'
const CLICK = 'click'
const MOUSE_OVER = 'mouseover'



// ============= MENU ==================================================
const menuBtn = document.querySelector("[js-menu-btn]");
const menuContainer = document.querySelector("[js-container-menu]");
const menuLinks = document.querySelectorAll("[js-menu-link]");

menuBtn.addEventListener(CLICK, () => {
    document.body.classList.toggle('menu-expanded')
    menuBtn.classList.toggle(IS_ACTIVE);
});


Array.from(menuLinks).forEach((li) => {
    li.addEventListener(CLICK, () => {
        document.body.classList.remove("menu-expanded");
    });
});


// ============= TECHNOLOGIES AND TEXTS =========================

const imgsTechnologies = document.querySelectorAll("[js-techs-knowledge-img]");

const textsTechnologies = document.querySelectorAll("[js-techs-knowledge-text]");
const textMouseOverText = document.querySelector("[js-knowledge-instruction-text]"
);
const technologiesTexts = Array.from(textsTechnologies);

let isMobile = window.matchMedia("(pointer:coarse)").matches;

if (isMobile) {
    textMouseOverText.innerText =
        "*Clique no card para ler*";
}

function hideTechnologyText(){
    textsTechnologies.forEach((text) => {
        text.classList.remove(IS_ACTIVE);
    });
}

imgsTechnologies.forEach((img) => { img.addEventListener(MOUSE_OVER, () => {
    hideTechnologyText();

    function findIndexTechnologyTextOnMouseOverImg(textTechnology) {
        return textTechnology.getAttribute("name") == img.name;
    }

    const indexTechnologyTextMouseOver = technologiesTexts.findIndex(
        findIndexTechnologyTextOnMouseOverImg
    );

    textsTechnologies[indexTechnologyTextMouseOver].classList.add(IS_ACTIVE);
});})




