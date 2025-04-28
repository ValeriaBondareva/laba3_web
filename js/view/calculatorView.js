export class CalculatorView {
    constructor() {
        this.displayElement = document.querySelector(".calculator input");
        this.buttons = document.querySelectorAll(".calculator button");
    }

    bindButtonClick(handler) {
        this.buttons.forEach(button => {
            button.addEventListener("click", () => {
                handler(button.textContent);
            });
        });
    }

    updateDisplay(value) {
        this.displayElement.value = value;
    }
}
