// Función para guardar el nombre en localStorage
function saveName() {
    const nameInput = document.getElementById('yourname').value; // Obtiene el valor del campo de nombre
    if (nameInput) {
        localStorage.setItem('userName', nameInput); // Almacena en localStorage
        console.log('Nombre guardado:', nameInput);  // Verifica en la consola si el nombre se guarda
    } else {
        console.log('No se ingresó ningún nombre');  // Mensaje si no se ingresó un nombre
    }
}

// Función para mostrar el nombre en la página de agradecimiento
function displayName() {
    const storedName = localStorage.getItem('userName'); // Obtiene el nombre desde localStorage
    if (storedName) {
        document.getElementById('name-display').textContent = storedName; // Muestra el nombre
        console.log('Nombre desplegado:', storedName);  // Verifica en la consola si el nombre se muestra
    } else {
        console.log('No se encontró ningún nombre guardado');  // Mensaje si no hay nombre guardado
    }
}

// Ejecuta displayName al cargar la página de agradecimiento
document.addEventListener('DOMContentLoaded', displayName);

