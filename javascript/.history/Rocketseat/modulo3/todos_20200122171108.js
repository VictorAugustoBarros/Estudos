var listElement =  document.querySelector("# app ul");
var inputElement = document.querySelector("# app input");
var buttonElement = document.querySelector("# app button");

var todos = [
    'Fazer café',
    'Estudar Javascript',
    'Acessar comunidade do Rocketseat'
];


function renderTodos(){
    for(todo of todos){
        var todoElement = document.createAttribute('li');
        var todoText = document.createAttribute(todo);
        todoElement.appendChild(todoText);
    }
}

renderTodos();