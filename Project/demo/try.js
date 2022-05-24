let btns = document.querySelectorAll(".btn");
let boxins = document.querySelectorAll(".boxin");
let btnsarray = [];
let boxinsarray = [];
let imgarrays = [];
//imgarrays可能用不到了
btns.forEach((btn) => {
  btnsarray.push(btn);
  btn.addEventListener("click", () => {
    let selectedboxnum = btn.dataset.boxTarget;
    let selectedbox = document.querySelector(`${selectedboxnum}`);
    let prebox = document.querySelector(".boxin.active");
    if (prebox !== null) {
      prebox.classList.remove("active");
    }
    selectedbox.classList.add("active");
  });
});
boxins.forEach((boxin, index) => {
  boxinsarray.push(boxin);
  let divs = boxin.querySelectorAll("div");
  imgarrays.push(divs);
});

// console.log(btnsarray);
// console.log(boxinsarray);
// console.log(imgarrays);

let lightbox = document.querySelector("#lightbox");
imgarrays.forEach((imgboxs) => {
  imgboxs.forEach((imgbox) => {
    let thisimg = imgbox.querySelector("img");
    imgbox.querySelector("img").addEventListener("click", () => {
      var newimg = thisimg.cloneNode(thisimg);
      if (lightbox.childNodes.length == 0) {
        lightbox.appendChild(newimg);
      } else {
        lightbox.replaceChild(newimg, lightbox.children[0]);
      }
    });
  });
});

let prebtn = document.querySelector("#pre");
let gallery = [];
prebtn.addEventListener("click", () => {
  console.log(lightbox);
  let lightboximg = lightbox.firstChild;
  //   if(lightboximg==null){
  //       return
  //   }else{
  // lightboximg.
  //   }
  let activebox = document.querySelector(".boxin.active");
  //   console.log(activebox.parentElement.children);
  console.log(imgarrays);
  console.log(activebox.querySelectorAll("img"));
  let pictures = activebox.querySelectorAll("img");
  gallery.push(...pictures);
  console.log(gallery);
});
let nextbtn = document.querySelector("#next");
