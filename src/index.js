import _ from 'lodash';
import { todoItemForm, addTodoItem } from './todoItemForm';

// Factory for ToDo Items
const todoItem = (title, description, dueDate, priority) => {
    return {
        title,
        description,
        dueDate,
        priority,
    };
};

// Factory for ToDo Projects
const todoProject = (title) => {
    let list = [];
    return {
        title,
        list,
    };
};

// dummy data
let home = { title: 'home', list: [] };
let todoLists = [
    { title: 'home', list: [] },
    { title: 'work', list: [] },
];
console.log(todoLists);

const clean = todoItem('Wash Dishes', '', '3/5/21', 'low');
todoLists[1].list.push(clean);
console.log(todoLists);
todoItemForm();

document.getElementById('submitBtn').addEventListener('click', addItem);

function addItem() {
    let title = document.querySelector('#title').value;
    let description = document.querySelector('#description').value;
    let dueDate = document.querySelector('#dueDate').value;
    let priority = document.querySelector('#priority').value;
    const todo = todoItem(title, description, dueDate, priority);
    let todoList = 'home';
    for (var i = 0; i < todoLists.length; i++) {
        if (todoLists[i].title == todoList) {
            todoLists[i].list.push(todo);
            console.log(todoLists);
        }
    }
}