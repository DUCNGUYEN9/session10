let number1 = Number(prompt("Nhập số thứ nhất: "));
let number2 = Number(prompt("Nhập số thứ hai: "));
let number3 = Number(prompt("Nhập số thứ ba: "));

if (number1 >= number2 && number1 >= number3) {
  if (number2 >= number3) {
    console.log(
      "Các số theo thứ tự giảm dần là: " +
        number1 +
        ", " +
        number2 +
        ", " +
        number3
    );
  } else {
    console.log(
      "Các số theo thứ tự giảm dần là: " +
        number1 +
        ", " +
        number3 +
        ", " +
        number2
    );
  }
} else if (number2 >= number1 && number2 >= number3) {
  if (number1 >= number3) {
    console.log(
      "Các số theo thứ tự giảm dần là: " +
        number2 +
        ", " +
        number1 +
        ", " +
        number3
    );
  } else {
    console.log(
      "Các số theo thứ tự giảm dần là: " +
        number2 +
        ", " +
        number3 +
        ", " +
        number1
    );
  }
} else {
  if (number1 >= number2) {
    console.log(
      "Các số theo thứ tự giảm dần là: " +
        number3 +
        ", " +
        number1 +
        ", " +
        number2
    );
  } else {
    console.log(
      "Các số theo thứ tự giảm dần là: " +
        number3 +
        ", " +
        number2 +
        ", " +
        number1
    );
  }
}
