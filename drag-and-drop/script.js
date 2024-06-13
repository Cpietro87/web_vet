const tasks = document.querySelectorAll(".task");
const columns = document.querySelectorAll(".column");

tasks.forEach(task => {
    task.addEventListener("dragstart", event => {
        task.classList.add("dragging");
        event.dataTransfer.setData("text/plain", task.id);
    });

    task.addEventListener("dragend", () => {
        task.classList.remove("dragging");
    });
});

columns.forEach(column => {
    column.addEventListener("dragover", event => {
        event.preventDefault();
        const draggingTask = document.querySelector(".task.dragging");
        column.appendChild(draggingTask);
    });

    column.addEventListener("drop", event => {
        event.preventDefault();
        const taskId = event.dataTransfer.getData("text");
        const task = document.getElementById(taskId);
        column.appendChild(task);
    });
});


