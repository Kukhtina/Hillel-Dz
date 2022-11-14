class Controller {
    constructor() {
        this.model = new Model();
        this.view = new View({
            deleteItem: (id) => this.deleteItem(id),
            toggle: (item) => this.toggle(item),
            addTodo: (newTask) => this.addTodo(newTask),
        });
    }

    init() {
        this.model.getTodoList().then((list) => this.view.renderList(list));
    }

    deleteItem(id) {
        this.model.deleteItem(id).then((list) => this.view.renderList(list));
    }

    toggle(item) {
        const updatedItem = {...item, completed: !item.completed};

        this.model.updateItem(updatedItem).then((list) => this.view.renderList(list));
    }

    addTodo(newTask) {
        this.model.addTodo(newTask).then((list) => this.view.renderList(list));
    }
}

