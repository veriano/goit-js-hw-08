import throttle  from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');

const STORAGE_KEY = "feedback-form-state";

form.addEventListener('input', throttle(onFormValue, 500));

const formData = {};

function onFormValue(evt) {
    formData[evt.target.name] = evt.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};

populateInputs();

function populateInputs() {
    const savedMessage = localStorage.getItem(STORAGE_KEY);
    if (savedMessage) {
        const getMessage = JSON.parse(savedMessage);
        console.log(getMessage);
    input.value = getMessage.email,
    textarea.value = getMessage.message;
   }
 };

 form.addEventListener('submit', onFormSubmit);

function onFormSubmit(evt) {
    evt.preventDefault();
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    console.log(formData);
};


