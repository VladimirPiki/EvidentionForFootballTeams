/////////////////navigation bar/////////////

$(document).on('click', "#moja", function () {
    window.location.href = "../view/moja.html";
})
$(document).on('click', "#teams", function () {
    window.location.href = "../view/teams.html";
})
$(document).on('click', "#leagues", function () {
    window.location.href = "../view/leagues.html";
})
$(document).on('click', "#main", function () {
    window.location.href = "../index.php";
})
$(document).on('click', "#sport", function () {
    window.location.href = "../view/sport.html";
})
$(document).on('click', "#premierLeague", function () {
    window.location.href = "../view/premierLeague.html";
})
$(document).on('click', "#results", function () {
    window.location.href = "../view/results.html";
})
//////////////////////----SELECT------/////////////////////////
function getData(action, post_data) {
    $.ajax({
        type: 'POST',
        url: '../model/select.php',
        data: JSON.stringify(post_data),
        success: function (data) {
            let json = jQuery.parseJSON(data);
            let jsonL = json.length;
            let table = '';
            if (action) {
                for (let i = 0; i < jsonL; i++) {
                    if (json[i].position != null) {
                        table += '<tr id="' + json[i].position + '">' +
                            '<td>' + json[i].position + '</td>' +
                            //'<td>' + json[i].club + '</td>' +
                            '<td>' + json[i].played + '</td>' +
                            '<td>' + json[i].won + '</td>' +
                            '<td>' + json[i].drawn + '</td>' +
                            '<td>' + json[i].lost + '</td>' +
                            '<td>' + json[i].gf + '</td>' +
                            '<td>' + json[i].ga + '</td>' +
                            '<td>' + json[i].gd + '</td>' +
                            '<td>' + json[i].points + '</td>' +
                            '<td>' + json[i].form + '</td>' +
                            //'<td>' + json[i].nextClub + '</td>' +
                            '<td><button class="btn btn-danger" name="btnDelete-' + json[i].position + '" id="btnDelete-' + json[i].position + '" aria-label="btnDelete-' + json[i].position + '" data-bs-toggle="modal" data-bs-target="#deleteModal-" data-id="' + json[i].position + '" title="ИЗБРИШИ"><em class="fa fa-trash"></em></button></td>' +
                            '<td><button class="btn btn-info" name="btnUpdate-' + json[i].position + '" id="btnUpdate-' + json[i].position + '" aria-label="btnUpdate-' + json[i].position + '" data-bs-toggle="modal" data-bs-target="#editModal-" data-id="' + json[i].position + '" title="ИЗМЕНИ"><em class="fa fa-pencil"></em></button></td>' +
                            '</tr>';
                    }
                    $("tbody").html(table);
                }
            }

        }
    });
}
$(document).ready(function () {
    checkLogin();
    getData("premierLeague", { "table_name": "premierLeague" });
});

///////////////////////////////POSTIRANJE////////////////////////////////////////////////////////////
function postData(file, podatociOdForm) {
    $.ajax({
        type: 'POST',
        url: '../model/' + file + '.php',
        data: JSON.stringify(podatociOdForm)

    });
}
/*
////////////////////////////////--------INSERT-------------////////////////////////////////////////////////////////
$(document).on('click', '#save', function () {
    let addNatprevaruvanje = $("#natprevaruvanjeInsert").val();
    let addSportID = $("#sportIdInsert").val();
    let postojID = findCellInTable("#myTable", "#sportIdInsert");

    let objSport = [{ "sportID": addSportID, "natprevaruvanje": addNatprevaruvanje, "table_name": "sport" }];

    if (addNatprevaruvanje.length > 3) {
        if (findCellInTable("#myTable", "#sportIdInsert") == -1 && findCellInTable("#myTable", "#natprevaruvanjeInsert") == -1) {
            alert("Успешно додадовте");
            postData("insert", objSport);
            window.location.href = "../view/sport.html";
        } else {
            if ((postojID >= 1)) {
                alert("Записот со исто ид постои!!!")
                window.location.href = "../view/sport.html";
            } else {
                alert("Записот со исто натпреварување постои!!!")
                window.location.href = "../view/sport.html";
            }
        }
    } else {
        alert("Неуспешно додадовте. Пополнете правилно!!!");
    }
})

//////////////------------DELETE----------------------//////////////////////////////////////////////////
$(document).on('click', '[id^="btnDelete-"]', function () {
    $(".modal").find('button[id^="deleteSport-"]').attr("id", "deleteSport-" + $(this).data('id'));
    var currentRowDelete = $(this).closest("tr");
    var deleteCol1 = currentRowDelete.find("td:eq(0)").text()
    var deleteCol2 = currentRowDelete.find("td:eq(1)").text();
    $("#deletePrashalnik").html(deleteCol2)
    $("#prashalnikID").html(deleteCol1)
});
$(document).on('click', '[id^="deleteSport-"]', function () {
    let id_html = $(this).attr("id");
    let pk_value = id_html.split("-")[1];
    postData("delete", [{ "pk_id": pk_value, "table_name": "sport" }]);
    if (pk_value.length > 0) {
        alert("Успешно избришавте");
        window.location.href = "../view/sport.html";
    } else {
        alert("Неуспешно избришавте");
    }
});

///////////////////////-----------UPDATE-----------/////////////////////////////////////////////////
$(document).on('click', '[id^="btnUpdate-"]', function () {
    $(".modal").find('button[id^="editSport-"]').attr("id", "editSport-" + $(this).data('id'));
    var currentRow = $(this).closest("tr");
    var col1 = currentRow.find("td:eq(0)").text();
    var col2 = currentRow.find("td:eq(1)").text();

    $("#naslovIme").html(col2)
    $("#naslovID").html(col1)

    $(document).ready(function () {
        $(this).find("input[id^=natprevaruvanjeUpdate] ,textarea").each(function () {
            if (!$(this).val()) {
                $(this).attr("placeholder", col2);
            }
        });
    });
});
$(document).on('click', '[id^="editSport-"]', function () {
    let id_html = $(this).attr("id");
    let pk_value_update = id_html.split("-")[1];
    let natprevaruvanjeUpdate = $(".modal").find('input[id="natprevaruvanjeUpdate"]').val();
    if (natprevaruvanjeUpdate.length > 3) {
        if (findCellInTable("#myTable", "#natprevaruvanjeUpdate") == -1) {
            alert("Успешно променивте !!!");
            postData("update", [{ "natprevaruvanje": natprevaruvanjeUpdate, "pk_id": pk_value_update, "table_name": "sport" }]);
            window.location.href = "../view/sport.html";;
        } else {
            alert("Записот постои !!!");
            window.location.href = "../view/sport.html";;
        }
    } else {
        alert("Неуспешно променивте. Обидете се повторно!!!");
    }
});
///////////////////////SEARCH/////////////////////////////
$(document).ready(function () {
    $("#myInput").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $("#myTable tr").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});*/