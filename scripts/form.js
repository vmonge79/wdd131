



const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

const selectElement = document.getElementById('product');

products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.id;  
    option.textContent = product.name; 
    selectElement.appendChild(option);
});

function displayReviewCount() {
    const count = localStorage.getItem('reviewCount') || 0;  
    document.getElementById('counterDisplay').innerText = `Number of reviews completed: ${count}`;
}

document.getElementById('reviewForm').addEventListener('submit', function (event) {
    event.preventDefault(); 
    let count = parseInt(localStorage.getItem('reviewCount')) || 0;
    count++;
    localStorage.setItem('reviewCount', count); // 
    console.log('Review submitted'); 
    displayReviewCount();
});

window.onload = displayReviewCount;
