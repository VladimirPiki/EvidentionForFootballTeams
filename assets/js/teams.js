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
                    if (json[i].id != null) {
                        table += '<tr id="' + json[i].id + '">' +
                            '<td>' + json[i].id + '</td>' +
                            '<td>' + json[i].original_name + '</td>' +
                            '<td>' + json[i].alternative_name + '</td>' +
                            '<td>' + json[i].natprevaruvanje + '</td>' +
                            '<td hidden>' + json[i].sportID + '</td>' +
                            '<td>' + json[i].ef_team + '</td>' +
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
    getData("teams", { "table_name": "teams" });
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
                    window.location.href = "../view/teams.html"
                } else {
                    alert("Записот со исто оригинално име и спорт постои !!! Ве молам пополнете правилно!!!")
                    $("#alertInsert").show()
                    $("#zadolzitelnSport").hide()
                }
            } else if (file === "update") {
                if (data == "success") {
                    alert("Успешно променивте!!!")
                    window.location.href = "../view/teams.html"
                } else {
                    alert("Записот со исто оригинално име и спорт постои !!! Ве молам пополнете правилно!!!")
                    $("#alertUpdate").show()
                }
            }
        }
    });
}
////////////////////////////////--------INSERT-------------////////////////////////////////////////////////////////
function getDataSport(actionSport, post_dataSport) {
    $.ajax({
        type: 'POST',
        url: '../model/select.php',
        data: JSON.stringify(post_dataSport),
        success: function (data) {
            let jsonSport = jQuery.parseJSON(data);
            let jsonLSport = jsonSport.length;
            select = '<option value="" selected disable>Изберете спорт</option>';
            if (actionSport) {
                for (let i = 0; i < jsonLSport; i++) {
                    if (jsonSport[i].sportID != null) {
                        select += '<option  value=' + jsonSport[i].sportID + ' >' + jsonSport[i].natprevaruvanje + '</option>';
                    }
                    $("#natprevaruvanjeSport").html(select);
                }
            }
        }
    });
}
$(document).ready(function () {
    getDataSport("sport", { "table_name": "sport" });
});
$(document).on('click', '#addButton', function () {
    $("#alertInsert").hide()
    $("#dangerSport").hide()
    $("#minOriginaloIme").hide()
    $("#dangerEfTeam").hide()
    $("#zadolzitelnoOrginalnoIme").show()
    $("#zadolzitelnSport").show()
    $("#zadolzitelnoEfTeam").show()
    $(document).on("input", "#efTeam", function () {
        this.value = this.value.replace(/\D/g, '');
    });
});
$(document).on('click', '#save', function () {
    $("#alertInsert").hide()
    $("#dangerSport").hide()
    $("#minOriginaloIme").hide()
    $("#dangerEfTeam").hide()
    $("#zadolzitelnoOrginalnoIme").show()
    $("#zadolzitelnSport").show()
    $("#zadolzitelnoEfTeam").show()
    let addOriginalName = $("#originalName").val();
    let addAlternativeName = $("#alternativeName").val();
    let addSport = $("#natprevaruvanjeSport").find(":selected").val();
    let addEfTeam = $("#efTeam").val();
    let objTeams = [{ "original_name": addOriginalName, "alternative_name": addAlternativeName, "sport": addSport, "ef_team": addEfTeam, "table_name": "teams" }];
    if (addOriginalName.length > 3 && addSport != "" && addEfTeam.length != "") {
        postData("insert", objTeams);
    } else {
        alert("Неуспешно додадовте. Пополнете правилно!!!");
        $("#zadolzitelnoOrginalnoIme").hide()
        $("#zadolzitelnSport").hide()
        $("#zadolzitelnoEfTeam").hide()
        if (addSport == "") {
            $("#dangerSport").show()
        } else {
            $("#dangerSport").hide()
        }
        if (addOriginalName.length < 3) {
            $("#minOriginaloIme").show()
        } else {
            $("#minOriginaloIme").hide()
        }
        if (addEfTeam == "") {
            $("#dangerEfTeam").show()
        } else {
            $("#dangerEfTeam").hide()
        }
    }
})
//////////////------------DELETE----------------------//////////////////////////////////////////////////
$(document).on('click', '[id^="btnDelete-"]', function () {
    $(".modal").find('button[id^="deleteTeams-"]').attr("id", "deleteTeams-" + $(this).data('id'));
    var currentRowDelete = $(this).closest("tr");
    var deleteCol2 = currentRowDelete.find("td:eq(1)").text();
    var deleteCol4 = currentRowDelete.find("td:eq(3)").text();
    var deleteData = deleteCol2 + " во спортот " + deleteCol4;
    $("#deletePrashalnik").html(deleteData)
});
$(document).on('click', '[id^="deleteTeams-"]', function () {
    let id_html = $(this).attr("id");
    let pk_value = id_html.split("-")[1];
    if (pk_value.length > 0) {
        alert("Успешно избришавте");
        postData("delete", [{ "pk_id": pk_value, "table_name": "teams" }]);
        window.location.href = "../view/teams.html";
    } else {
        alert("Неуспешно избришавте");
    }
});
///////////////////////-----------UPDATE-----------/////////////////////////////////////////////////
$(document).on('click', '[id^="btnUpdate-"]', function () {
    $(".modal").find('button[id^="editTeams-"]').attr("id", "editTeams-" + $(this).data('id'));
    getDataSportUpdate("sport", { "table_name": "sport" });
    var currentRow = $(this).closest("tr");
    var col2 = currentRow.find("td:eq(1)").text();
    var col3 = currentRow.find("td:eq(2)").text();
    var col4 = currentRow.find("td:eq(3)").text();
    var col5 = currentRow.find("td:eq(4)").text();
    var col6 = currentRow.find("td:eq(5)").text();
    var dataOriginalIme = col2 + "\n";
    var dataAlternativeIme = col3 + "\n";
    var dataefTeam = col6 + "\n";
    var dataSport = col4 + "\n";
    $("#naslovIme").html(col2)
    $(document).ready(function () {
        $(this).find("input[id^=originalNameInput] ,textarea").each(function () {
            if (!$(this).val()) {
                $(this).attr("placeholder", dataOriginalIme);
            }
        });
        $(this).find("input[id^=alternativeNameInput] ,textarea").each(function () {
            if (!$(this).val()) {
                $(this).attr("placeholder", dataAlternativeIme);
            }
        });
        $(this).find("input[id^=efTeamInput] ,textarea").each(function () {
            if (!$(this).val()) {
                $(this).attr("placeholder", dataefTeam);
            }
        });
    });
    function getDataSportUpdate(actionSportUpdate, post_dataSportUpdate) {
        $.ajax({
            type: 'POST',
            url: '../model/select.php',
            data: JSON.stringify(post_dataSportUpdate),
            success: function (data) {
                let jsonSportUpdate = jQuery.parseJSON(data);
                let jsonLSportUpdate = jsonSportUpdate.length;
                selectSportUpdate = '<option  value=' + col5 + '>' + dataSport + '</option > ';
                if (actionSportUpdate) {
                    for (let i = 0; i < jsonLSportUpdate; i++) {
                        if (jsonSportUpdate[i].sportID != null) {
                            selectSportUpdate += '<option  value=' + jsonSportUpdate[i].sportID + ' >' + jsonSportUpdate[i].natprevaruvanje + '</option>';
                        }
                        $("#sportUpdate").html(selectSportUpdate);
                    }
                }
            }
        });
    };
    $("#alertUpdate").hide()
    $("#dangerPkTeamUpdate").hide()
    $("#dangerSportUpdate").hide()
    $("#minOriginaloImeUpdate").hide()
    $("#dangerEfTeamUpdate").hide()
    $("#zadolzitelnoOrginalnoImeUpdate").show()
    $("#zadolzitelnoEfTeamUpdate").show()
    $(document).on("input", "#efTeamInput", function () {
        this.value = this.value.replace(/\D/g, '');
    });
});
$(document).on('click', '[id^="editTeams-"]', function () {
    $("#alertUpdate").hide()
    $("#dangerSportUpdate").hide()
    $("#minOriginaloImeUpdate").hide()
    $("#dangerEfTeamUpdate").hide()
    $("#zadolzitelnoOrginalnoImeUpdate").show()
    $("#zadolzitelnoEfTeamUpdate").show()
    let id_html = $(this).attr("id");
    let pk_value_update = id_html.split("-")[1];
    let orginalNameUpdate = $(".modal").find('input[id="originalNameInput"]').val();
    let alternativeNameUpdate = $(".modal").find('input[id="alternativeNameInput"]').val();
    let sportUpdate = $("#sportUpdate").find(":selected").val();
    let efTeamUpdate = $(".modal").find('input[id="efTeamInput"]').val();
    let objTeamsUpdate = [{ "original_name": orginalNameUpdate, "alternative_name": alternativeNameUpdate, "sport": sportUpdate, "ef_team": efTeamUpdate, "pk_id": pk_value_update, "table_name": "teams" }]
    if (orginalNameUpdate.length > 3 && sportUpdate != "" && efTeamUpdate.length != "" && pk_value_update > 0) {
        postData("update", objTeamsUpdate);
    } else {
        alert("Неуспешно променивте. Обидете се повторно!!!");
        $("#zadolzitelnoOrginalnoImeUpdate").hide()
        $("#zadolzitelnoEfTeamUpdate").hide()
        if (sportUpdate == "") {
            $("#dangerSportUpdate").show()
        } else {
            $("#dangerSportUpdate").hide()
        }
        if (orginalNameUpdate.length < 3) {
            $("#minOriginaloImeUpdate").show()
        } else {
            $("#minOriginaloImeUpdate").hide()
        }
        if (efTeamUpdate == "") {
            $("#dangerEfTeamUpdate").show()
        } else {
            $("#dangerEfTeamUpdate").hide()
        }
        if (pk_value_update <= 0) {
            $("#dangerPkUpdate").show()
        } else {
            $("#dangerPkTeamUpdate").hide()
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
