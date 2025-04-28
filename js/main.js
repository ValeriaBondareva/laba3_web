import { CalculatorController } from "./controller/calculatorController.js";
import { ProgCalcController } from "./controller/progCalcController.js";
import { UserController } from "./controller/userController.js";

window.addEventListener("DOMContentLoaded", () => {
    const path = window.location.pathname;

    if (path.includes("index.html")) {
        new CalculatorController().init();
    } else if (path.includes("progcalc.html")) {
        new ProgCalcController().init();
    } else if (path.includes("register.html")) {
        new UserController("register").init();
    } else if (path.includes("login.html")) {
        new UserController("login").init();
    } else if (path.includes("profile.html")) {
        new UserController("profile").init();
    }
});
