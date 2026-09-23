const form = document.forms[0];
const radioGroup = form['rating'];
const submit = form['submit'];
const ratingState = document.querySelector('.state.rating');
const resultState = document.querySelector('.state.result');
const resultValue = resultState.querySelector('.result.value');

submit.addEventListener("click", onSubmit);

function onSubmit(event) {
    event.preventDefault();

    if (radioGroup.value != "") {
        console.log(radioGroup.value);
        resultValue.textContent = radioGroup.value;

        resultState.classList.add('show');
        ratingState.classList.remove('show');
    }
}