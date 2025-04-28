import { CalculatorModel } from "../model/calculatorModel.js";
import { CalculatorView } from "../view/calculatorView.js";

export class CalculatorController {
    constructor() {
        this.model = new CalculatorModel();
        this.view = new CalculatorView();
    }

    init() {
        this.view.bindButtonClick(this.handleButtonClick.bind(this));
        this.view.updateDisplay(this.model.getDisplay());
    }

    handleButtonClick(value) {
        if (!isNaN(value)) {
            this.model.append(value);
        } else if (value === "+" || value === "-") {
            this.model.setOperator(value);
        } else if (value === "=") {
            this.model.calculate();
        } else if (value === "C") {
            this.model.clear();
        }

        this.view.updateDisplay(this.model.getDisplay());
    }
}
