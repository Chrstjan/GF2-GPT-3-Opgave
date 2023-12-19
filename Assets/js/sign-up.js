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

    const emailLabel = createFormLabel("Email", "email");
    const email = createFormInput("email", "none@fake.com", "email");

    const formBtnContainer = document.createElement("fieldset");
    const resetBtn = createFormInputBtn("reset", "Reset");
    const submitBtn = createFormInputBtn("submit", "Submit");

    // submitBtn.addEventListener("click", formValidation);

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
        emailLabel,
        email,
        formBtnContainer,
        formErrorTextContainer
    ]);

    signUpForm.appendChild(signUpFieldset);
    formContainer.appendChild(signUpForm);
}

signUpBtn.addEventListener("click", createSignUpForm);
