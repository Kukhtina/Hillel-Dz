class Model {
    baseUrl = "https://jsonplaceholder.typicode.com/todos/";
    list = [];

    constructor() {
    }

    getTodoList() {
        return fetch(this.baseUrl + "?_limit=20").then((res) => res.json()).then((data) => {
            this.list = data;
            return this.list
        });
    }

    deleteItem(id) {
        return fetch(this.baseUrl + id, {
            method: "DELETE"
        }).then((res) => {
            if (res.status === 200) {
                this.list = this.list.filter((item) => item.id !== id);
                return this.list;
            }
        })
    }

    updateItem(updatedItem) {
        return fetch(this.baseUrl + updatedItem.id, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedItem),
        }).then((res) => {
            if (res.status === 200) {
                this.list = this.list.map((item) => {
                    if (item.id === updatedItem.id) {
                        return updatedItem;
                    }

                    return item;
                })

                return this.list;
            }
        });
    }

    addTodo(newTask) {
        return fetch(this.baseUrl, {
            method: "POST",
            body: newTask,
        }).then((res) => res.json()).then(({ id }) => {
            const todo = {
                id: id,
                title: newTask,
                completed: false,
            };
            this.list.push(todo);

            return this.list;
        })
    }
}
