export class CalculatorModel {
    constructor() {
        this.current = "";
        this.operator = null;
        this.operand = null;
    }

    append(value) {
        this.current += value;
    }

    setOperator(operator) {
        if (this.current === "") return;
        this.operand = parseFloat(this.current);
        this.operator = operator;
        this.current = "";
    }

    clear() {
        this.current = "";
        this.operator = null;
        this.operand = null;
    }

    calculate() {
        if (this.operator === null || this.operand === null || this.current === "") return;

        const secondOperand = parseFloat(this.current);
        let result = 0;
        switch (this.operator) {
            case "+":
                result = this.operand + secondOperand;
                break;
            case "-":
                result = this.operand - secondOperand;
                break;
            default:
                return;
        }
        this.current = result.toString();
        this.operator = null;
        this.operand = null;
    }

    getDisplay() {
        return this.current || "0";
    }
}