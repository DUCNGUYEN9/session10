let btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  let monthInput = document.getElementById("month");
  let month = parseInt(monthInput.value);
  // Enter a month
  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      document.getElementById(
        "result"
      ).innerHTML = `Tháng ${month} có 31 ngày.`;
      break;
    case 2:
      document.getElementById(
        "result"
      ).innerHTML = `Tháng ${month} có 28 ngày hoac 29 ngay.`;
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      document.getElementById(
        "result"
      ).innerHTML = `Tháng ${month} có 30 ngày.`;
      break;
    default:
      document.getElementById(
        "result"
      ).innerHTML = `không có tháng ${month} xin nhập lại.`;
  }
});
