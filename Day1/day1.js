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
  return Math.max.apply(Math, caloriesCount);
}

console.log("Nombre de calorie max : ", getMaxCalories(data));
