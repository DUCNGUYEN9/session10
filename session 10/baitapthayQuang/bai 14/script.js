let n = Number(prompt("Enter a number ?"));
for (let i = 2; i <= n; i++) {
  let check = true;
  for (let j = 2; j <= Math.sqrt(i); j++) {
    if (i % j === 0) {
      check = false;
      break;
    }
  }
  if (check) {
    console.log("các số nguyên tố:  " + i);
  }
}
