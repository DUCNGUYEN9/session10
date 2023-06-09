let number1 = Number(prompt("Nhập số thứ nhất: "));
let number2 = Number(prompt("Nhập số thứ hai: "));
let number3 = Number(prompt("Nhập số thứ ba: "));

let product = number1 * number2 * number3;
let sign = product < 0 ? "-" : "+";

console.log("Dấu của tích 3 số là: " + sign);
