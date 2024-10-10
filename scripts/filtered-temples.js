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


const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },

    {
        templeName: "Accra, Ghana",
        location: "Accra, Ghana",
        dedicated: "2004, January, 1",
        area: 10000,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/accra-ghana/1200x675/accra-ghana-temple-detail-249022-2400x1200.jpg"
    },

    {
        templeName: "Barranquilla Colombia",
        location: "Barranquilla, Colombia",
        dedicated: "2018, December, 9",
        area: 34280,
        imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOc2WGwhNlPAI0ia4f-8zN2OeD32CAkbOlgw&s"
    },

    {
        templeName: "San José Costa Rica",
        location: "Heredia, Costa Rica",
        dedicated: "2000, Junio, 4",
        area: 116642,
        imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw0NzmAyQID1tyyDu93oMUnwbNipYFDdhTrQ&s"
    }

];

createTempleCard();

function createTempleCard(filteredTemples = temples) {

    const gallery = document.querySelector(".gallery");
    gallery.innerHTML = "";

    filteredTemples.forEach(temple => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = temple.templeName;

        location.innerHTML = `<span class="label">Location: </span> ${temple.location}`;

        dedication.innerHTML = `<span class="label">Dedication: </span>${temple.dedicated}`;

        area.innerHTML = `<span class="label">Size:</span>${temple.area} sq ft.`;

        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);

        document.querySelector(".gallery").appendChild(card);
});

}

const oldLink = document.querySelector(".old");

oldLink.addEventListener("click", () => {
    const oldTemples = temples.filter(temple => {
        const dedicationYr = parseInt(temple.dedicated.split(",")[0], 10);
        return dedicationYr < 2000;
    });
    createTempleCard(oldTemples);
});

const newLink = document.querySelector(".new");
newLink.addEventListener("click", () => {
    const newTemples = temples.filter(temple => {
        const dedicationYr = parseInt(temple.dedicated.split(",")[0], 10);
        return dedicationYr >= 2000;
    });
    createTempleCard(newTemples);
});

const smallLink = document.querySelector(".small");
smallLink.addEventListener("click", () => {
    const smallTemples = temples.filter(temple => parseInt(temple.area) < 10000);
    createTempleCard(smallTemples);
});

const largeLink = document.querySelector(".large");
largeLink.addEventListener("click", () => {
    const largeTemples = temples.filter(temple => temple.area >= 10000);
    createTempleCard(largeTemples);
});