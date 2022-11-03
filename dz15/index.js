const DELETE_BTN_CLASS = "deleteBtn";
const TASK_ITEM_SELECTOR = "task-item";
const INVALID_INPUT_CLASS = "invalid-input";
const TASK_STATUS_CLASS = "task-status";

const tasksListEl = document.querySelector("#tasksList");
const taskForm = document.querySelector("#taskForm");
const taskInput = document.querySelector("#task");
const taskTemplate = document.querySelector("#taskTemplate").innerHTML;

let tasksList = [];

const createTaskHtml = ({title, id, completed}) => taskTemplate
    .replace(`{{title}}`, title)
    .replace(`{{id}}`, id)
    .replace(`{{class}}`, completed ? TASK_STATUS_CLASS : "")

const renderList = () => {
    const htmls = tasksList.map((task) => createTaskHtml(task));

    tasksListEl.innerHTML = htmls.join(" ");
}

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

const addTask = (title) => {
    title.id = Date.now();
    tasksList.push(title);

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

const toggleTaskCompleted = (taskId, taskItem) => {
    const taskListItemIdx = tasksList.findIndex(({id}) => id === taskId);
    const taskListItem = tasksList[taskListItemIdx];

    if (taskListItem.completed === true) {
        taskItem.classList.remove(TASK_STATUS_CLASS);
    } else {
        taskItem.classList.add(TASK_STATUS_CLASS);
    }

    tasksList.splice(taskListItemIdx, 1, {...taskListItem, completed: !taskListItem.completed})
}

const onTaskListClick = (event) => {
    const taskItem = getTaskItem(event.target);

    if (taskItem) {
        const taskId = +taskItem.dataset.taskId;

        if (event.target.classList.contains(DELETE_BTN_CLASS)) {
            deleteTask(taskId);
        } else {
            toggleTaskCompleted(taskId, taskItem);
        }
    }
}

tasksListEl.addEventListener("click", onTaskListClick)
taskForm.addEventListener("submit", onFormSubmit);

const getTasks = () => {
    fetch("https://jsonplaceholder.typicode.com/todos")
        .then((resp) => resp.json().then((data) => {
            tasksList = data;
            renderList();
        }));
}

getTasks();
