const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('______');

let chaptersArray = getChapterList() || [];

const li = document.createElement('li');

const deleteButton = document.createElement('button');

li.textContent = input.value;

deleteButton.textContent = 'X';

li.append(deleteButton);

list.append(li);

button.addEventListener('click', function () {
    if (input.value != '') {
        displayList(input.value);
        setChapterList();
        input.value = '';
        input.focus();
    }
});

chaptersArray.forEach(chapter => {
    displayList(chapter);
});




