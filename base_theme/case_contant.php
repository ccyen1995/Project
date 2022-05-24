<?php include_once("php/head.php"); ?>

<div class="page_case_topimg">
    <h1>Actual case</h1>
</div>
<div class="container">
    <h1 class="page_case_contant_title"><img src="./img/welcome/logo2.png" alt="" />實際案例</h1>
    <section class="page_case_contant">
        <h3>實際案例標題名稱</h3>
        <p>內容敘述...內容敘述...內容敘述...內容敘述...內容敘述...內容敘述...內容敘述...內容敘述...內容敘述...內容敘述...內容敘述...內容敘述...內容敘述...內容敘述...內容敘述...內容敘述...內容敘述...內容敘述...內容敘述...內容敘述...內容敘述...內容敘述...內容敘述...內容敘述...內容敘述...內容敘述...內容敘述...內容敘述...內容敘述...內容敘述...內容敘述...內容敘述...內容敘述...內容敘述...內容敘述...內容敘述...內容敘述...內容敘述...內容敘述...內容敘述...內容敘述...內容敘述</p>
        <div class="page_case_carousel">
            <div class="page_case_carousel_big">
                <img src="./img/case/case_child_item1.jpg" alt="" id="">
            </div>
            <div class="page_case_carousel_small">
                <img src="./img/case/case_child_item1.jpg" alt="">
                <img src="./img/case/case_child_item2.jpg" alt="">
                <img src="./img/case/case_child_item3.jpg" alt="">
            </div>
        </div>
        <div class="page_case_imgs">
            <img src="./img/case/case_child_item4.jpg" alt="">
            <img src="./img/case/case_child_item4.jpg" alt="">
            <img src="./img/case/case_child_item4.jpg" alt="">
            <img src="./img/case/case_child_item4.jpg" alt="">
            <img src="./img/case/case_child_item4.jpg" alt="">
            <img src="./img/case/case_child_item4.jpg" alt="">
            <img src="./img/case/case_child_item4.jpg" alt="">
            <img src="./img/case/case_child_item4.jpg" alt="">
            <img src="./img/case/case_child_item4.jpg" alt="">
            <img src="./img/case/case_child_item4.jpg" alt="">
            <img src="./img/case/case_child_item4.jpg" alt="">
        </div>
    </section>
    <button class="goback">回上一頁</button>
</div>
<script>
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
        let interval = function() {
            setInterval(() => {
                // $(".page_case_carousel_big img").animate({}, speed, callback);
                let carouselpic = document.querySelector(".page_case_carousel_big img");
                let picamount = carouselpics.length;
                let src = carouselpic.getAttribute("src");
                let picnumstr = src.slice(-5, -4);
                let picnum = Number(picnumstr);
                if (picnum < picamount) {} else {
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
</script>
<?php include_once("php/foot.php"); ?>