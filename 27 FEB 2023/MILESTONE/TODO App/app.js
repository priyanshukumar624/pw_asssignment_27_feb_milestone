const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

let todos = [];

function renderTodos() {
  todoList.innerHTML = '';
  todos.forEach((todo, index) => {
    const todoItem = document.createElement('li');
    todoItem.classList.add('todo-item');
    todoItem.innerHTML = `
      <span>${todo}</span>
      <button class="delete-btn" data-index="${index}">Delete</button>
    `;
    todoList.appendChild(todoItem);
  });
}

function addTodo() {
  const todoText = todoInput.value.trim();
  if (todoText !== '') {
    todos.push(todoText);
    renderTodos();
    todoInput.value = '';
  }
}

function deleteTodo() {
  const index = parseInt(this.dataset.index);
  todos.splice(index, 1);
  renderTodos();
}

addBtn.addEventListener('click', addTodo);

todoList.addEventListener('click', (event) => {
  if (event.target.classList.contains('delete-btn')) {
    deleteTodo.call(event.target);
  }
});
