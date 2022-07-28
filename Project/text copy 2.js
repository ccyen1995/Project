function a() {
  var me = 4;
  me2 = 2;
  console.log("a>>" + me);
  b();
  // var me;
  console.log("a2>>" + me);
}
a();
var me;
var me2;
me = 5;
function b() {
  console.log("b>>" + me);
  // console.log(me3);
  console.log("b2>>" + me2);
}
console.log(me);
