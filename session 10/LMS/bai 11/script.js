let output = document.getElementById("output");
// in value khi click number
function number(value) {
  output.innerHTML += value;
}
// khi click = ra result
function equal() {
  let expression = output.innerHTML;
  let result = eval(expression);
  output.innerHTML = result;
}
// khi click C

function clearBtn() {
  output.innerHTML = "";
}
