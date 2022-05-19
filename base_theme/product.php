<?php include_once("php/head.php"); ?>

<div class="page_product_topimg">
    <h1>商品內容</h1>
</div>

<div class="page_product_area">
    <ul class="nav nav-pills page_product_list" role="tablist">
        <li class="nav-item page_product_type1">
            <a class="nav-link active" data-bs-toggle="pill" href="#home">全部商品</a>
        </li>
        <li class="nav-item page_product_type2">
            <a class="nav-link" data-bs-toggle="pill" href="#menu1">波斯地毯</a>
        </li>
        <li class="nav-item page_product_type3">
            <a class="nav-link" data-bs-toggle="pill" href="#menu2">波斯茶葉</a>
        </li>
        <li class="nav-item page_product_type4">
            <a class="nav-link" data-bs-toggle="pill" href="#menu3">禮盒</a>
        </li>
    </ul>

    <!-- Tab panes -->
    <div class="tab-content">
        <div id="home" class=" tab-pane active">
            <div class="items_list">
                <div class="items">
                    <img src="./img/product/pillow.jpg" alt="">
                    <h3>方巾抱枕</h3>
                </div>
                <div class="items">
                    <img src="./img/product/pillow.jpg" alt="">
                    <h3>方巾抱枕</h3>
                </div>
                <div class="items">
                    <img src="./img/product/pillow.jpg" alt="">
                    <h3>方巾抱枕</h3>
                </div>
                <div class="items">
                    <img src="./img/product/pillow.jpg" alt="">
                    <h3>方巾抱枕</h3>
                </div>
                <div class="items">
                    <img src="./img/product/pillow.jpg" alt="">
                    <h3>方巾抱枕</h3>
                </div>
            </div>
        </div>
        <div id="menu1" class="container tab-pane fade"><br>
            <h3>Menu 1</h3>
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div id="menu2" class="container tab-pane fade"><br>
            <h3>Menu 2</h3>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
        </div>
        <div id="menu3" class="container tab-pane fade"><br>
            <h3>Menu 3</h3>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
        </div>
    </div>
</div>
<!-- Nav pills -->


<?php include_once("php/foot.php"); ?>