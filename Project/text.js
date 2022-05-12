const arr = ["a", "a", "b", "c", "c", "c", "e"];
const obj = {};
arr.forEach(function (char, index) {
  console.log(`${index}: ` + obj[char]);
  console.log(obj);
  if (obj[char]) {
    obj[char]++;
  } else {
    obj[char] = 1;
  }
});

let j = {};
j["g"] = 1;
console.log(j);
