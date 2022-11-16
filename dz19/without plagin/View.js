class View {

    constructor() {
        this.container = $("#container");
    }

    addButtonsListeners() {
        $("#next").click(function () {
            const container = $("#container");

            const prev = container.find(".photo-card.prev");
            container.find(".photo-card.prev").removeClass("prev");

            const current = container.find(".photo-card.current");
            current.removeClass("current");
            current.addClass("prev");

            const next = container.find(".photo-card.next");
            next.removeClass("next");
            next.addClass("current");

            const nextElement = next.next();

            if (!!nextElement.length) {
                nextElement.addClass("next");
            } else {
                container.find(":first-child").addClass("next");
            }
        });

        $("#prev").click(function () {
            const container = $("#container");
            const next = container.find(".photo-card.next");
            container.find(".photo-card.next").removeClass("next");

            const current = container.find(".photo-card.current");
            current.removeClass("current");
            current.addClass("next");

            const prev = container.find(".photo-card.prev");
            prev.removeClass("prev");
            prev.addClass("current");

            const prevElement = prev.prev();

            if (!!prevElement.length) {
                prevElement.addClass("prev");
            } else {
                container.find(":last-child").addClass("prev");
            }

        })
    }

    getImageHtml(item, index, arr) {
        let className = "";

        if (index === 0) {
            className = "current";
        } else if (index === 1) {
            className = "next";
        } else if (index === arr.length - 1) {
            className = "prev"
        }

        return $(`<div class='photo-card ${className}'><img src="${item.url}" alt="photo" class="img" /></div>`);
    }

    renderPhotos(list) {
        const photos = list.map((item, index, arr) => this.getImageHtml(item, index, arr));
        $(this.container).append(...photos);
        this.addButtonsListeners();
    }
}

