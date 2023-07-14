

export default function addTask() {
    createTask()
}


function createTask() {
    const addTaskButton = document.querySelector("#taskButon");

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

        //Create de add task button
        const addButton = document.createElement("div");
        addButton.classList.add("add-task-button");
        addButton.innerHTML = "Add";

        //Add all the elements to the main-background
        taskDiv.appendChild(taskHeader);
        taskDiv.appendChild(container);

        //Add elements to the container (Input and button)
        container.appendChild(input);
        container.appendChild(addButton);

        //Append the element to the main-background
        mainBackground.appendChild(taskDiv);

        const addTask = document.querySelector(".add-task-button");

        addTask.addEventListener("click", function() {
            const taskText = document.querySelector("#userTask").value;
            console.log(taskText);

            //Create task container
            const container = document.createElement("div");
            container.classList.add("tasks");

            //Create the task check
            const checkTask = document.crea
        });
    });
}

function taskTemplate(task) {
    return `<div class="tasks">
                <input type="checkbox" name="" id="" class="check-box">
                <p class="task-name task-checked">${task}</p>
            </div>`
}