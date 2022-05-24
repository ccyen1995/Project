// ===========================QAbox
let qaboxs = document.querySelectorAll(".qabox");
qaboxs.forEach((qabox, index) => {
  qabox.addEventListener("click", () => {
    let qabox_active = document.querySelector(".qabox.active");
    qabox.classList.toggle("active");
    if (qabox_active == null) {
      return;
    } else {
      qabox_active.classList.remove("active");
    }
  });
});

let QAboxs = document.querySelectorAll(".QAbox");
QAboxs.forEach((QAbox, index) => {
  QAbox.addEventListener("click", () => {
    let QAbox_active = document.querySelector(".QAbox.active");
    QAbox.classList.toggle("active");
    if (QAbox_active == null) {
      return;
    } else {
      QAbox_active.classList.remove("active");
    }
  });
});
// ===========================QAbox

// =======================slick.js
$(document).ready(function () {
  $(".carousell_area_img").slick({
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    // autoplay: true,
    // autoplaySpeed: 2000,
    easing: "ease",
  });
  $(".product_list").slick({
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 1,
    easing: "ease",
    arrows: false,
    // arrows: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: true,
          appendArrows: $("#haha"),
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          appendArrows: $("#haha"),
        },
      },
    ],
  });
});
// You can unslick at a given breakpoint now by adding:
// settings: "unslick"
// instead of a settings object
// =======================slick.js

//======================light-box
// 在使用javsscript操作CSS時可以用 data- attribute ，可避免跟CSS class混和再一起
// data attribute 可以不設定其值? html第158行
// const products = document.querySelectorAll("[data-modal-target]");
const products = document.querySelectorAll(".items");
const lightbox = document.querySelector("#lightbox");
const overlay = document.getElementById("overlay");
products.forEach((product) => {
  product.addEventListener("click", () => {
    console.log(product);
    let lightboxsrc = product.querySelector("img").getAttribute("src");
    console.log(lightboxsrc);
    console.log(lightbox.querySelector("img"));
    lightbox.querySelector("img").setAttribute("src", lightboxsrc);
    lightbox.classList.add("acctive");
    overlay.classList.add("acctive");
    // lightbox.firstElementChild.setAttribute("src");
    // console.log(button.dataset);
    // const modal = document.querySelector(button.dataset.modalTarget);
    //dataset用法
    // console.log(modal);
    //在javascript會將data-*屬性進行轉變，去掉 -(dash)。並將 dash 後面的字母轉為大寫後將data-*後綴字合併，也就是駝峰形式
    //因此dataset後面要接的單字必須是轉變後的單字
    // openmodal(modal);
  });
});
// closemodalbtn.forEach((button) => {
//   button.addEventListener("click", () => {
//     const modal = button.closest(".modal");
//     closemodal(modal);
//   });
// });
overlayy(overlay);
function overlayy(overlay) {
  if (overlay == null) {
    return;
  } else {
    overlay.addEventListener("click", () => {
      const modals = document.querySelectorAll(".acctive");
      modals.forEach((modal) => {
        closemodal(modal);
      });
    });
  }
}

// function openmodal(modal) {
//   if (modal == null) return;
//   modal.classList.add("active");
//   overlay.classList.add("active");
// }
function closemodal(modal) {
  // if (modal == null) return;
  lightbox.firstElementChild.setAttribute("src", "");
  lightbox.classList.remove("acctive");
  overlay.classList.remove("acctive");
}
//======================light-box

// back to top
const toTop = document.querySelector(".to-top");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 200) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});
// back to top

// ===========================case輪播

let z = carousell(4);
// carousell(s);
// s[number], s秒換一次圖

let carouselpics = document.querySelectorAll(".page_case_carousel_small img");
carouselpics.forEach((pic) => {
  pic.addEventListener("click", () => {
    let picsrc = pic.getAttribute("src");
    let carouselpic = document.querySelector(".page_case_carousel_big img");
    carouselpic.setAttribute("src", picsrc);
    clearTimeout(resett);
  });
});

let resett = setTimeout(z, 2);

function carousell(time) {
  let interval = function () {
    setInterval(() => {
      // $(".page_case_carousel_big img").animate({}, speed, callback);
      let carouselpic = document.querySelector(".page_case_carousel_big img");
      let picamount = carouselpics.length;
      let src = carouselpic.getAttribute("src");
      let picnumstr = src.slice(-5, -4);
      let picnum = Number(picnumstr);
      if (picnum < picamount) {
      } else {
        picnum = 0;
      }
      let src2 = src.replace(picnumstr, picnum + 1);
      carouselpic.setAttribute("src", src2);
      console.log(carouselpic.style.animation);
      // carouselpic.style.animation = "hello 1s";
      carouselpic.style.animation = `hello ${time}s linear infinite`;
    }, time * 1000);
  };
  return interval;
}
// ===========================case輪播
