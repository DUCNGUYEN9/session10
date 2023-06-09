let amount = Number(prompt("nhập tiền gửi"));
let rate = Number(prompt("nhập lãi suất năm"));
let months = Number(prompt("nhập số tháng gửi"));
//lãi suất tháng
let rateMonth = rate / 12 / 100;
let interest = 0;
for (let i = 1; i <= months; i++) {
  let interestMonth;
  interestMonth = rateMonth * amount;
  amount = amount + interestMonth;
  interest += interestMonth;
  console.log(
    "số tiền lãi nhập gốc : " + amount + " và số tiền lãi : " + interest
  );
}
