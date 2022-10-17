class Accordion {
    constructor(element) {
        this.element = element;
        this.addListeners();
    }

    handleItemClick({target}) {
        const parentNode = target.parentNode;
        const parentNodeActive = parentNode.classList.contains("active");

        if (parentNodeActive) {
            parentNode.classList.remove("active");
        } else {
            parentNode.classList.add("active");
        }
    }

    addListeners() {
        const itemsTitle = this.element.querySelectorAll(".accordion-title");

        itemsTitle.forEach((el) => el.addEventListener("click", this.handleItemClick))
    }
}

const myAccordion = new Accordion(document.querySelector(".container"));
