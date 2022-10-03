const DELETE_BTN_CLASS = "deleteBtn";
const TASK_ITEM_SELECTOR = "task-item";
const INVALID_INPUT_CLASS = "invalid-input";
const TASK_STATUS_CLASS = "task-status";

const tasksListEl = document.querySelector("#tasksList");
const taskForm = document.querySelector("#taskForm");
const taskInput = document.querySelector("#task");
const taskEl = document.querySelector("#taskEl");
const taskTemplate = document.querySelector("#taskTemplate").innerHTML;

let tasksList = [
    {id: 1, task: "My task", active: false},
    {id: 2, task: "My next task", active: false},
];

const createTaskHtml = ({task, id, active}) => taskTemplate
    .replace(`{{task}}`, task)
    .replace(`{{id}}`, id)
    .replace(`{{class}}`, active ? TASK_STATUS_CLASS : "")

const renderList = (tasksList) => {
    const htmls = tasksList.map(createTaskHtml);
    tasksListEl.innerHTML = htmls.join(" ");
}

renderList(tasksList);

const resetValidation = () => {
    taskInput.classList.remove(INVALID_INPUT_CLASS);
}

const validInputValue = () => {
    resetValidation();

    if (taskInput.value.trim() === "") {
        taskInput.classList.add(INVALID_INPUT_CLASS);
        return false;
    }

    return true;
}

const getFormValues = () => ({
    task: taskInput.value,
})

const addTask = (task) => {
    task.id = Date.now();
    tasksList.push(task);

    renderList(tasksList);
}

const resetInput = () => {
    taskInput.value = "";
}

const onFormSubmit = (event) => {
    event.preventDefault();

    if (!(validInputValue())) {
        return;
    }

    const newTask = getFormValues();
    addTask(newTask);
    resetInput();
}

const getTaskItem = (element) => {
    return element.closest(`.${TASK_ITEM_SELECTOR}`);
}

const deleteTask = (id) => {
    tasksList = tasksList.filter((item) => item.id !== id);

    renderList(tasksList);
};

const toggleTaskActive = (taskId, taskItem) => {
    const taskListItemIdx = tasksList.findIndex(({id}) => id === taskId);
    const taskListItem = tasksList[taskListItemIdx];

    if (taskListItem.active === true) {
        taskItem.classList.remove(TASK_STATUS_CLASS);
    } else {
        taskItem.classList.add(TASK_STATUS_CLASS);
    }

    tasksList.splice(taskListItemIdx, 1, {...taskListItem, active: !taskListItem.active})
}

const onTaskListClick = (event) => {
    const taskItem = getTaskItem(event.target);

    if (taskItem) {
        const taskId = +taskItem.dataset.taskId;

        if (event.target.classList.contains(DELETE_BTN_CLASS)) {
            deleteTask(taskId);
        } else {
            toggleTaskActive(taskId, taskItem);
        }
    }
}

tasksListEl.addEventListener("click", onTaskListClick)
taskForm.addEventListener("submit", onFormSubmit);
