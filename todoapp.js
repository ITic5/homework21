const loggedIn = localStorage.getItem("loggedIn");
let tasksList = document.getElementById("tasks-list");
let taskCounter = 1;

let removeTaskBox = document.getElementById("remove-task");

if (loggedIn !== "true") {
    window.location.href = "index.html";
}

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

document.getElementById("create-task-btn").addEventListener("click", () => {

    const task = document.getElementById("task-name").value;

    if (task === "") {
        alert("Please enter a task!");
        return;
    }

    let singleTask = document.createElement("li");
    singleTask.innerText = task;
    singleTask.value = taskCounter;
    tasksList.append(singleTask);

    tasks.push({
        id: singleTask.value,
        name: singleTask.innerText
    })

    const jsonTask = JSON.stringify(tasks);
    localStorage.setItem("tasks", jsonTask);

    taskCounter++;
    document.getElementById("task-name").value = "";

    if (taskCounter > 1) {
        removeTaskBox.classList.remove('hidden');
    }

});



document.getElementById("remove-task-btn").addEventListener("click", () => {
    let taskNumber = document.getElementById("task-number").value;
    let singleTask = document.querySelectorAll("li");

    let removed = false;

    for (let task of singleTask) {
        if (task.value == taskNumber) {
            task.remove();
            removed = true;
            break;
        }
    }

    if (removed) {
        let updatedTasks = document.querySelectorAll("li");
        taskCounter = 1; // Reset counter

        for (let task of updatedTasks) {
            task.value = taskCounter;
            taskCounter++;
        }
    }

    document.getElementById("task-number").value = "";
})

