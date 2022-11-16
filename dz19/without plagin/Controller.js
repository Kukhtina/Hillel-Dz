class Controller {

    constructor() {
        this.model = new Model();
        this.view = new View();

    }

    init() {
        this.model.getPhoto().then((list) => this.view.renderPhotos(list) );
    }


}
