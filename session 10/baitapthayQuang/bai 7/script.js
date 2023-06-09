let month = Number(prompt("nhập vào tháng"));
let year = Number(prompt("nhập vào năm"));
// find day of month
switch (month) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    console.log("thang " + month + " năm " + year + " 31 ngày ");
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    console.log("thang " + month + " năm " + year + " 30 ngày ");
    break;
  default:
    // find leap year or non-leap year
    if (year % 4 === 0 && year % 100 !== 0) {
      console.log("thang " + month + "năm" + year + " 29 ngày là năm nhuận");
    } else if (year % 100 === 0 && year % 400 !== 0) {
      console.log("thang " + month + "năm" + year + " 28 ngày ");
    } else if (year % 100 === 0 && year % 400 === 0) {
      console.log("thang " + month + " năm " + year + " 29 ngày là năm nhuận");
    } else {
      console.log("thang " + month + " năm " + year + " 28 ngày ");
    }
}
