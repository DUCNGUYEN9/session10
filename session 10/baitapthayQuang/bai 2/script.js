let number1 = Number(prompt("nhập vào số thứ nhất"));
let number2 = Number(prompt("nhập vào số thứ hai"));
let number3 = Number(prompt("nhập vào số thứ ba"));
// find the smallest number
let min = number1;
if (min > number2) {
  min = number2;
}
if (min > number3) {
  min = number3;
}
console.log("số nhỏ nhât là", min);
// find the maximum number
let max = number1;
if (max < number2) {
  max = number2;
}
if (max < number3) {
  max = number3;
}
console.log("số lớn nhât là", max);
