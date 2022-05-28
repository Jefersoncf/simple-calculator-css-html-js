// Value input variable
var inputs = document.getElementById('input');
const btnClear = document.getElementById('btn-clear');

// Insert number inputs fied
const insertNum = num => inputs.innerText += num;

// Do operation using eval()
const equalTo = () => (inputs.innerText) ? inputs.innerText = eval(inputs.innerText) : false;

// Remove all inputs
btnClear.addEventListener('click', () => {
  inputs.innerText = '';
});

// Remove one input element
function deleteNum() {
  let result = document.getElementById('input').innerText;
  document.getElementById('input').innerText = result.substring(0, result.length - 1);
}