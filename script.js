const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");
const emptyState = document.getElementById("emptyState");
const message = document.getElementById("message");

function updateTaskCount() {
    const totalTasks = taskList.children.length;

    taskCount.textContent =
        totalTasks === 1 ? "1 task" : `${totalTasks} tasks`;

    emptyState.style.display =
        totalTasks === 0 ? "block" : "none";
}

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        message.textContent = "Please enter a task first.";
        taskInput.focus();
        return;
    }

    message.textContent = "";

    const taskItem = document.createElement("li");
    taskItem.className = "task-item";

    const completeButton = document.createElement("button");
    completeButton.className = "complete-btn";
    completeButton.textContent = "✓";

    const taskTextElement = document.createElement("span");
    taskTextElement.className = "task-text";
    taskTextElement.textContent = taskText;

    const deleteButton = document.createElement("button");
    deleteButton.className = "delete-btn";
    deleteButton.textContent = "Delete";

    completeButton.addEventListener("click", function () {
        taskItem.classList.toggle("completed");
    });

    taskTextElement.addEventListener("click", function () {
        taskItem.classList.toggle("completed");
    });

    deleteButton.addEventListener("click", function () {
        taskItem.remove();
        updateTaskCount();
    });

    taskItem.appendChild(completeButton);
    taskItem.appendChild(taskTextElement);
    taskItem.appendChild(deleteButton);

    taskList.appendChild(taskItem);

    taskInput.value = "";
    taskInput.focus();

    updateTaskCount();
}

addTaskBtn.addEventListener("click", addTask);

taskInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});

updateTaskCount();