class View {

    constructor() {
        this.container = $("#cards-container");
    }
    getImageHtml(item) {
        return $(`<div class="slide">
                    <div class='photo-card'>
                        <img src="${item.url}" alt="photo" class="img" />
                    </div>
                  </div>`);
    }

    applySlickSlider() {
        this.container.slick({
            centerMode: true,
            centerPadding: '60px',
            slidesToShow: 3,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 1
                    }
                }
            ]
        });
    }

    renderPhotos(list) {
        const photos = list.map((item) => this.getImageHtml(item));
        $(this.container).append(...photos);
        this.applySlickSlider();
    }
}

