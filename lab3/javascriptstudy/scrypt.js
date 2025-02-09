function addTask() {
    let newItemInput = document.getElementById("newTask");
    let taskText = newItemInput.value.trim();

    if (taskText !== "") {
        let taskList = document.getElementById("tasks");

        let li = document.createElement("li");
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.addEventListener("change", function () {
            updateTaskStatus(li, checkbox.checked);
        });

        let taskTextSpan = document.createElement("span");
        taskTextSpan.textContent = taskText;

        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add("delete-btn");
        deleteBtn.addEventListener("click", function () {
            deleteTask(li);
        });

        li.appendChild(checkbox);
        li.appendChild(taskTextSpan);
        li.appendChild(deleteBtn);

        taskList.appendChild(li);
        newItemInput.value = "";
    }
}

function updateTaskStatus(taskItem, isChecked) {
    console.log(taskItem.children)
    if (isChecked) {
        taskItem.children[1].style.textDecoration = "line-through";
    } else {
        taskItem.style.textDecoration = "none";
    }
}

function deleteTask(taskItem) {
    let taskList = document.getElementById("tasks");
    taskList.removeChild(taskItem);
}

function deleteAll(){
    let arr = document.querySelectorAll('li')
    arr.forEach(element => {
        element.remove()
    });
}