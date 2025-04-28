export class UserView {
    getFormValues(form) {
        const name = form.querySelector("input[type='text']")?.value || "";
        const email = form.querySelector("input[type='email']")?.value;
        const password = form.querySelector("input[type='password'], input[type='date']")?.value;
        return { name, email, password };
    }

    bindFormSubmit(form, handler) {
        form.addEventListener("submit", e => {
            e.preventDefault();
            handler(this.getFormValues(form));
        });
    }

    showError(message) {
        alert(message);
    }

    redirect(to) {
        window.location.href = to;
    }

    renderProfile(user) {
        document.querySelector(".card-text:nth-of-type(1)").textContent = `Ім'я: ${user.name}`;
        document.querySelector(".card-text:nth-of-type(2)").textContent = `Email: ${user.email}`;
    }

    bindLogoutButton(button, handler) {
        button.addEventListener("click", handler);
    }
}
