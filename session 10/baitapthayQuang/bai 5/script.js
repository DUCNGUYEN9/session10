let html = Number(prompt("nhập số điểm html"));
let css = Number(prompt("nhập số điểm css"));
let js = Number(prompt("nhập số điểm js"));
let average = (html + css + js) / 3;
//Print to the screen
if (average < 5) {
  console.log("xếp loại Yếu");
} else if (average >= 5 && average < 6) {
  console.log("xếp loại kém");
} else if (average >= 6 && average < 7) {
  console.log("xếp loại trung bình");
} else if (average >= 7 && average < 8) {
  console.log("xếp loại khá");
} else if (average >= 8 && average < 9) {
  console.log("xếp loại giỏi");
} else {
  console.log("xếp loại xuất sắc");
}
