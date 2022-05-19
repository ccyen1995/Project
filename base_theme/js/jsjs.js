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
