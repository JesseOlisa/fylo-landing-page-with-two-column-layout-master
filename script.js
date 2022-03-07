const form = document.getElementById('form');
const formTwo = document.getElementById('form-2')
const email = document.getElementById('email');
const emailTwo = document.getElementById('email-2');
const error = document.querySelector('.error');

form.addEventListener('submit' , (e) => {
    e.preventDefault();

    if (email.value.trim() === '') {
        errormsg(form, email);
        email.classList.add('error-red')
    }
    else {
        removeErrorMsg(error);
    }
})

formTwo.addEventListener('submit' , (e) => {
    e.preventDefault();

    if (emailTwo.value.trim() === '') {
        errormsg(formTwo, emailTwo);
    }
    else {
        removeErrorMsg(formTwo);
    }
})


//ERROR MESSAGE FUNCTION
const errormsg = (form, emailNumber) => {
    inputControl = form.querySelector('.error');
    inputControl.innerText = 'Please enter a valid email address';
    inputControl.classList.add('error-msg');
    emailNumber.placeholder = 'johnappleseed#mail.com';
}
const removeErrorMsg = (form) => {
    inputControl = form.querySelector('.error');
    inputControl.innerText = '';
    inputControl.classList.remove('error-msg');
}
