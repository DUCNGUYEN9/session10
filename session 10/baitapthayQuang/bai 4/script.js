let number1 = Number(prompt("số đầu tiên"));
let number2 = Number(prompt("số thứ hai"));
let operation = prompt("nhập phép tính");
switch (operation) {
  case "+":
    result = number1 + number2;
    break;
  case "-":
    result = number1 - number2;
    break;
  case "*":
    result = number1 * number2;
    break;
  case "/":
    result = number1 / number2;
    break;
  default:
    result = number1 % number2;
    break;
}
console.log("kết quả là:" + result);
