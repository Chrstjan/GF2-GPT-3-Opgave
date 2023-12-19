const formContainer = document.body;
const signUpBtn = document.getElementById("signUp");

let isFormOpen = false;

const createSignUpForm = () => {
    if (isFormOpen) {
        return;
    }

    isFormOpen = true;
    
    const closeForm = () => {
        signUpForm.remove();
    }

    const signUpForm = document.createElement("form");
    const signUpFieldset = document.createElement("fieldset");

    const closeFormBtn = document.createElement("span");
    closeFormBtn.classList.add("x-btn");
    closeFormBtn.textContent = "<a>&times;</a>";
    closeFormBtn.addEventListener("click", closeForm);

    //Helper functions
    const createFormLabel = (text, forInput) => {
        const label = document.createElement("label");
        label.textContent = text;
        label.setAttribute("for", forInput);

        return label;
    };

    const createFormInput = (type, placeholder, className) => {
        const input = document.createElement("input");

        input.setAttribute("type", type);
        input.setAttribute("placeholder", placeholder);
        input.classList.add(className);

        return input;
    };

    const createFormInputBtn = (type, value) => {
        const formBtn = document.createElement("input");
        formBtn.setAttribute("type", type);
        formBtn.setAttribute("value", value);

        return formBtn; 
    };

    const fNameLabel = createFormLabel("First name", "fName");
    const fName = createFormInput("text", "John", "fName");

    const lNameLabel = createFormLabel("Last name", "lName");
    const lName = createFormInput("text", "Doe", "lName");

    const usernameLabel = createFormLabel("Username", "username");
    const username = createFormInput("text", "johnSlayer12");

    const passwordLabel = createFormLabel("Password", "password");
    const password = createFormInput("text", "***********", "password");

    const emailLabel = createFormLabel("Email", "email");
    const email = createFormInput("email", "none@fake.com", "email");

    const formBtnContainer = document.createElement("fieldset");
    const resetBtn = createFormInputBtn("reset", "Reset");
    const submitBtn = createFormInputBtn("submit", "Submit");

    const validateFormInput = (input, regEx, errorMessage) => {
        const trimmedValue = input.value.trim();
        const isValid = regEx.test(trimmedValue);

        if (isValid) {
            console.log("nice");
        }
        else {
            console.log("not nice");
            displayErrorMessage(errorMessage);
        }

        return isValid;
    };

    const displayErrorMessage = (message) => {
        errorTextContainer.textContent = message;
    }

    const formValidation = (e) => {
        const nameRegEx = /^[a-zA-Z]{2,17}$/;
        const usernamRegEx = /^[0-9A-Za-z]{6,16}$/;
        const passwordRegEx = /^(?=.*?[0-9])(?=.*?[A-Za-z]).{8,32}$/;
        const emailRegEx = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;

        const isFNameValid = validateInput(fName, nameRegEx, "First name must be a valid name");
        const isLNameValid = validateInput(lName, nameRegEx, "Last name must be a valid name");
        const isUsernameValid = validateInput(username, usernamRegEx, "Username must be a valid username");
        const isPasswordValid = validateInput(password, passwordRegEx, "Pasword must be a valid password");
        const isEmailValid = validateInput(email, emailRegEx, "Email must be a valid email");

        if (isFNameValid && isLNameValid && isUsernameValid && isPasswordValid && isEmailValid) {
            signUpFieldset.innerHTML = "";

            const createdAccMessage = document.createElement("h2");
            createdAccMessage.textContent = "Account created";

            const userNameElement = document.createElement("p");
            userNameElement.textContent = "Username: " + username.value;

            const passwordElement = document.createElement("p");
            passwordElement.textContent = "Password: " +password.value;

            appendChildren(signUpFieldset, [
                closeFormBtn,
                createdAccMessage,
                userNameElement,
                passwordElement
            ]);
        }
        else {
            e.preventDefault();
        }
    }

    submitBtn.addEventListener("click", formValidation);

    const formErrorTextContainer = document.createElement("div");

    const appendChildren = (parent, elements) => {
        elements.forEach((element) => {
            parent.appendChild(element);
        });
    };

    //Appending btns
    appendChildren(formBtnContainer, [
        resetBtn,
        submitBtn
    ]);

    //Appending the form
    appendChildren(signUpFieldset, [
        closeFormBtn,
        fNameLabel,
        fName,
        lNameLabel,
        lName,
        usernameLabel,
        username,
        passwordLabel,
        password,
        emailLabel,
        email,
        formBtnContainer,
        formErrorTextContainer
    ]);

    signUpForm.appendChild(signUpFieldset);
    formContainer.appendChild(signUpForm);
}

signUpBtn.addEventListener("click", createSignUpForm);
