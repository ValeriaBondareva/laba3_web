import { ProgCalcModel } from "../model/progCalcModel.js";
import { CalculatorView } from "../view/calculatorView.js";

export class ProgCalcController {
    constructor() {
        this.model = new ProgCalcModel();
        this.view = new CalculatorView();
    }

    init() {
        this.view.bindButtonClick(this.handleClick.bind(this));
        this.view.updateDisplay(this.model.getDisplay());
    }

    handleClick(value) {
        const isHex = /^[0-9A-Fa-f]$/.test(value);

        if (isHex) {
            this.model.append(value);
        } else if (value === "AND" || value === "OR") {
            this.model.setOperator(value);
        } else if (value === "=") {
            this.model.calculate();
        } else if (value === "CLR") {
            this.model.clear();
        }        

        this.view.updateDisplay(this.model.getDisplay());
    }
}
