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
    .main__section-knowledge__icons img`);




const imgsTechnologies = document.querySelectorAll(".main__section-knowledge__icons img");

const textsTechnologies = document.querySelectorAll(
    ".main__section-knowledge__techs p"
);

const textMouseOverText = document.querySelector('.main__section-knowledge__techs__instruction')

let isMobile = window.matchMedia("(pointer:coarse)").matches;

if(isMobile){
    textMouseOverText.innerText = '*Clique em uma das tecnologias para ler a descrição!'
}

console.log(isMobile);

// fromArray()
console.log(textsTechnologies);

const technologiesTexts = Array.from(textsTechnologies);

console.log(technologiesTexts)

// const technologiesThatIKnow = technologiesTexts.reduce((pastTechnology, currentTechnology) => {
//     return [
//         ...pastTechnology,
//         currentTechnology.getAttribute('name'),
//     ];
// }, []);

// console.log(technologiesThatIKnow)

function hideTechnologyText(){
    textsTechnologies.forEach((text) => {
        text.classList.remove("is--active");
    });

}

imgsTechnologies.forEach((img) => { img.addEventListener("mouseover", () => {
    // console.log(img.name)
    // let i
    // const a = textsTechnologies.forEach((text) =>
    //     i = text.getAttribute("name") == 'js'
        
    //     // console.log(text.getAttribute("name")
    // );
    // technologiesThatIKnow

    hideTechnologyText();


    function findIndexTechnologyTextOnMouseOverImg(textTechnology){
        return textTechnology.getAttribute("name") == img.name;

    }
    console.log(technologiesTexts.findIndex(findIndexTechnologyTextOnMouseOverImg));

    const indexTechnologyTextMouseOver = technologiesTexts.findIndex(findIndexTechnologyTextOnMouseOverImg);

    textsTechnologies[indexTechnologyTextMouseOver].classList.add("is--active");
    
    // setTimeout(hideTechnologyText, 12000);

    // console.log(i)
    // console.log(nameAtributeTextTech);
    // console.log(img.name == nameAtributeTextTech);
    // console.log(a)
});})


// img.addEventListener('click', () => {
//   alert('eita')
// })

