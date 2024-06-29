// Data Structures to store tasks
var highPriorityTasks = [];
var lowPriorityTasks = [];
var today = new Date();

// Adding new task
document.getElementById("addButton").addEventListener("click", () => {
    var taskInput = document.getElementById("taskInput");
    var deadlineInput = document.getElementById("deadlineInput");

    var newTask = {
        description: taskInput.value,
        deadline: deadlineInput.value,
        done: false,
    };

    var taskDeadline = new Date(deadlineInput.value);

    if(taskDeadline.getTime() <= today.getTime()) {
        highPriorityTasks.push(newTask);
    }

    else {
        lowPriorityTasks.push(newTask);
    }

    displayTasks();

    taskInput.value = '';
    deadlineInput.value = '';
});

