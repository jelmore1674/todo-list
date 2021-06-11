import _ from 'lodash';

class Todo {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }

    success() {
        alert('Successfully added');
    }
}

let list = { default: {} };

let item = new Todo('Work', 'LALALA', '3/21', 'High');
list[0] = item;
item.success();

console.log(list);
console.log(list[0].dueDate);

list.push('work');
let item2 = new Todo('Clean', 'Clean bathroom very well', '4/21/21', 'Low');
list[1] = item2;
console.log(list);

function component() {
    const element = document.createElement('div');

    // Lodash, is imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;
}

document.body.appendChild(component());