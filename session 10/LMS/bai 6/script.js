let text = prompt("Enter a Text ?");

let message =
  text == "Employee"
    ? "Hello"
    : text == "Director"
    ? "Greetings"
    : text == ""
    ? "NO login"
    : "";
alert(message);
