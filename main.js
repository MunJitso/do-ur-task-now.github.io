let addToDoButton = document.getElementById('addTodo');
let todoContainer = document.getElementById('todoContainer');
let inputField = document.getElementById('inputField');

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