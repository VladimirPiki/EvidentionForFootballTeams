function getData(_action, post_data) {
    $.ajax({
        type: 'POST',
        url: 'model/login.php',
        data: JSON.stringify(post_data),
        success: function (response) {
            if (response == "success") {
                alert("Успешно се најавивте")
                window.location.href = "view/moja.html";
            }
            else {
                alert("Погрешни внесени детали");
            }
        }
    });
}
$(document).ready(function () {
    $("#msgError").hide();
});
$(document).on('click', "#login", function () {
    let user = $("#username").val();
    let pass = $("#password").val();
    if (user != "" && pass != "") {
        getData("login", { "action": "login", "username": user, "password": pass });
    } else {
        $("#msgError").show();
    }

});
