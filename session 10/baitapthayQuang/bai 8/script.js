let n = Number(prompt("Enter a number ?"));
let total = 0;
for (let i = 1; i <= n; i++) {
  if (i % 2 == 0) {
    total += i;
    console.log("n is : " + i + " total :" + total);
  }
}
