export class UserModel {
    constructor() {
        try {
            const data = JSON.parse(localStorage.getItem("users"));
            this.users = Array.isArray(data) ? data : [];
        } catch {
            this.users = [];
        }
    }

    addUser(user) {
        if (this.users.some(u => u.email === user.email)) {
            return false;
        }
        this.users.push(user);
        this.saveUsers();
        this.setLoggedInUser(user);
        return true;
    }

    validateUser(email, password) {
        return this.users.find(u => u.email === email && u.password === password);
    }

    saveUsers() {
        localStorage.setItem("users", JSON.stringify(this.users));
    }

    setLoggedInUser(user) {
        localStorage.setItem("loggedInUser", JSON.stringify({ name: user.name, email: user.email }));
    }

    getLoggedInUser() {
        return JSON.parse(localStorage.getItem("loggedInUser"));
    }

    logout() {
        localStorage.removeItem("loggedInUser");
    }
}
