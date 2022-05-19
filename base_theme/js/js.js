// JavaScript Document
console.log("hi");
let qaboxs = document.querySelectorAll(".qabox");
qaboxs.forEach((qabox, index) => {
  qabox.addEventListener("click", () => {
    let qabox_active = document.querySelector(".qabox.active");
    qabox.classList.toggle("active");
    console.log(qabox_active);
    if (qabox_active == null) {
      return;
    } else {
      qabox_active.classList.remove("active");
    }
  });
});
