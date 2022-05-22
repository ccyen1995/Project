console.log("hi");
console.log(window.innerWidth);
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
// import Lightbox from "bs5-lightbox";

// const options = {
//   keyboard: true,
//   size: "fullscreen",
// };

// document.querySelectorAll(".my-lightbox-toggle").forEach((el) =>
//   el.addEventListener("click", (e) => {
//     e.preventDefault();
//     const lightbox = new Lightbox(el, options);
//     lightbox.show();
//   })
// );
window.onchange = () => {
  let viewwitdh = window.innerWidth;
};
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
    // arrows: true,
    // appendArrows: $("#haha"),
    // appendArrows: $("#readbtn"),
    responsive: [
      {
        breakpoint: 1017,
        // 991會轉換(-26)
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: true,
          appendArrows: $("#haha"),
        },
      },
      {
        breakpoint: 576,
        // 575會轉換
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
// function a() {
//   $(".product_list").slick({
//     dots: false,
//     infinite: true,
//     speed: 1000,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     easing: "ease",
//     appendArrows: $("#readbtn"),
//     responsive: [
//       {
//         breakpoint: 991,
//         settings: {
//           slidesToShow: 2,
//           slidesToShow: 2,
//         },
//       },
//     ],
//   });
//   let arrowss = false;
//   if (window.innerWidth <= 991) {
//     arrowss = true;

//     return [arrowss];
//   } else {
//     arrowss = false;
//     return [arrowss];
//   }
// }
// window.addEventListener("resize", start);

// function start() {
//   if (window.innerWidth <= 991) {
//   }
// }
