for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    // nếu chia hết cho 3 và 5 : FizzBuzz
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    // nếu chia hết cho 3  : Fizz
    console.log("Fizz");
  } else if (i % 5 === 0) {
    // nếu chia hết cho 5 :Buzz
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
