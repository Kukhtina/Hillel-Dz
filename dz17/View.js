class View {
    static todoContainerContentHtml = `
        <div class="todo-content"></div>
        <button type="button" class="todo-btn-delete">Delete</button>`

    static todoAddFormHtml = `
        <input type="text" class="todo-input" />
        <button type="submit" class="todo-btn-add">Add</button>`

    constructor(handlers) {
        this.listContainer = document.querySelector("#container");
        this.handlers = handlers;
    }

    getHtmlItem(item) {
        const itemContainer = document.createElement("div");
        itemContainer.classList.add("todo-content-container");
        itemContainer.innerHTML = View.todoContainerContentHtml;
        itemContainer.addEventListener("click", () => this.handlers.toggle(item));

        const deleteBtn = itemContainer.querySelector(".todo-btn-delete");
        deleteBtn.addEventListener("click", () => this.handlers.deleteItem(item.id));

        if (!!item.completed) {
            itemContainer.classList.add("todo-is-done");
        }

        const itemContent = itemContainer.querySelector(".todo-content");
        itemContent.append(item.title);

        return itemContainer;
    }

    renderList(data) {
        const items = data.map((item) => this.getHtmlItem(item));

        this.listContainer.replaceChildren(...items);

        const todoInputContainer = document.createElement("div");
        todoInputContainer.classList.add("todo-input-container");
        todoInputContainer.innerHTML = View.todoAddFormHtml;


        const todoAdd = todoInputContainer.querySelector(".todo-btn-add");
        todoAdd.addEventListener("click", () => {
            const newTask = todoInputContainer.querySelector(".todo-input").value;
            this.handlers.addTodo(newTask);
        });
        this.listContainer.append(todoInputContainer);
    }
}

