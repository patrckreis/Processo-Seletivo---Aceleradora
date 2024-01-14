function addTask(taskListId, addTaskId) {
  var taskList = document.getElementById(taskListId);
  var addTaskInput = document
    .getElementById(addTaskId)
    .querySelector('input[type="text"]');

  if (addTaskInput.value.trim() !== "") {
    var newTask = document.createElement("li");
    newTask.className = "taskListItem";
    newTask.innerHTML = `
          <input id="checkBox" type="checkbox">
          <label for="checkbox-18">${addTaskInput.value}</label>
          <button class="btnRemove" onclick="removeTask(this)">x</button>
        `;
    taskList.appendChild(newTask);
    addTaskInput.value = "";
  }
}

function removeTask(button) {
  var listItem = button.parentNode;
  var taskList = listItem.parentNode;
  taskList.removeChild(listItem);
}
