<?php
require_once "lib/class_database.php";
?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Krstevski</title>

    <!--Bootstrap-->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>


    <!--JQuery-->
    <script src="assets/js/jquery.min.js"></script>
    <script src="assets/js/app.js"></script>

    <!--CSS-->
    <link rel="stylesheet" href="assets/css/style.css">

    <!--Icon-->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

</head>

<body>
    <?php
    require_once "view/header.html";
    ?>

    <div class="container mt-5">
        <div class="row">
            <div class="col-sm-12">
                <div class="alert alert-danger" id="msgError">ВНИМАНИЕ! Внесете правилно корисничко име и лозинка</div>
                <form name="myForm" method="POST">
                    <div class="mb-3 mt-3">
                        <label for="username" class="form-label loginStyle">Корисничко име:</label>
                        <input type="text" class="form-control" id="username" placeholder="Внесете корисничко име" name="username">
                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label loginStyle">Лозинка:</label>
                        <input type="password" class="form-control" id="password" placeholder="Внесете лозинка" name="password">
                    </div>
                    <button type="button" class="btn btn-dark loginStyleButton" name="login" id="login">НАЈАВИ СЕ</button>
                </form>
            </div>
        </div>
    </div>

    <?php require_once "view/footer.html"; ?>

    <script src="assets/js/login.js"></script>

</body>

</html>