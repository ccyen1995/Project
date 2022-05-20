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
$(document).ready(function () {
  $(".carousell_area_img").slick({
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    easing: "ease",
  });
  $(".product_list").slick({
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    // autoplay: true,
    // autoplaySpeed: 2000,
    easing: "ease",
    appendArrows: $("#readbtn"),
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToShow: 2,
        },
      },
    ],
    // centerMode: true,
    // centerPadding: "60px",
    // slidesToShow: 3,
    // responsive: [
    //   {
    //     breakpoint: 768,
    //     settings: {
    //       arrows: false,
    //       centerMode: true,
    //       centerPadding: "40px",
    //       slidesToShow: 3,
    //     },
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       arrows: false,
    //       centerMode: true,
    //       centerPadding: "40px",
    //       slidesToShow: 1,
    //     },
    //   },
    // ],
  });
});
// You can unslick at a given breakpoint now by adding:
// settings: "unslick"
// instead of a settings object
