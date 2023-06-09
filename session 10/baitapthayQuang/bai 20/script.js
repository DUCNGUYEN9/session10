//a. input : 0 => -20
for (let i = 0; i >= -20; i--) {
  console.log("câu a: " + i);
}

//b. input : 0 => -29

for (let i = 3; i >= -29; i--) {
  if (i % 2 != 0) {
    console.log("câu b: " + i);
  }
}

//c. input : 12 => -14

for (let i = 12; i >= -14; i--) {
  if (i % 2 == 0) {
    console.log("câu c: " + i);
  }
}

//d. input: bội số của 3 từ 50 => 20
for (let i = 50; i >= 20; i--) {
  if (i % 3 == 0) {
    console.log("câu d : " + i);
  }
}
