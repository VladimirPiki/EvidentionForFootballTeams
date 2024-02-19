<?php
session_start();
$json = json_decode(file_get_contents("php://input"));
$action = $json->action;
if (isset($action) && $action == "login") {

    require_once "../lib/class_database.php";
    require_once "DAO/usersDAO.php";

    $DB = new Database();
    $objUsers = new UsersDAO($DB);

    $objUsers->setUsername($json->username);
    $objUsers->setPassword($json->password);


    $results = $objUsers->loginUsers();
    if (isset($results[0]["users_id"]) && $results[0]["users_id"] > 0) {
        $_SESSION['LOGIN'] = $results;
        echo "success";
    } else {
        echo "fail";
    }
    exit();
} else {
    header("Location: ../index.php");
}
