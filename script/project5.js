// ! Variable for ToDo List
const btnAdd = document.querySelector("#add-task");
const inputAddValue = document.querySelector("#input-task");
const taskContainer = document.querySelector("#task-container");

// todo : createElement
function createElement(text) {
    let item = document.createElement("div");
    item.setAttribute("class", "task-item");
    let tempt = `
    
        <p class="task-item__job">${text}</p>
        <div class="task-item__control">
            <button
                type="button"
                id="btn-checked"
                class="btn-control"
                onclick="taskComplete(this)"
            >
                <i class="fa-solid fa-check"></i>
            </button>
            <button
                type="button"
                id="btn-remove"
                class="btn-control"
                onclick= "removeTask(this)"
            >
                <i class="fa-solid fa-trash-can"></i>
            </button>
        </div>
    
    
    `;
    item.innerHTML = tempt;
    taskContainer.appendChild(item);
}

// todo : taskComplete
function taskComplete(selected) {
    let taskItem = selected.parentElement.parentElement;
    taskItem.classList.toggle("complete");
}

//todo : removeTask
function removeTask(selected) {
    let taskItem = selected.parentElement.parentElement;
    taskItem.remove();
}

btnAdd.addEventListener("click", function (e) {
    if (inputAddValue.value !== "") {
        createElement(inputAddValue.value);
        inputAddValue.value = "";
    }
});
