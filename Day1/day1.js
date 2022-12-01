var fs = require("fs");

var data = fs.readFileSync("./input.txt").toString().split("\n");

function getMaxCalories(data) {
  let caloriesCount = [];
  let calorieCount = 0;
  data.forEach((calorie) => {
    let calorieNumber = parseInt(calorie);
    if (calorie !== "") {
      calorieCount += calorieNumber;
    } else if (calorie === "") {
      caloriesCount.push(calorieCount);
      calorieCount = 0;
    }
  });
  return getTop3(caloriesCount);
}

function getTop3(data) {
  let res = 0;
  data.sort((a, b) => b - a);

  const newData = data.splice(0, 3);
  console.log(newData);
  newData.forEach((number) => {
    res += number;
  });

  return res;
}

console.log("Nombre de calorie max : ", getMaxCalories(data));
