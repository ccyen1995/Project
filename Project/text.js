function getdata(name, callback) {
  // setTimeout(() => {
  //   callback({ name: name });
  // });
  console.log(callback);
}
let data = getdata("kenny", (obj) => {
  console.log(obj);
  console.log(this);
});
console.log(data);

let jj = [1, 2, 3];
jj.forEach((element) => {
  console.log(this);
});
jj.forEach(function (element) {
  console.log(this);
});
