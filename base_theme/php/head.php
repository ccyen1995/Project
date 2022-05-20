<!DOCTYPE html>
<html lang="zh-TW">

<head>
    <meta charset="utf-8" lang="zh-TW" />
    <meta http-equiv="Content-Language" content="zh-tw" />
    <meta http-equiv="cache-control" content="no-cache">
    <meta http-equiv="pragma" content="no-cache">
    <meta http-equiv="expires" content="0">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="distribution" content="Taiwan">
    <meta name="keywords" content="<?php //echo ($keywords[0]->web_keyword != "") ? $keywords[0]->web_keyword : $default_keywords[0]->web_keyword;  
                                    ?>">
    <meta name="description" content="<?php //echo ($keywords[0]->web_description != "") ? $keywords[0]->web_description : $default_keywords[0]->web_description; 
                                        ?>">
    <meta name="robots" content="none">

    <title><?php //echo ($keywords[0]->web_title != "") ? $keywords[0]->web_title : $default_keywords[0]->web_title; 
            ?></title>

    <base href="<?php //echo base_url(); 
                ?>">

    <link rel="stylesheet" href="./css/index.css">
    <link rel="shortcut icon" href="favicon.ico">
    <!-- <link rel="stylesheet" href="css/bootstrap4.min.css" /> -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="css/external_p.css" />
    <link rel="stylesheet" href="css/external_p2.css" />
    <link rel="stylesheet" href="css/slick.css" />
    <link rel="stylesheet" href="css/slick-theme.css" />
    <link rel="stylesheet" href="css/gs.css?<?php echo time(); ?>" />

    <script language="javascript" src="js/jquery-1.12.3.min.js"></script>
    <script language="javascript" src="js/slick.min.js"></script>
    <script src="js/js.js"></script>
    <script src="https://kit.fontawesome.com/71cf4654e7.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    <!-- <link rel="stylesheet" type="text/css" href="slick/slick.css" /> -->
    <link rel="stylesheet" type="text/css" href="./js/slick.js" />
</head>

<body>
    <header class="header_">
        <div id="toptop"></div>
        <div class="navbar_">
            <div class="logo">
                <img src="./img/logo.png" alt="" />
                <div>
                    <p>艾芬波斯館</p>
                    <p>فروشگاه ایرانی عطفیان</p>
                </div>
            </div>
            <div class="links">
                <a href="#">首頁</a>
                <a href="#">關於</a>
                <a href="#">服務項目</a>
                <a href="#">商品內容</a>
                <a href="#">實際案例</a>
                <a href="#">常見問題</a>
                <a href="#">銷售據點</a>
                <a href="#">聯絡我們</a>
            </div>
            <div class="community">
                <i class="fa-brands fa-line"></i>
                <i class="fa-brands fa-instagram-square"></i>
                <i class="fa-brands fa-facebook-square"></i>
            </div>
            <button class="btn btn-primary burger" type="button" data-bs-toggle="offcanvas" data-bs-target="#demo">
                <i class="fa-solid fa-bars"></i>
            </button>
        </div>
    </header>
    <div class="offcanvas offcanvas-end burger_nav" id="demo">

        <!-- <h1 class="offcanvas-title"></h1> -->
        <button type="button" class="close_" data-bs-dismiss="offcanvas"><i class="fa-solid fa-xmark"></i></button>

        <div class="offcanvas-body">
            <div class="links">
                <a href="#">首頁</a>
                <a href="#">關於</a>
                <a href="#">服務項目</a>
                <a href="#">商品內容</a>
                <a href="#">實際案例</a>
                <a href="#">常見問題</a>
                <a href="#">銷售據點</a>
                <a href="#">聯絡我們</a>
            </div>
            <div class="community">
                <i class="fa-brands fa-line"></i>
                <i class="fa-brands fa-instagram-square"></i>
                <i class="fa-brands fa-facebook-square"></i>
            </div>
        </div>
    </div>