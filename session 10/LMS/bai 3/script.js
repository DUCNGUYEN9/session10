let userName = prompt("Enter Your Name ?");

if (userName == "Admin") {
  let userPass = prompt("Enter Your Password ?");
  if (userPass == "TheMaster") {
    alert("Welcome");
  } else if (userPass == null) {
    alert("Canceled");
  } else {
    alert("Wrong password");
  }
} else if (userName == null) {
  alert("Canceled");
} else {
  alert("I don't know you");
}
