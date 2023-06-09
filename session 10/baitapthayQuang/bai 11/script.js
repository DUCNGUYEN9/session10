let n = Number(prompt("Enter a Number ?"));
let isHoanHao = false;
let sum = 0;

for (let i = 1; i < n; i++) {
  if (n % i === 0) {
    sum += i;
  }
}
if (n === sum) {
  isHoanHao = true;
}

if (isHoanHao) {
  console.log("số hoàn hảo ");
} else {
  console.log("số khong hoàn hảo ");
}
