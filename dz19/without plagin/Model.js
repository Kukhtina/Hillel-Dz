class Model {
    baseUrl = "https://jsonplaceholder.typicode.com/photos?_limit=10";
    list = [];

    constructor() {
    }

    getPhoto() {
        return fetch(this.baseUrl).then((res) => res.json().then((data) => {
            this.list = data;
            return this.list;
        }))
    }
}
