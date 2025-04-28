export class ProgCalcModel {
    constructor() {
        this.current = "";
        this.operator = null;
        this.operand = null;
    }

    append(value) {
        this.current += value.toUpperCase();
    }

    setOperator(op) {
        if (this.current === "") return;
        this.operand = parseInt(this.current, 16);
        this.operator = op;
        this.current = "";
    }

    clear() {
        this.current = "";
        this.operator = null;
        this.operand = null;
    }

    calculate() {
        if (!this.operator || this.current === "" || this.operand === null) return;
        const second = parseInt(this.current, 16);
        let result = 0;

        switch (this.operator) {
            case "AND":
                result = this.operand & second;
                break;
            case "OR":
                result = this.operand | second;
                break;
            case "+":
                result = this.operand + second;
                break;
            case "-":
                result = this.operand - second;
                break;
            default:
                return;
        }

        this.current = result.toString(16).toUpperCase();
        this.operator = null;
        this.operand = null;
    }

    getDisplay() {
        return this.current || "0";
    }
} 