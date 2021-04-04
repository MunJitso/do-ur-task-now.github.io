let addToDoButton = document.getElementById('addTodo');
let todoContainer = document.getElementById('todoContainer');
let inputField = document.getElementById('inputField');
let darkMode = document.getElementById('darkMode');
let backgroundApp = document.querySelector('body');
let iconDark = document.getElementById('iconDark');

addToDoButton.addEventListener('click', function() {
    var paragraph = document.createElement('p')
    paragraph.classList.add('para');
    paragraph.innerText = inputField.value;
    todoContainer.appendChild(paragraph);
    inputField.value = '';
    paragraph.addEventListener('click', function() {
        paragraph.classList.add('completed');
    })
    paragraph.addEventListener('dblclick', function() {
        todoContainer.removeChild(paragraph);
    })
})

// Dark Mode 

darkMode.addEventListener('click', function() {
    backgroundApp.classList.toggle('dark-background');
    inputField.classList.toggle('darkInput');
    iconDark.classList.toggle('fa-moon');
    iconDark.classList.toggle('fa-sun');
})