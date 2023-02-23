const form = document.getElementById('form');
const emailInput = document.getElementById('email');
const regionInput = document.getElementById('region');
const zipInput = document.getElementById('zip-code');
const passInput = document.getElementById('pass');
const confirmPassInput = document.getElementById('pass-confirm');
const btnSubmit = document.getElementById('btn-submit');

// form.addEventListener('submit', e => {
//     e.preventDefault();

//     checkValidity();
// })

const setError = (input, message) => {
    const formInput = input.parentElement;
    const errorDisplay = formInput.querySelector('.error-msg');

    errorDisplay.innerText = message;
}

const setSuccess = (input) => {
    const formInput = input.parentElement;
    const errorDisplay = formInput.querySelector('.error-msg');

    errorDisplay.innerText = '';
    formInput.classList.add('success');
    formInput.classList.remove('error');
}

// TODO: Current validation not fully done through JS.
const validateInput = (input) => {
    if (input === emailInput) {
        if (input.validity.valid) {
            setSuccess(input);
        } else {
            setError(input, 'Please enter a valid email address.');
        }
    } else if (input === zipInput) {
        if (input.validity.valid) {
            setSuccess(input);
        } else {
            setError(input, 'Please enter a valid zip code number.');
        }
    }
}

emailInput.addEventListener('keyup', () => {
    validateInput(emailInput);
})

zipInput.addEventListener('keyup', () => {
    validateInput(zipInput);
})

// zipInput.addEventListener('blur', () => {

// })

// emailInput.addEventListener('blur', () => {
//     if (emailInput.validity.valid) {
//         setSuccess(emailInput);
//     } else {
//         setError(emailInput, 'Message');
//     }
// })