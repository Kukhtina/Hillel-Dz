class Controller {
    constructor() {
        this.model = new Model();
        this.view = new View({
            addSticker: () => this.addSticker(),
            deleteSticker: (id) => this.deleteSticker(id),
            changeSticker: (item, description) => this.changeStickerDescription(item, description),
        });
    }

    init() {
        this.model.getStickers().then((list) => this.view.renderStickers(list));
    }

    addSticker() {
        this.model.addSticker().then((list) => this.view.renderStickers(list));
    }

    deleteSticker(id) {
        this.model.deleteSticker(id).then((list) => this.view.renderStickers(list));
    }

    changeStickerDescription(item, description) {
        const updatedItem = {...item, description};
        this.model.updateSticker(updatedItem).then((list) => this.view.renderStickers(list));
    }
}
