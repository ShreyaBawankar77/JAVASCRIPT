// Add a new task
function addTask() {

    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();

    // Validation
    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    // Create new list item
    let li = document.createElement("li");

    // Create task text
    let span = document.createElement("span");
    span.textContent = taskText;

    // Create Edit button
    let editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.onclick = function () {
        editTask(span);
    };

    // Create Delete button
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function () {
        deleteTask(li);
    };

    // Add elements to list item
    li.appendChild(span);
    li.appendChild(editButton);
    li.appendChild(deleteButton);

    // DOM traversal and update
    document.getElementById("taskList").appendChild(li);

    // Clear input
    taskInput.value = "";
}


// Edit task
function editTask(span) {

    let newTask = prompt("Edit task:", span.textContent);

    if (newTask !== null && newTask.trim() !== "") {
        span.textContent = newTask.trim();
    }
}


// Delete task
function deleteTask(li) {

    li.parentNode.removeChild(li);
}
