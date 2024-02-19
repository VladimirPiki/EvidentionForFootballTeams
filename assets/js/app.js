/////////////////navigation bar/////////////
$(document).on('click', "#moja", function () {
    window.location.href = "view/moja.html";
})
$(document).on('click', "#teams", function () {
    window.location.href = "view/teams.html";
})
$(document).on('click', "#leagues", function () {
    window.location.href = "view/leagues.html";
})
$(document).on('click', "#sport", function () {
    window.location.href = "view/sport.html";
})
$(document).on('click', "#premierLeague", function () {
    window.location.href = "view/premierLeague.html";
})
$(document).on('click', "#main", function () {
    window.location.href = "index.php";
})
///////////////////Log out////////////////////////
$(document).on('click', "#logOut", function () {
    window.location.href = "../model/logout.php";
})
///////////////////Najdi vo tabelata/////////////////////////////

function findCellInTable(selectorTable, selectorSearchField) {
    var findMe = -1;
    var value = $(selectorSearchField).val().toLowerCase();
    $(selectorTable + " tbody tr").filter(function () {
        if ($(this).text().toLowerCase().indexOf(value) > -1) {
            findMe = 1;
        }
    });
    return findMe;
}

//////////////Proveri dali sum logiran////////////////////////
function checkLogin() {
    $.ajax({
        type: 'POST',
        url: 'index.php',
        success: function (response) {
            if (response == "LOGIN") {

            }
            else {
                //alert("Најавете се правилно!!!");
                window.location.href = '../index.php'
            }
        }
    });
}