function todoItemForm() {
    // Set Root Container for App
    const root = document.getElementById('root');
    // Create Div to Contain Form
    let formDiv = document.createElement('div');
    // Form Element
    let form = document.createElement('div');
    // form.setAttribute('action', 'javascript:addTodoItem();');
    form.classList.add('form-box');
    form.id = 'todo';
    // Title Section
    let todoTitleDiv = document.createElement('div');
    let todoTitle = document.createElement('input');
    let todoTitleLabel = document.createElement('label');
    todoTitleLabel.innerText = 'Title';
    todoTitleLabel.setAttribute('for', 'title');
    todoTitle.id = 'title';
    todoTitle.setAttribute('type', 'text');
    todoTitle.setAttribute('name', 'title');
    todoTitleDiv.id = 'title-form';
    todoTitleDiv.appendChild(todoTitleLabel);
    todoTitleDiv.appendChild(todoTitle);
    // Todo Description
    let todoDescriptionDiv = document.createElement('div');
    let todoDescription = document.createElement('input');
    let todoDescriptionLabel = document.createElement('label');
    todoDescriptionLabel.innerText = 'Description';
    todoDescriptionLabel.setAttribute('for', 'description');
    todoDescription.setAttribute('name', 'description');
    todoDescription.setAttribute('type', 'text');
    todoDescription.id = 'description';
    todoDescriptionDiv.id = 'description-form';
    todoDescriptionDiv.appendChild(todoDescriptionLabel);
    todoDescriptionDiv.appendChild(todoDescription);
    // Todo Due Date
    let todoDueDateDiv = document.createElement('div');
    let todoDueDate = document.createElement('input');
    let todoDueDateLabel = document.createElement('label');
    todoDueDateLabel.innerText = 'Due Date';
    todoDueDateLabel.setAttribute('for', 'dueDate');
    todoDueDate.setAttribute('name', 'dueDate');
    todoDueDate.setAttribute('type', 'date');
    todoDueDate.id = 'dueDate';
    todoDueDateDiv.id = 'dueDate-form';
    todoDueDateDiv.appendChild(todoDueDateLabel);
    todoDueDateDiv.appendChild(todoDueDate);
    // Todo Priority
    let todoPriorityDiv = document.createElement('div');
    let todoPriority = document.createElement('select');
    let todoPriorityHigh = document.createElement('option');
    let todoPriorityMed = document.createElement('option');
    let todoPriorityLow = document.createElement('option');
    let todoPriorityLabel = document.createElement('label');
    todoPriorityLabel.innerText = 'Priority';
    todoPriorityHigh.innerText = 'High';
    todoPriorityMed.innerText = 'Medium';
    todoPriorityLow.innerText = 'Low';
    todoPriorityLabel.setAttribute('for', 'priority');
    todoPriority.setAttribute('name', 'priority');
    todoPriorityHigh.setAttribute('value', 'high');
    todoPriorityMed.setAttribute('value', 'medium');
    todoPriorityLow.setAttribute('value', 'low');
    todoPriority.id = 'priority';
    todoPriorityDiv.appendChild(todoPriorityLabel);
    todoPriority.appendChild(todoPriorityHigh);
    todoPriority.appendChild(todoPriorityMed);
    todoPriority.appendChild(todoPriorityLow);
    todoPriorityDiv.appendChild(todoPriority);
    // Submit Button
    let todoButtonDiv = document.createElement('div');
    let todoButton = document.createElement('button');
    todoButton.innerText = 'Submit';
    todoButton.setAttribute('type', 'submit');
    todoButton.id = 'submitBtn';
    todoButtonDiv.appendChild(todoButton);
    // Append All elements of form to FormDiv
    form.appendChild(todoTitleDiv);
    form.appendChild(todoDescriptionDiv);
    form.appendChild(todoDueDateDiv);
    form.appendChild(todoPriorityDiv);
    form.appendChild(todoButtonDiv);
    // Append Form to Root Element
    root.appendChild(form);
}

export { todoItemForm };