const tasksListEl = document.querySelector("#tasksList");
const inputEnterTask = document.querySelector("#task");
const addTaskBtn = document.querySelector("#addTasks");

const buttonClick = () => {
    if (!(validInputValue())) {
        return;
    }
    const newTask = getTasks();
    addTask(newTask);
    resetInput();
}

const validInputValue = () => {
    resetValidation();

    if (inputEnterTask.value.trim() === "") {
        inputEnterTask.classList.add("invalid-input");
        return false;
    }
    return true;
}

const resetValidation = () => {
    inputEnterTask.classList.remove("invalid-input");
}

const getTasks = () => {
    const el = inputEnterTask.value;
    return el;
}

const addTask = (task) => {
    const taskEl = createTaskEl(task);
    tasksListEl.append(taskEl);
}

const createTaskEl = (task) => {
    const strEl = document.createElement("tr");
    const taskTd = document.createElement("td");
    taskTd.textContent = getTasks(task);
    strEl.append(taskTd);
    strEl.addEventListener("click", () => {
        strEl.classList.toggle("task-status");
    })
    return strEl;
}

const resetInput = () => {
    inputEnterTask.value = "";
}

addTaskBtn.addEventListener("click", buttonClick);



