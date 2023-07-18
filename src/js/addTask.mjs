import { getLocalStorage, setLocalStorage } from "./utils.mjs";

let allTasks = [];

export default function addTask() {
    createTask();
    
    const tasks = getLocalStorage("tasks");
    if (tasks) {
        allTasks = tasks; // Actualizar allTasks con los datos existentes del localStorage
        displayTasks(tasks);
    }
}


function createTask() {

    const addTaskButton = document.querySelector("#taskButton");
    addTaskButton.addEventListener("click", function() {
        const mainBackground = document.querySelector(".main-background");

        //Create the task div
        const taskDiv = document.createElement("div");
        taskDiv.classList.add("add-task");

        //Header
        const taskHeader = document.createElement("h3");
        taskHeader.innerHTML = `TaskNow 📌`;

        //Create the container inside of the div
        const container = document.createElement("div");
        container.classList.add("add-task-container");

        //Create the input field
        const input = document.createElement("input");

        // Set the attributes
        input.type = "text";
        input.name = "task";
        input.id = "userTask";
        input.placeholder = "Add your task here...";

        // Create de add task button
        const addButton = document.createElement("div");
        addButton.classList.add("add-task-button");
        addButton.innerHTML = "Add";

        // Add all the elements to the main-background
        taskDiv.appendChild(taskHeader);
        taskDiv.appendChild(container);

        // Add elements to the container (Input and button)
        container.appendChild(input);
        container.appendChild(addButton);

        // Append the element to the main-background
        mainBackground.appendChild(taskDiv);
        
        addTaskBtn();
    });
}

function addTaskBtn() {

    // Take the mainBackground
    const mainBackground = document.querySelector(".main-background");
    // Take the button element to set the addEventListener
    const addTaskBtn = document.querySelector(".add-task-button");
    addTaskBtn.addEventListener("click", function() {

        // Take the text the user types to name the new tasks 
        const taskText = document.querySelector("#userTask").value;

        // Create an object so it will be easier to save
        // the data in localStorage

        const taskObj = {
            className: "tasks",
            checkbox: false,
            taskName: taskText
        };

        // Save the object in the allTasks Array
        // at the top of the file.
        allTasks.push(taskObj);

        // Save the data to localStorage
        setLocalStorage("tasks", allTasks);

        // Hide the add task button (function);
        const addTaskContainer = document.querySelector(".add-task");
        mainBackground.removeChild(addTaskContainer);

        const tasks = getLocalStorage("tasks");
        displayTasks(tasks);
    });
}

function displayTasks(data) {

    // take the data and assign it to a new variable
    // The data is the localStorage in the tasks variable
    // at the addTask function.
    let lsTasks = data

    // Check if there is data in the variable
    if (lsTasks && lsTasks.length > 0) {

        // Take the mainBackground
        const mainBackground = document.querySelector(".main-background");
        
        // Clear the DOM each time we call displayTask function
        mainBackground.innerHTML = "";

        // Apply the following to each task
        lsTasks.forEach(task => {
    
            // Create task container
            const container = document.createElement("div");
            container.classList.add(task.className);
    
            // Create the task check
            const checkTask = document.createElement("input");
            checkTask.type = "checkbox";
            checkTask.name = "checkbox";
            checkTask.classList.add("check-box");

            // Set check box status
            checkTask.checked = task.checkbox;

            // Handle checkbox change event
            checkTask.addEventListener("change", function() {
                
                const isChecked = this.checked;
                task.checkbox = isChecked;
                checkTask.classList.add("cheked");
                
                // Save the checkbox new status in the localStorage
                setLocalStorage("tasks", allTasks);
            });
    
            // Create the p element where will we show the task
            const taskName = document.createElement("p");
            taskName.classList.add("task-name");
            taskName.classList.add("task-checked");
            taskName.innerHTML = task.taskName;
    
            // Create the X to remove the tasks
            const removeBtn = document.createElement("p");
            removeBtn.classList.add("remove-btn")
            removeBtn.innerHTML = "X";
    
            // Append the elements into the taks div
            container.appendChild(checkTask);
            container.appendChild(taskName);
            container.appendChild(removeBtn);
            
            // Append the new task in the mainBackground
            mainBackground.appendChild(container);
        });
    } 
}