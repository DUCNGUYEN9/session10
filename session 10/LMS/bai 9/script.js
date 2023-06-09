let weight = prompt("enter weight?");
let height = prompt("enter height?");
let bmi = weight / (height * height);

if (bmi < 18) {
  document.write("Underwight");
} else if (bmi < 25.0) {
  document.write("Normal");
} else if (bmi < 30.0) {
  document.write("Overwight");
} else {
  document.write("obese");
}
