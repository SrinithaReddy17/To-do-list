function addTask() {
    let input = document.getElementById("taskInput");
    let task = input.value;

    if (task === "") return;

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(task);

    localStorage.setItem("tasks", JSON.stringify(tasks));

    displayTasks();
    input.value = "";
}

function displayTasks() {
    let taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.forEach((task, index) => {
        let li = document.createElement("li");
        let span = document.createElement("span");
span.textContent = task;

span.onclick = function () {
    span.style.textDecoration = "line-through";
    span.style.color = "gray";
};

li.appendChild(span);

        let btn = document.createElement("button");
        btn.textContent = "Delete";
        btn.onclick = function () {
            deleteTask(index);
        };

        li.appendChild(btn);
        taskList.appendChild(li);
    });
}

function deleteTask(index) {
    let tasks = JSON.parse(localStorage.getItem("tasks"));
    tasks.splice(index, 1);

    localStorage.setItem("tasks", JSON.stringify(tasks));
    displayTasks();
}

window.onload = displayTasks;