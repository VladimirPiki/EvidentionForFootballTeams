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
/////////////////////////SELECT////////////////////////////////////////////////////////////////////////

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
                    if (json[i].id != null) {
                        table += '<tr id="' + json[i].id + '">' +
                            '<td>' + json[i].id + '</td>' +
                            '<td>' + json[i].ime + '</td>' +
                            '<td>' + json[i].prezime + '</td>' +
                            '<td>' + json[i].grad + '</td>' +
                            '<td>' + json[i].firmaID + '</td>' +
                            '<td><button class="btn btn-danger" name="btnDelete-' + json[i].id + '" id="btnDelete-' + json[i].id + '" aria-label="btnDelete-' + json[i].id + '" data-bs-toggle="modal" data-bs-target="#deleteModal-" data-id="' + json[i].id + '" title="ИЗБРИШИ"><em class="fa fa-trash"></em></button></td>' +
                            '<td><button class="btn btn-info" name="btnUpdate-' + json[i].id + '" id="btnUpdate-' + json[i].id + '" aria-label="btnUpdate-' + json[i].id + '" data-bs-toggle="modal" data-bs-target="#editModal-" data-id="' + json[i].id + '" title="ИЗМЕНИ"><em class="fa fa-pencil"></em></button></td>' +
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
    getData("moja", { "table_name": "moja" });
});

///////////////////////////////POSTIRANJE///////////////////////////////////////////////////////////
function postData(file, podatociOdForm) {
    $.ajax({
        type: 'POST',
        url: '../model/' + file + '.php',
        data: JSON.stringify(podatociOdForm)
    });
}

////////////////////////////////INSERT////////////////////////////////////////////////////////
$(document).on('click', '#save', function () {
    let addIme = $("#ime").val();
    let addPrezime = $("#prezime").val();
    let addGrad = $("#grad").val();
    let addFirmaID = $("#firmaID").val();

    let objMoja = [{ "ime": addIme, "prezime": addPrezime, "grad": addGrad, "firmaID": addFirmaID, "table_name": "moja" }];

    if (addIme.length > 3 && addPrezime.length > 3 && addGrad.length > 3 && addFirmaID.length == 4) {
        if (findCellInTable("#myTable", "#firmaID") == -1) {
            alert("Успешно додадовте");
            postData("insert", objMoja);
            window.location.href = "../view/moja.html";
        } else {
            alert("Записот со исто ид постои!!!")
            window.location.href = "../view/moja.html";
        }

    } else {
        alert("Неуспешно додадовте. Ве молам внесете точни податоци!!!");
    }
})

////////////////////////////////////DELETE//////////////////////////////////////////////////
$(document).on('click', '[id^="btnDelete-"]', function () {
    $(".modal").find('button[id^="deleteMoja-"]').attr("id", "deleteMoja-" + $(this).data('id'));

    var currentRowDelete = $(this).closest("tr");
    var deleteCol1 = currentRowDelete.find("td:eq(0)").text();
    var deleteCol2 = currentRowDelete.find("td:eq(1)").text();
    var deleteCol3 = currentRowDelete.find("td:eq(2)").text();
    var deleteData = deleteCol1 + "\n" + deleteCol2 + "\n" + deleteCol3;
    $("#deletePrashalnik").html(deleteData)
});
$(document).on('click', '[id^="deleteMoja-"]', function () {

    let id_html = $(this).attr("id");
    let pk_value = id_html.split("-")[1];
    postData("delete", [{ "pk_id": pk_value, "table_name": "moja" }]);
    if (pk_value.length > 0) {
        alert("Успешно избришавте");
        window.location.href = "../view/moja.html";
        //setInterval('location.reload()', 1000);
    } else {
        alert("Неуспешно избришавте");
    }
});

//////////////////////////////////UPDATE/////////////////////////////////////////////////
$(document).on('click', '[id^="btnUpdate-"]', function () {
    $(".modal").find('button[id^="editMoja-"]').attr("id", "editMoja-" + $(this).data('id'));

    var currentRow = $(this).closest("tr");
    var col1 = currentRow.find("td:eq(0)").text();
    var col2 = currentRow.find("td:eq(1)").text();
    var col3 = currentRow.find("td:eq(2)").text();
    var col4 = currentRow.find("td:eq(3)").text();
    var col5 = currentRow.find("td:eq(4)").text();
    var dataImePrezime = col2 + "\n" + col3;
    var dataIme = col2 + "\n";
    var dataPrezime = col3 + "\n";
    var dataGrad = col4 + "\n";
    var dataFirmaID = col5 + "\n";

    $("#promeniImePrezime").html(dataImePrezime);
    $("#promeniID").html(col1);
    $("#promeniGrad").html(col4);

    $(document).ready(function () {
        $(this).find("input[id^=imeInput] ,textarea").each(function () {
            if (!$(this).val()) {
                $(this).attr("placeholder", dataIme);
            }
        });
        $(this).find("input[id^=prezimeInput] ,textarea").each(function () {
            if (!$(this).val()) {
                $(this).attr("placeholder", dataPrezime);
            }
        });
        $(this).find("input[id^=gradInput] ,textarea").each(function () {
            if (!$(this).val()) {
                $(this).attr("placeholder", dataGrad);
            }
        });
        $(this).find("input[id^=firmaIDinput] ,textarea").each(function () {
            if (!$(this).val()) {
                $(this).attr("placeholder", dataFirmaID);
            }
        });
    });

});
$(document).on('click', '[id^="editMoja-"]', function () {

    let id_html = $(this).attr("id");
    let pk_value_update = id_html.split("-")[1];
    let ime = $(".modal").find('input[id="imeInput"]').val();
    let prezime = $(".modal").find('input[id="prezimeInput"]').val();
    let grad = $(".modal").find('input[id="gradInput"]').val();
    let firmaID = $(".modal").find('input[id="firmaIDinput"]').val();

    //postData("update", [{ "ime": ime, "prezime": prezime, "grad": grad, "pk_id": pk_value_update, "firmaID": firmaID, "table_name": "moja" }]);

    if (ime.length > 3 && prezime.length > 3 && grad.length > 3 && firmaID.length == 4 && pk_value_update > 0) {
        if (findCellInTable("#myTable", "#firmaIDinput") == -1) {
            alert("Успешно заменивте");
            postData("update", [{ "ime": ime, "prezime": prezime, "grad": grad, "firmaID": firmaID, "pk_id": pk_value_update, "table_name": "moja" }]);
            window.location.href = "../view/moja.html";
        } else {
            alert("Записот со исто ид постои!!!")
            window.location.href = "../view/moja.html";
        }
    } else {
        alert("Неуспешно променивте. Обидете се со над 3 букви");
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
});