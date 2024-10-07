const year = document.querySelector("#year");
const today = new Date();

year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;


const lastModifiedElement = document.querySelector("#lastModified");
const lastModified = new Date(document.lastModified);
const formattedDate = `${lastModified.getDate()}/${lastModified.getMonth() + 1}/${lastModified.getFullYear()} ${lastModified.getHours()}:${lastModified.getMinutes()}`;
lastModifiedElement.textContent = `Last modified: ${formattedDate}`;

function calculateWindChill(){
    const tempElement = document.querySelector(".temp");
    const windelement = document.querySelector(".wind");
    const windChillElement = document.querySelector(".windchill");

    const temperature = parseFloat(tempElement.textContent);
    const windSpeed = parseFloat(windelement);

    if (temperature <= 10 && windSpeed > 4.8) {
        const windChill = (    
            13.12 +
            0.6215 * temperature -
            11.37 * Math.pow(windSpeed, 0.16) +
            0.3965 * temperature * Math.pow(windSpeed, 0.16)
        ).toFixed(2);

        windChillElement.innerHTML = `${windChill}ºC`;
    } else {
        windChillElement.innerHTML = "N/A";
    }

calculaleWindChill();




}