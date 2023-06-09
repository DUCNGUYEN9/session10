let n = Number(prompt("Nhập vào 1 số có 3 chữ số"));

// math.pow hàm tính lũy thừa
let armstrong =
  Math.pow(Math.floor(n / 100), 3) +
  Math.pow(Math.floor((n % 100) / 10), 3) +
  Math.pow(n % 10, 3);

if (armstrong == n) {
  console.log("đây là số armstrong");
} else {
  console.log("đây không phải là số armstrong");
}
