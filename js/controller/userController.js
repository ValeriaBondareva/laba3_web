import { UserModel } from "../model/userModel.js";
import { UserView } from "../view/userView.js";

export class UserController {
    constructor(page) {
        this.page = page;
        this.model = new UserModel();
        this.view = new UserView();
    }

    init() {
        switch (this.page) {
            case "register":
                this.handleRegister();
                break;
            case "login":
                this.handleLogin();
                break;
            case "profile":
                this.handleProfile();
                break;
        }
    }

    handleRegister() {
        const form = document.querySelector("form");
        this.view.bindFormSubmit(form, ({ name, email, password }) => {
            const success = this.model.addUser({ name, email, password });
            if (!success) {
                this.view.showError("Користувач з таким email вже існує.");
            } else {
                this.view.redirect("profile.html");
            }
        });
    }

    handleLogin() {
        const form = document.querySelector("form");
        this.view.bindFormSubmit(form, ({ email, password }) => {
            const user = this.model.validateUser(email, password);
            if (!user) {
                this.view.showError("Неправильний email або пароль.");
            } else {
                this.model.setLoggedInUser(user);
                this.view.redirect("profile.html");
            }
        });
    }

    handleProfile() {
        const user = this.model.getLoggedInUser();
        if (!user) {
            this.view.redirect("login.html");
            return;
        }
        this.view.renderProfile(user);
        const logoutBtn = document.querySelector(".btn-danger");
        this.view.bindLogoutButton(logoutBtn, () => {
            this.model.logout();
            this.view.redirect("login.html");
        });
    }
}
