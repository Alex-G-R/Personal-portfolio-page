const contactButton = document.getElementById('contact-btn');
const main = document.getElementById('main');
const contactFormPage = document.getElementById('contact-form');
const footer = document.getElementById('footer');

contactButton.addEventListener('click', () => {
    main.style.display = "none";
    contactFormPage.style.display = "flex";
    footer.style.marginTop = "930px"
})