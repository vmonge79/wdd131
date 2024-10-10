const year = document.querySelector("#year");
const today = new Date();

year.textContent = today.getFullYear();

const lastModifiedElement = document.querySelector("#lastModified");
const lastModified = new Date(document.lastModified);
const formattedDate = `${lastModified.getDate()}/${lastModified.getMonth() + 1}/${lastModified.getFullYear()} ${lastModified.getHours()}:${lastModified.getMinutes()}`;
lastModifiedElement.textContent = `Last modified: ${formattedDate}`;


const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});