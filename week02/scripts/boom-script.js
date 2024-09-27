const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('______');

const li = document.createElement('li');

const deleteButton = document.createElement('button');

li.textContent = input.value;

deleteButton.textContent = 'X';

li.append(deleteButton);

list.append(li);

button.addEventListener('click', function () {
    // Code to execute when the button is clicked
});


