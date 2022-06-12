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
