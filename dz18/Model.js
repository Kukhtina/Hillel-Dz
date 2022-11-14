class Model {
    baseUrl = "https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/stickers/";
    list = [];

    constructor() {
    }

    getStickers() {
        return fetch(this.baseUrl).then((res) => res.json()).then((data) => {
            this.list = data;
            return this.list;
        })
    }

    addSticker() {
        return fetch(this.baseUrl, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({description: ""})
        }).then((res) => res.json()).then((data) => {
            this.list.push(data);

            return this.list;
        })

    }

    deleteSticker(id) {
        return fetch(this.baseUrl + id, {
            method: "DELETE",
        }).then((res) => {
            this.list = this.list.filter((item) => item.id !== id);

            return this.list;
        })
    }

    updateSticker(updatedItem) {
        return fetch(this.baseUrl + updatedItem.id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedItem),
        }).then((res) => res.json().then((updatedItem) => {
            this.list = this.list.map((item) => {
                if (updatedItem.id === item.id) {
                    return updatedItem;
                }
                return item;
            });

            return this.list;
        }))

    }
}
