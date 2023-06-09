let total;
total = 0;
do {
  let number = parseInt(prompt("enter a number"));
  if (number > 0) {
    total += number;
  } else {
    break;
  }
} while (true);
console.log(total);
