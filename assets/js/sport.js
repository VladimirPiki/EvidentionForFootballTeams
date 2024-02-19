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
                    if (json[i].sportID != null) {
                        table += '<tr id="' + json[i].sportID + '">' +
                            '<td>' + json[i].sportID + '</td>' +
                            '<td>' + json[i].natprevaruvanje + '</td>' +
                            '<td>' + json[i].poluvreminja + '</td>' +
                            '<td><button class="btn btn-danger" name="btnDelete-' + json[i].sportID + '" id="btnDelete-' + json[i].sportID + '" aria-label="btnDelete-' + json[i].sportID + '" data-bs-toggle="modal" data-bs-target="#deleteModal-" data-id="' + json[i].sportID + '" title="ИЗБРИШИ"><em class="fa fa-trash"></em></button></td>' +
                            '<td><button class="btn btn-info" name="btnUpdate-' + json[i].sportID + '" id="btnUpdate-' + json[i].sportID + '" aria-label="btnUpdate-' + json[i].sportID + '" data-bs-toggle="modal" data-bs-target="#editModal-" data-id="' + json[i].sportID + '" title="ИЗМЕНИ"><em class="fa fa-pencil"></em></button></td>' +
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
    getData("sport", { "table_name": "sport" });
});

///////////////////////////////POSTIRANJE////////////////////////////////////////////////////////////
function postData(file, podatociOdForm) {
    $.ajax({
        type: 'POST',
        url: '../model/' + file + '.php',
        data: JSON.stringify(podatociOdForm),
        success: function (data) {
            if (file == "insert") {
                if (data === "uspesno") {
                    alert("Успешно внесивте!!!")
                    window.location.href = "../view/sport.html"
                } else {
                    alert("Натпреварувањето со исто име постои !!! Ве молам пополнете правилно!!!")
                    $("#duplikatInsert").show()
                    $("#zadolzitelnoNatprevaruvanje").hide()
                }
            } else if (file === "update") {
                if (data == "success") {
                    alert("Успешно променивте!!!")
                    window.location.href = "../view/sport.html"
                } else {
                    alert("Натпреварувањето со исто име постои !!! Ве молам пополнете правилно!!!")
                    $("#duplikatUpdate").show()
                    $("#zadolzitelnoNatprevaruvanjeUpdate").hide()
                }
            }
        }
    });
}

////////////////////////////////--------INSERT-------------////////////////////////////////////////////////////////

$(document).on('click', "#addButton", function () {
    $("#duplikatInsert").hide()
    $("#maxPoluvreminja").hide()
    $("#dangerPoluvreminja").hide()
    $("#zadolzitelnoPoluvreminja").show()
    $("#dangerNatprevaruvanje").hide()
    $("#zadolzitelnoNatprevaruvanje").show()
    $(document).on('input', "#poluvreminjaInsert", function () {
        this.value = this.value.replace(/\D/g, '');//Uste vo input da nemozi vo minus da vlezi
    })
});

$(document).on('click', '#save', function () {
    $("#duplikatInsert").hide()
    $("#maxPoluvreminja").hide()
    $("#dangerPoluvreminja").hide()
    $("#zadolzitelnoPoluvreminja").show()
    $("#dangerNatprevaruvanje").hide()
    $("#zadolzitelnoNatprevaruvanje").show()
    let addSportID = $("#sportIdInsert").val();
    let addNatprevaruvanje = $("#natprevaruvanjeInsert").val();
    let addPoluvreminja = $("#poluvreminjaInsert").val();
    let objSport = [{ "sportID": addSportID, "natprevaruvanje": addNatprevaruvanje, "poluvreminja": addPoluvreminja, "table_name": "sport" }];
    if (addNatprevaruvanje.length > 3 && (addPoluvreminja != "" && addPoluvreminja.length < 2)) {
        postData("insert", objSport);
    } else {
        alert("Неуспешно додадовте. Пополнете правилно!!!");
        $("#zadolzitelnoPoluvreminja").hide()
        $("#zadolzitelnoNatprevaruvanje").hide()


        if (addPoluvreminja == "") {
            $("#dangerPoluvreminja").show();
            $("#zadolzitelnoPoluvreminja").hide()
        } else {
            $("#dangerPoluvreminja").hide()
        }

        if (addPoluvreminja.length > 1) {
            $("#maxPoluvreminja").show();
            $("#zadolzitelnoPoluvreminja").hide()
        } else {
            $("#maxPoluvreminja").hide()
        }

        if (addNatprevaruvanje.length < 4) {
            $("#dangerNatprevaruvanje").show();
            $("#zadolzitelnoNatprevaruvanje").hide()
        } else {
            $("#dangerNatprevaruvanje").hide()
        }
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

    if (pk_value.length > 0) {
        postData("delete", [{ "pk_id": pk_value, "table_name": "sport" }]);
        alert("Успешно избришавте");
        window.location.href = "../view/sport.html";
    } else {
        alert("Неуспешно избришавте");
    }
});

///////////////////////-----------UPDATE-----------/////////////////////////////////////////////////
$(document).on('click', '[id^="btnUpdate-"]', function () {
    $(document).on('input', "#poluvreminjaUpdate", function () {
        this.value = this.value.replace(/\D/g, '');//Uste vo input da nemozi vo minus da vlezi
    })
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
    $("#duplikatUpdate").hide()
    $("#maxPoluvreminjaUpdate").hide()
    $("#dangerPoluvreminjaUpdate").hide()
    $("#dangerNatprevaruvanjeUpdate").hide()
    $("#zadolzitelnoPoluvreminjaUpdate").show()
    $("#zadolzitelnoNatprevaruvanjeUpdate").show()
});
$(document).on('click', '[id^="editSport-"]', function () {
    $("#duplikatUpdate").hide()
    $("#maxPoluvreminjaUpdate").hide()
    $("#dangerPoluvreminjaUpdate").hide()
    $("#dangerNatprevaruvanjeUpdate").hide()
    $("#zadolzitelnoPoluvreminjaUpdate").show()
    $("#zadolzitelnoNatprevaruvanjeUpdate").show()
    let id_html = $(this).attr("id");
    let pk_value_update = id_html.split("-")[1];
    let natprevaruvanjeUpdate = $(".modal").find('input[id="natprevaruvanjeUpdate"]').val();
    let poluvreminjaUpdate = $(".modal").find('input[id="poluvreminjaUpdate"]').val();
    let objSportUpdate = [{ "natprevaruvanje": natprevaruvanjeUpdate, "poluvreminja": poluvreminjaUpdate, "pk_id": pk_value_update, "table_name": "sport" }]
    if (natprevaruvanjeUpdate.length > 3 && (poluvreminjaUpdate != "" && poluvreminjaUpdate.length < 2)) {
        postData("update", objSportUpdate);
    } else {
        alert("Неуспешно променивте. Обидете се повторно!!!");
        $("#zadolzitelnoPoluvreminjaUpdate").hide()
        $("#zadolzitelnoNatprevaruvanjeUpdate").hide()
        if (poluvreminjaUpdate == "") {
            $("#dangerPoluvreminjaUpdate").show();
            $("#zadolzitelnoPoluvreminjaUpdate").hide()
        } else {
            $("#dangerPoluvreminjaUpdate").hide()
        }
        if (poluvreminjaUpdate.length > 1) {
            $("#maxPoluvreminjaUpdate").show();
            $("#zadolzitelnoPoluvreminjaUpdate").hide()
        } else {
            $("#maxPoluvreminjaUpdate").hide()
        }
        if (natprevaruvanjeUpdate.length < 4) {
            $("#dangerNatprevaruvanjeUpdate").show();
            $("#zadolzitelnoNatprevaruvanjeUpdate").hide()
        } else {
            $("#dangerNatprevaruvanjeUpdate").hide()
        }
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