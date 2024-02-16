// Selecting form and input elements
const scriptURL = 'https://script.google.com/macros/s/AKfycbydUkGKM-nsj_4SPwTcOZZ9ior5X9_RfBQUBHl1irnpdn9NE9m4fz-nHnPR5fm1HwFU/exec'

const form = document.forms['contact-form']

// Function to display error messages
const showError = (field, errorText) => {
    field.classList.add("error");
    const errorElement = document.createElement("small");
    errorElement.classList.add("error-text");
    errorElement.innerText = errorText;
    field.closest(".form-group").appendChild(errorElement);
}

// Function to handle form submission
const handleFormData = (e) => {
    e.preventDefault();

    // Retrieving input elements
    const fullnameInput = document.getElementById("fullname");
    const emailInput = document.getElementById("email");
    const numbersInput = document.getElementById("numbers");
    const mobileInput = document.getElementById("mobile");
    const lettersInput = document.getElementById("letters");
    const thirdOptionsInput = document.getElementById("thirdOptions");

    // Getting trimmed values from input fields
    const fullname = fullnameInput.value.trim();
    const email = emailInput.value.trim();
    const mobile = mobileInput.value.trim();
    const letters = lettersInput.value.trim();
    const numbers = numbersInput.value.trim();
    const thirdOptions = thirdOptionsInput.value.trim();

    // Regular expression pattern for email validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    // Clearing previous error messages
    document.querySelectorAll(".form-group .error").forEach(field => field.classList.remove("error"));
    document.querySelectorAll(".error-text").forEach(errorText => errorText.remove());

    // Performing validation checks
    if (fullname === "") {
        showError(fullnameInput, "Enter your full name");
    }
    if (!emailPattern.test(email)) {
        showError(emailInput, "Enter a valid email address");
    }
    if (numbers === "") {
        showError(numbersInput, "Select your Grade");
    }
    if (letters === "") {
        showError(lettersInput, "Select your Workspace");
    }
    if (thirdOptions === "") {
        showError(thirdOptionsInput, "Select your Venue and date");
    }

    if (mobile === "") {
        showError(mobileInput, "Select your mobile");
    }


    // Checking for any remaining errors before form submission
    const errorInputs = document.querySelectorAll(".form-group .error");
    if (errorInputs.length > 0) return;

    // Submitting the form
    form.submit();
}

// Toggling password visibility

// Handling form submission event

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert("Thank you! your form is submitted successfully." ))
    .then(() => { window.location.reload(); })
    .catch(error => console.error('Error!', error.message))
  })