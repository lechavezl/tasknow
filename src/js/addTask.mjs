import { getLocalStorage, setLocalStorage } from "./utils.mjs";

let allTasks = [];

export default function addTask() {
    createTask();
    
    const tasks = getLocalStorage("tasks");
    if (tasks) {
        allTasks = tasks; // Actualizar allTasks con los datos existentes del localStorage
        displayTasks(tasks);
        removeTask()
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

        // Create select element
        const select = document.createElement("select");
        select.name = "importance";
        select.id = "selectImportance";

        // Create options
        const options = [
            { value: "normal", text: "Normal" },
            { value: "important", text: "Important" },
            { value: "urgent", text: "Urgent" }
        ];

        // Create the options elements and append the values
        options.forEach(option => {
            const optionElement = document.createElement("option");
            optionElement.value = option.value;
            optionElement.textContent = option.text;
            select.appendChild(optionElement);
        });

        // Create de add task button
        const addButton = document.createElement("div");
        addButton.classList.add("add-task-button");
        addButton.innerHTML = "Add";

        // Add all the elements to the main-background
        taskDiv.appendChild(taskHeader);
        taskDiv.appendChild(container);

        // Add elements to the container (Input and button)
        container.appendChild(input);
        container.appendChild(select)
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
        const importance = document.querySelector("#selectImportance").value;

        // Create an object so it will be easier to save
        // the data in localStorage
        const taskObj = {
            id: generateUniqueId(), // Genera un ID único para cada tarea
            className: "tasks",
            importance: importance,
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
    let lsTasks = data || [];

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
            container.dataset.id = task.id;
    
            // Create the task check
            const checkTask = document.createElement("input");
            checkTask.type = "checkbox";
            checkTask.name = "checkbox";
            checkTask.classList.add("check-box");

            // Set check box status
            checkTask.checked = task.checkbox;
            // checkTask.name = `checkbox-${task.id}`;

            // Create a span to differenciate the importance of the task
            const taskImportance = document.createElement("span");
            taskImportance.classList.add(task.importance);
    
            // Create the p element where will we show the task
            const taskName = document.createElement("p");
            taskName.classList.add("task-name");
            taskName.classList.add("task-checked");
            taskName.innerHTML = task.taskName;
    
            // Create the X to remove the tasks
            const removeBtn = document.createElement("p");
            removeBtn.classList.add("remove-btn");
            removeBtn.innerHTML = "X";

            //Call de function to cross out the task
            checkTask.addEventListener("change", handleCheckboxChange(task, taskName));
    
            // Append the elements into the taks div
            container.appendChild(checkTask);
            container.appendChild(taskImportance);
            container.appendChild(taskName);
            container.appendChild(removeBtn);
            
            // Append the new task in the mainBackground
            mainBackground.appendChild(container);

            // setLocalStorage("tasks", allTasks);
            removeTask();
        });
    }
}


function handleCheckboxChange(task, taskNameElement) {
    return function () {
      const isChecked = this.checked;
      task.checkbox = isChecked;
  
      if (isChecked) {
        taskNameElement.classList.add("line-through");
        task.lineThrough = true;
        

      } else {
        taskNameElement.classList.remove("line-through");
        task.lineThrough = false;
      }

      setLocalStorage("tasks", allTasks);
    };
}

function generateUniqueId() {
    const timestamp = Date.now().toString(36); // Convertir la marca de tiempo a base 36
    const randomStr = Math.random().toString(36).substr(2, 5); // Generar una cadena aleatoria de longitud 5
    const uniqueId = `${timestamp}-${randomStr}`; // Combinar la marca de tiempo y la cadena aleatoria
    return uniqueId;
}

function removeTask() {
    const removeButtons = document.querySelectorAll(".remove-btn");
  
    removeButtons.forEach((button) => {
      button.addEventListener("click", function() {
        const taskId = button.parentNode.dataset.id; // Obtener el ID único de la tarea
        const taskIndex = allTasks.findIndex((task) => task.id === taskId); // Encontrar el índice de la tarea en allTasks
  
        if (taskIndex !== -1) {
          allTasks.splice(taskIndex, 1); // Eliminar la tarea del arreglo allTasks
          setLocalStorage("tasks", allTasks); // Actualizar el localStorage con el arreglo actualizado
  
          const tasks = getLocalStorage("tasks");

          document.querySelector(".main-background").innerHTML = ""
          displayTasks(tasks);
        }
      });
    });
}