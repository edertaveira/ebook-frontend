const taskInput = document.getElementById("task-input");
const addTaskButton = document.getElementById("add-task");
const taskList = document.getElementById("task-list");

addTaskButton.addEventListener("click", addTask);

function addTask(event) {
  event.preventDefault();

  const taskText = taskInput.value;
  if (!taskText) return;

  const task = createTask(taskText);
  taskList.appendChild(task);

  taskInput.value = "";
}

function createTask(taskText) {
  const task = document.createElement("li");
  task.innerHTML = `
    ${taskText}
    <button class="complete-task">Completar</button>
  `;

  task.querySelector(".complete-task").addEventListener("click", markAsCompleted);

  return task;
}

function markAsCompleted() {
  this.parentElement.classList.toggle("completed");
}
