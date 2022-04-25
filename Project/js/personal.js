let menu = document.querySelector("#menu-btn");
let header = document.querySelector(".header");

menu.onclick = () => {
  console.log("hi");
  menu.classList.toggle("fa-xmark");
  header.classList.toggle("active");
  document.body.classList.toggle("active");
};

window.onscroll = () => {
  if (window.innerWidth < 991) {
    menu.classList.remove("fa-xmark");
    header.classList.remove("active");
    document.body.classList.remove("active");
  }
  console.log("hi");
};
