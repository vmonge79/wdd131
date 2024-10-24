function saveName() {
    const nameInput = document.getElementById('yourname').value; 
    if (nameInput) {
        localStorage.setItem('userName', nameInput);  

        console.log('Nombre guardado:', nameInput);  
    } else {
        console.log('No se ingresó ningún nombre');   
    }
}

 
function displayName() {
    const storedName = localStorage.getItem('userName');  
    if (storedName) {
        document.getElementById('name-display').textContent = storedName;  
        console.log('Nombre desplegado:', storedName);   
    } else {
        console.log('No se encontró ningún nombre guardado');   
    }
}

document.addEventListener('DOMContentLoaded', displayName);

