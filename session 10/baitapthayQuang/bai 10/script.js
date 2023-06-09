let n = Number(prompt("Enter a number?"));
let isPrime = true;
// find a prime
if (n < 2) {
  isPrime = false;
} else {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      isPrime = false;
      break;
    }
  }
}

if (isPrime) {
  console.log(n + " is a prime number.");
} else {
  console.log(n + " is not a prime number.");
}
