const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

function addTask() {
    const newTask = document.createElement("li");
    const taskText = document.createTextNode(taskInput.value);
    newTask.appendChild(taskText);
    
    const deleteButton = document.createElement("button");
    const deleteText = document.createTextNode("X");
    deleteButton.appendChild(deleteText);
    deleteButton.addEventListener("click", function() {
    taskList.removeChild(newTask);
    });
    
    newTask.appendChild(deleteButton);

    taskList.appendChild(newTask);

    taskInput.value = "";
}

addButton.addEventListener("click", addTask);

taskInput.addEventListener("keypress", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    addButton.click();
  }
});
