const loadBtn = document.getElementById('loadBtn');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');
const message = document.getElementById('message');

let todos = [];

function renderTodos() {
    todoList.innerHTML = '';
    todos.forEach((todo, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
      <span>${todo.task} <br><small>${todo.date}</small></span>
      <div class="task-actions">
        <button onclick="editTodo(${index})">Edit</button>
        <button onclick="deleteTodo(${index})">Delete</button>
      </div>
    `;
        todoList.appendChild(li);
    });
}

function loadTodos() {
    // Simulate fetch
    todos = [
        { task: 'Alan Walker event', date: '2025-11-17' },
        { task: 'Watch Stranger Things Season 5', date: '2025-11-26' },
        { task: 'Play rank (done)', date: '2025-10-10' }
    ];
    renderTodos();
}

function addTodo() {
    const taskInput = document.getElementById('task');
    const dateInput = document.getElementById('dueDate');
    const task = taskInput.value.trim();
    const date = dateInput.value;

    if (task && date) {
        todos.push({ task, date });
        renderTodos();
        taskInput.value = '';
        dateInput.value = '';
        showMessage();
    }
}

function editTodo(index) {
    const todo = todos[index];
    document.getElementById('task').value = todo.task;
    document.getElementById('dueDate').value = todo.date;
    deleteTodo(index);
}

function deleteTodo(index) {
    todos.splice(index, 1);
    renderTodos();
}

function showMessage() {
    message.classList.remove('hidden');
    setTimeout(() => {
        message.classList.add('hidden');
    }, 1500);
}

loadBtn.addEventListener('click', loadTodos);
addBtn.addEventListener('click', addTodo);
