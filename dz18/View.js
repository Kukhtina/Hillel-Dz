class View {
    static stickerContainerContentHtml = `
            <div class="sticker-container-content">
                <div class="sticker-header">
                    <button type="button" class="sticker-delete-btn">X</button>
                </div>
                <textarea name="sticker-body" rows="10" cols="30"></textarea>
            </div>`

    constructor(handlers) {
        this.stickersBox = document.querySelector(".stickers-box");
        this.addListenerToAddButton();
        this.handlers = handlers;

    }

    addListenerToAddButton() {
        const addButton = document.querySelector(".header .add-sticker-btn");
        addButton.addEventListener("click", () => this.handlers.addSticker());
    }


    getStickerBoxHtml(item) {
        const stickerContainer = document.createElement("div");
        stickerContainer.classList.add("sticker-container");
        stickerContainer.innerHTML = View.stickerContainerContentHtml;


        const textarea = stickerContainer.querySelector("textarea[name='sticker-body']");
        textarea.value = item.description;
        textarea.addEventListener("change", (e) => this.handlers.changeSticker(item, e.target.value));

        const stickerDeleteBtn = stickerContainer.querySelector(".sticker-delete-btn");
        stickerDeleteBtn.addEventListener("click", () => this.handlers.deleteSticker(item.id));

        return stickerContainer;
    }

    renderStickers(list) {
        const boxesHtml = list.map((item) => this.getStickerBoxHtml(item));

        this.stickersBox.replaceChildren(...boxesHtml);
    }
}
