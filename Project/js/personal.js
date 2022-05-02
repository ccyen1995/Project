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
  document.querySelectorAll("section").forEach((sec) => {
    let top = window.scrollY;
    //從頂部開始計算已滾動的垂直方向的像素值
    let offset = sec.offsetTop - 150;
    //該section距離父元素頂端的的距離(Y軸px)
    //-150是為了讓瀏覽器提早辨識使用者已經進入該section的區域了
    //有時候滾輪的幅度比較大，造成一個滑動已經過頭，早就進入該section了
    let height = sec.offsetHeight;
    //該section的高度(含邊框)
    let id = sec.getAttribute("id");
    console.log(id);
    //取得各section的id
    if (top >= offset && top < offset + height) {
      //當畫面滾動到進入該section的區域時(已提早150px)
      document.querySelectorAll(".header .navbar a").forEach((links) => {
        //選擇所有navbar裡的a標籤
        console.log(links);
        links.classList.remove("active");
        //移除active class
        document
          .querySelector(".header .navbar a[href*=" + id + "]")
          //*=屬性選擇器不加引號也可以?
          .classList.add("active");
        // let a = document.querySelector(".header .navbar a[href*='" + id + "']");
        // console.log(a);
      });
    }
  });
};
