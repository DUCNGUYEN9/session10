let fuel;
// Kiểm tra input của nhiên liệu
do {
  fuel = Number(prompt("Nhập vào số lượng nhiên liệu"));
  if (isNaN(fuel)) {
    alert("Vui lòng nhập số nhiên liệu là một số");
  } else if (fuel < 5000 || fuel > 30000) {
    alert("Vui lòng nhập số nhiên liệu trong khoảng từ 5000 đến 30000");
  } else {
    break;
  }
} while (true);

let astronaut;
// Kiểm tra input của số phi hành gia
do {
  astronaut = Number(prompt("Nhập vào số phi hành gia"));
  if (isNaN(astronaut)) {
    alert("Vui lòng nhập số phi hành gia là một số");
  } else if (astronaut < 1 || astronaut > 7) {
    alert("Vui lòng nhập số phi hành gia trong khoảng từ 1 đến 7");
  } else {
    break;
  }
} while (true);

let fuel50km = 100 * astronaut;
let times = Math.floor(fuel / fuel50km);
let maxHeight = times * 50;
let fuelRemain = fuel % fuel50km;

alert(
  "Độ cao tối đa: " + maxHeight + " - Số nhiên liệu còn lại: " + fuelRemain
);
