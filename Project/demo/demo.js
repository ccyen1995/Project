//剛載入
let userimfor = document.querySelector(".user");
console.log(userimfor);
window.onload = () => {
  let state = JSON.parse(localStorage.getItem("state"));
  if (state == true) {
    loginbtn.innerText = "已登入";
    gameimgName.forEach((item) => {
      item.classList.add("login_");
    });
  } else {
    logoutbtn.style.display = "none";
    userimfor.style.display = "none";
  }
};

//輪播區start========================
let arrow_right = document.querySelector(".arrow_right");
let arrow_left = document.querySelector(".arrow_left");
let f = document.getElementById("s1");
//設置箭頭按鈕
arrow_left.onclick = () => {
  var e = document.querySelector("input[checked='true']");
  console.log("點擊左");
  if (e.previousElementSibling != null) {
    e.removeAttribute("checked");
    e.previousElementSibling.setAttribute("checked", true);
  }
  return;
};
arrow_right.onclick = () => {
  var e = document.querySelector("input[checked='true']");
  console.log("點擊右");
  if (e.nextElementSibling != f) {
    // 右邊不是div.s1的話就執行
    e.removeAttribute("checked");
    e.nextElementSibling.setAttribute("checked", true);
  }
  return;
};
//白點點擊換圖
let a = document.querySelectorAll("label");
a.forEach((item, index) => {
  item.addEventListener("click", () => {
    var e = document.querySelector("input[checked='true']");
    console.log(e);
    let b = e.parentElement.querySelectorAll("input");
    console.log(e.parentElement.querySelectorAll("input"));
    console.log(b[index]);
    e.removeAttribute("checked");
    b[index].setAttribute("checked", true);
  });
});
//自動輪播
setInterval(() => {
  let bb = document.querySelector("input[checked='true']");
  if (bb.nextElementSibling == f) {
    bb.removeAttribute("checked");
    let r1Input = document.getElementById("r1");
    r1Input.setAttribute("checked", true);
  } else {
    bb.removeAttribute("checked");
    bb.nextElementSibling.setAttribute("checked", true);
  }
}, 4000);
//輪播區end============================

// menu====================
let menu = document.querySelector("#menu");
let menu2 = document.querySelector("section.navbarr");
menu.addEventListener("click", () => {
  //   console.log("hi");
  menu2.classList.add("active");
  openOverlay();
});
function openOverlay() {
  overlay.classList.add("active");
}
// menu end====================

let y = document.querySelectorAll("div.feature");
y.forEach((item) => {
  item.addEventListener("mouseover", () => {
    let imgName = item.children[0].getAttribute("src");
    let yy = imgName.split(".");
    let yyy = "." + yy[1] + "-on." + yy[2];
    item.children[0].setAttribute("src", yyy);
  });
  item.addEventListener("mouseout", () => {
    let imgName = item.children[0].getAttribute("src");
    let zz = imgName.replace("-on.", ".");
    item.children[0].setAttribute("src", zz);
  });
});

//登入
let account_state1 = JSON.parse(localStorage.getItem("state"));
let loginbtn = document.getElementById("login");
let logoutbtn = document.getElementById("logout");
let gameimgName = document.querySelectorAll(".feature");
console.log(gameimgName);
loginbtn.addEventListener("click", () => {
  account_state1 = true;
  localStorage.setItem("state", JSON.stringify(account_state1));
  loginbtn.innerText = "已登入";
  logoutbtn.style.display = "block";
  userimfor.style.display = "flex";
  gameimgName.forEach((item) => {
    item.classList.add("login_");
  });
});
logoutbtn.addEventListener("click", () => {
  account_state1 = false;
  localStorage.setItem("state", JSON.stringify(account_state1));
  loginbtn.innerText = "登入";
  logoutbtn.style.display = "none";
  userimfor.style.display = "none";
  gameimgName.forEach((item) => {
    item.classList.remove("login_");
  });
});

//game area==========================

// 在使用javsscript操作CSS時可以用 data- attribute ，可避免跟CSS class混和再一起
// data attribute 可以不設定其值? html第158行
const openmodalbtn = document.querySelectorAll("[data-modal-target]");
const closemodalbtn = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay");

openmodalbtn.forEach((button) => {
  button.addEventListener("click", () => {
    let state = JSON.parse(localStorage.getItem("state"));
    if (state == true) return;
    const modal = document.querySelector(button.dataset.modalTarget);
    //dataset用法
    console.log(modal);
    //在javascript會將data-*屬性進行轉變，去掉 -(dash)。並將 dash 後面的字母轉為大寫後將data-*後綴字合併，也就是駝峰形式
    //因此dataset後面要接的單字必須是轉變後的單字
    openmodal(modal);
  });
});
closemodalbtn.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = button.closest(".modal");
    closemodal(modal);
  });
});

overlay.addEventListener("click", () => {
  const modals = document.querySelectorAll(".active");
  modals.forEach((modal) => {
    closemodal(modal);
  });
});

function openmodal(modal) {
  if (modal == null) return;
  modal.classList.add("active");
  overlay.classList.add("active");
}
function closemodal(modal) {
  if (modal == null) return;
  modal.classList.remove("active");
  overlay.classList.remove("active");
}
//game end==========================
