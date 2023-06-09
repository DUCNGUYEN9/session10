let a = Number(prompt("nhập vào chiều dài cạnh a của tam giác"));
let b = Number(prompt("nhập vào chiều dài cạnh b của tam giác"));
let c = Number(prompt("nhập vào chiều dài cạnh c của tam giác"));

// find triangle
if (a + b > c && b + c > a && c + a > b) {
  // isosceles triangle
  if (a === b && b === c && a === c) {
    console.log("tam giác này là tam giác đều");
  }

  // find isosceles right triangle and right triangle
  else if (
    b ** 2 + a ** 2 === c ** 2 ||
    b ** 2 + c ** 2 === a ** 2 ||
    a ** 2 + c ** 2 === b ** 2
  ) {
    if (a === c || b === c || b === a) {
      console.log("tam giác này là tam giác vuông cân");
    } else {
      console.log("tam giác này là tam giác vuông");
    }
  }

  // find equilateral triangle
  else if (a === b || b === c || a === c) {
    console.log("tam giác này là tam giác can");
  }
} else {
  console.log("đây không phải là 1 tam giác");
}
