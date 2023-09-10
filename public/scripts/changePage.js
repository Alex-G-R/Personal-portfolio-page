const contactButton = document.getElementById('contact-btn');
const main = document.getElementById('main');
const contactFormPage = document.getElementById('contact-form');
const footer = document.getElementById('footer');
const back = document.getElementById("back-btn")

contactButton.addEventListener('click', () => {
    main.style.display = "none";
    contactFormPage.style.display = "flex";
    footer.style.marginTop = "930px"
    back.style.display= "block";
});

back.addEventListener('click', () => {
    main.style.display = "block";
    contactFormPage.style.display = "none";
    footer.style.marginTop = "200px"
    back.style.display= "none";
});