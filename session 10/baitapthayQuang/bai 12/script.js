// số đảo ngược
let n = parseInt(prompt("enter a number"));
let surplus;
let reverse = "";
while (n > 0) {
  surplus = n % 10;
  n = Math.floor(n / 10);
  reverse += surplus;
}
console.log(reverse);
