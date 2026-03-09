
const colorRadios = document.querySelectorAll('input[name="color"]');

colorRadios.forEach(radio => {
  radio.addEventListener('change', (event) => {
    document.body.style.backgroundColor = event.target.value;
  });
});

const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', (event) => {
  const inputValue = event.target.value.trim();
  nameOutput.textContent = inputValue || 'незнайомець';
});

const validationInput = document.querySelector('#validation-input');

validationInput.addEventListener('blur', () => {
  const requiredLength = Number(validationInput.dataset.length);
  const inputLength = validationInput.value.length;
  
  if (inputLength === requiredLength) {
    validationInput.classList.add('valid');
    validationInput.classList.remove('invalid');
  } else {
    validationInput.classList.add('invalid');
    validationInput.classList.remove('valid');
  }
});

const fontSizeControl = document.querySelector('#font-size-control');
const textSpan = document.querySelector('#text');

fontSizeControl.addEventListener('input', (event) => {
  textSpan.style.fontSize = event.target.value + 'px';
});
