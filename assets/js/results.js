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
                    if (json[i].resultsID != null) {
                        table += '<tr id="' + json[i].resultsID + '">' +
                            '<td>' + json[i].resultsID + '</td>' +
                            '<td hidden>' + json[i].IDimeNaLiga + '</td>' +
                            '<td>' + json[i].imeNaLiga + '</td>' +
                            '<td>' + json[i].domakin + '</td>' +
                            '<td hidden>' + json[i].domakinID + '</td>' +
                            '<td>' + json[i].results + '</td>' +
                            '<td>' + json[i].gostin + '</td>' +
                            '<td hidden>' + json[i].gostinID + '</td>' +
                            '<td>' + json[i].datum + '</td>' +
                            '<td>' + json[i].vreme + '</td>' +
                            '<td>' + json[i].natprevaruvanje + '</td>' +
                            '<td hidden>' + json[i].poluvreminja + '</td>' +
                            '<td hidden>' + json[i].sportID + '</td>' +
                            '<td hidden>' + json[i].prvoPoluvremeDomakin + '</td>' +
                            '<td hidden>' + json[i].vtoroPoluvremeDomakin + '</td>' +
                            '<td hidden>' + json[i].tretoPoluvremeDomakin + '</td>' +
                            '<td hidden>' + json[i].cetvrtoPoluvremeDomakin + '</td>' +
                            '<td hidden>' + json[i].konecenDomakin + '</td>' +
                            '<td hidden>' + json[i].konecenGostin + '</td>' +
                            '<td hidden>' + json[i].prvoPoluvremeGostin + '</td>' +
                            '<td hidden>' + json[i].vtoroPoluvremeGostin + '</td>' +
                            '<td hidden>' + json[i].tretoPoluvremeGostin + '</td>' +
                            '<td hidden>' + json[i].cetvrtoPoluvremeGostin + '</td>' +
                            '<td><button class="btn btn-danger" name="btnDelete-' + json[i].resultsID + '" id="btnDelete-' + json[i].resultsID + '" aria-label="btnDelete-' + json[i].resultsID + '" data-bs-toggle="modal" data-bs-target="#deleteModal-" data-id="' + json[i].resultsID + '" title="ИЗБРИШИ"><em class="fa fa-trash"></em></button></td>' +
                            '<td><button class="btn btn-info" name="btnUpdate-' + json[i].resultsID + '" id="btnUpdate-' + json[i].resultsID + '" aria-label="btnUpdate-' + json[i].resultsID + '" data-bs-toggle="modal" data-bs-target="#editModal-" data-id="' + json[i].resultsID + '" title="ИЗМЕНИ"><em class="fa fa-pencil"></em></button></td>' +
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
    getData("results", { "table_name": "results" });
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
                    window.location.href = "../view/results.html"
                } else if (data === "Ova utakmica e izigrana") {
                    alert("Тимовите имаат одиграно на избраниот датум !!! Ве молам пополнете правилно!!!")
                } else {
                    alert("Натпреварот постои !!! Ве молам пополнете правилно!!!")
                }
            } else if (file === "update") {
                if (data == "success") {
                    alert("Успешно променивте!!!")
                    window.location.href = "../view/results.html"
                } else if (data === "unsuccess") {
                    alert("Тимовите имаат одиграно на избраниот датум !!! Ве молам пополнете правилно!!!")
                } else {
                    alert("Натпреварот постои !!! Ве молам пополнете правилно!!!")
                }
            }
        }
    });
}

////////////////////////////////--------INSERT-------------////////////////////////////////////////////////////////

function getDataLeagues(actionLeagues, post_dataLeagues) {
    $.ajax({
        type: 'POST',
        url: '../model/select.php',
        data: JSON.stringify(post_dataLeagues),
        success: function (data) {
            let jsonLeagues = jQuery.parseJSON(data);
            let jsonLLeagues = jsonLeagues.length;
            selectLeagues = '<option value="" selected disable>Изберете лига</option>';
            if (actionLeagues) {
                for (let i = 0; i < jsonLLeagues; i++) {
                    if (jsonLeagues[i].id != null) {
                        selectLeagues += '<option  value=' + jsonLeagues[i].id + ' >' + jsonLeagues[i].original_name + '</option>';
                    }
                    $("#leagueSelect").html(selectLeagues);
                }
            }
        }
    });
}

function getDataDomakin(actionDomakin, post_dataDomakin) {
    $.ajax({
        type: 'POST',
        url: '../model/select.php',
        data: JSON.stringify(post_dataDomakin),
        success: function (data) {
            let jsonDomakin = jQuery.parseJSON(data);
            let jsonLDomakin = jsonDomakin.length;
            selectDomakin = '<option value="" selected disable>Изберете домашен тим</option>';
            if (actionDomakin) {
                for (let i = 0; i < jsonLDomakin; i++) {
                    if (jsonDomakin[i].id != null) {
                        selectDomakin += '<option  value=' + jsonDomakin[i].id + ' >' + jsonDomakin[i].original_name + '</option>';
                    }
                    $("#domakinSelect").html(selectDomakin);
                }
            }
        }
    });
}

function getDataGostin(actionGostin, post_dataGostin) {
    $.ajax({
        type: 'POST',
        url: '../model/select.php',
        data: JSON.stringify(post_dataGostin),
        success: function (data) {
            let jsonGostin = jQuery.parseJSON(data);
            let jsonLGostin = jsonGostin.length;
            selectGostin = '<option value="" selected disable>Изберете гостински тим</option>';
            if (actionGostin) {
                for (let i = 0; i < jsonLGostin; i++) {
                    if (jsonGostin[i].id != null) {
                        selectGostin += '<option  value=' + jsonGostin[i].id + ' >' + jsonGostin[i].original_name + '</option>';
                    }
                    $("#gostinSelect").html(selectGostin);
                }
            }
        }
    });
}

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
                        select += '<option id=' + jsonSport[i].poluvreminja + ' value=' + jsonSport[i].sportID + ' >' + jsonSport[i].natprevaruvanje + '</option>';
                    }
                    $("#natprevaruvanjeSport").html(select);

                    $(document).on('click', "#natprevaruvanjeSport", function () {
                        let najdiId = $("#natprevaruvanjeSport").find(":selected").attr("id")
                        $("#pokaziNaslovZaRezultat").hide();
                        $("#pokaziKonecen").hide();
                        $("#pokaziPrvoVtoroPoluvreme").hide();
                        $("#pokaziTretoPoluvreme").hide();
                        $("#pokaziCetvrtoPoluvreme").hide();

                        if (najdiId < "3") {
                            $("#pokaziKonecen").show();
                            $("#pokaziPrvoVtoroPoluvreme").show();
                        } else if (najdiId < "4") {
                            $("#pokaziKonecen").show();
                            $("#pokaziPrvoVtoroPoluvreme").show();
                            $("#pokaziTretoPoluvreme").show();
                        } else if (najdiId < "5") {
                            $("#pokaziKonecen").show();
                            $("#pokaziPrvoVtoroPoluvreme").show();
                            $("#pokaziTretoPoluvreme").show();
                            $("#pokaziCetvrtoPoluvreme").show();
                        } else {
                            $("#pokaziNaslovZaRezultat").show();
                            $("#pokaziKonecen").hide();
                            $("#pokaziPrvoVtoroPoluvreme").hide();
                            $("#pokaziTretoPoluvreme").hide();
                            $("#pokaziCetvrtoPoluvreme").hide();
                        }
                    })
                }
            }
        }
    });
}
$(document).ready(function () {
    getDataSport("sport", { "table_name": "sport" });
    getDataLeagues("leagues", { "table_name": "leagues" });
    getDataDomakin("teams", { "table_name": "teams" });
    getDataGostin("teams", { "table_name": "teams" });
});

$(document).on('click', '#addButton', function () {
    $("#istiTimoviDomakin").hide()
    $("#istiTimoviGostin").hide()
    $("#dangerLiga").hide()
    $("#dangerDomakin").hide()
    $("#dangerKonecenDomakin").hide()
    $("#dangerKonecenGostin").hide()
    $("#dangerGostin").hide()
    $("#dangerDatum").hide()
    $("#dangerVreme").hide()
    $("#dangerSport").hide()
    $("#maxKonecenHome").hide()
    $("#maxKonecenAway").hide()
    $("#maxPrvoHome").hide()
    $("#maxPrvoAway").hide()
    $("#maxVtoroHome").hide()
    $("#maxVtoroAway").hide()
    $("#maxTretoHome").hide()
    $("#maxTretoAway").hide()
    $("#maxCetvrtoHome").hide()
    $("#maxCetvrtoAway").hide()
    $("#zadolzitelnoLiga").show()
    $("#zadolzitelnoDomakin").show()
    $("#zadolzitelnoKonecenDomakin").show()
    $("#zadolzitelnoKonecenGostin").show()
    $("#zadolzitelnoGostin").show()
    $("#zadolzitelnoDatum").show()
    $("#zadolzitelnoVreme").show()
    $("#zadolzitelnoSport").show()

    $(document).on("input", "#addKonecenHome,#addKonecenAway,#addPrvoPoluvremeHome,#addPrvoPoluvremeAway,#addVtoroPoluvremeHome,#addVtoroPoluvremeAway,#addTretoPoluvremeHome,#addTretoPoluvremeAway,#addCetvrtoPoluvremeHome,#addCetvrtoPoluvremeAway", function () {
        this.value = this.value.replace(/\D/g, '');
    });

    $("#pokaziKonecen").hide()
    $("#pokaziPrvoVtoroPoluvreme").hide();
    $("#pokaziTretoPoluvreme").hide();
    $("#pokaziCetvrtoPoluvreme").hide();

});

$(document).on('click', '#submit', function () {
    $("#istiTimoviDomakin").hide()
    $("#istiTimoviGostin").hide()
    $("#dangerLiga").hide()
    $("#dangerDomakin").hide()
    $("#dangerKonecenDomakin").hide()
    $("#dangerKonecenGostin").hide()
    $("#dangerGostin").hide()
    $("#dangerDatum").hide()
    $("#dangerVreme").hide()
    $("#dangerSport").hide()
    $("#maxKonecenHome").hide()
    $("#maxKonecenAway").hide()
    $("#maxPrvoHome").hide()
    $("#maxPrvoAway").hide()
    $("#maxVtoroHome").hide()
    $("#maxVtoroAway").hide()
    $("#maxTretoHome").hide()
    $("#maxTretoAway").hide()
    $("#maxCetvrtoHome").hide()
    $("#maxCetvrtoAway").hide()
    $("#zadolzitelnoLiga").show()
    $("#zadolzitelnoDomakin").show()
    $("#zadolzitelnoKonecenDomakin").show()
    $("#zadolzitelnoKonecenGostin").show()
    $("#zadolzitelnoGostin").show()
    $("#zadolzitelnoDatum").show()
    $("#zadolzitelnoVreme").show()
    $("#zadolzitelnoSport").show()
    $("#pokaziKonecen").hide()
    $("#pokaziPrvoVtoroPoluvreme").hide();
    $("#pokaziTretoPoluvreme").hide();
    $("#pokaziCetvrtoPoluvreme").hide();

    let addLeagueSelect = $("#leagueSelect").find(":selected").val();
    let addDomakinSelect = $("#domakinSelect").find(":selected").val();
    let addKonecenHome = $("#addKonecenHome").val();
    let addKonecenAway = $("#addKonecenAway").val();
    let addPrvoPoluvremeHome = $("#addPrvoPoluvremeHome").val();
    let addPrvoPoluvremeAway = $("#addPrvoPoluvremeAway").val();
    let addVtoroPoluvremeHome = $("#addVtoroPoluvremeHome").val();
    let addVtoroPoluvremeAway = $("#addVtoroPoluvremeAway").val();
    let addTretoPoluvremeHome = $("#addTretoPoluvremeHome").val();
    let addTretoPoluvremeAway = $("#addTretoPoluvremeAway").val();
    let addCetvrtoPoluvremeHome = $("#addCetvrtoPoluvremeHome").val();
    let addCetvrtoPoluvremeAway = $("#addCetvrtoPoluvremeAway").val();
    let addGostinSelect = $("#gostinSelect").find(":selected").val();
    let addDatum = $("#addDatum").val();
    let addVreme = $("#addVreme").val();
    let addSportNatprevaruvanje = $("#natprevaruvanjeSport").find(":selected").val();

    let objResults = [{ "league": addLeagueSelect, "home": addDomakinSelect, "prvoPoluvremeHome": addPrvoPoluvremeHome, "vtoroPoluvremeHome": addVtoroPoluvremeHome, "tretoPoluvremeHome": addTretoPoluvremeHome, "cetvrtoPoluvremeHome": addCetvrtoPoluvremeHome, "konecenHome": addKonecenHome, "konecenAway": addKonecenAway, "prvoPoluvremeAway": addPrvoPoluvremeAway, "vtoroPoluvremeAway": addVtoroPoluvremeAway, "tretoPoluvremeAway": addTretoPoluvremeAway, "cetvrtoPoluvremeAway": addCetvrtoPoluvremeAway, "away": addGostinSelect, "datum": addDatum, "vreme": addVreme, "sport": addSportNatprevaruvanje, "table_name": "results" }];
    console.log(objResults)

    if (addLeagueSelect != "" && addDomakinSelect != "" && (addKonecenHome != "" && addKonecenHome.length < 4) && (addKonecenAway != "" && addKonecenAway.length < 4) && addPrvoPoluvremeHome.length < 4 && addPrvoPoluvremeAway.length < 4 && addVtoroPoluvremeHome.length < 4 && addVtoroPoluvremeAway.length < 4 && addTretoPoluvremeHome.length < 4 && addTretoPoluvremeAway.length < 4 && addCetvrtoPoluvremeHome.length < 4 && addCetvrtoPoluvremeAway.length < 4 && addGostinSelect != "" && addDatum != "" && addVreme != "" && addSportNatprevaruvanje != "" && addDomakinSelect != addGostinSelect) {
        postData("insert", objResults)
    } else {
        alert("Неуспешно додадовте. Ве молам пополнете правилно!!!");

        $("#zadolzitelnoLiga").hide()
        $("#zadolzitelnoDomakin").hide()
        $("#zadolzitelnoGostin").hide()
        $("#zadolzitelnoDatum").hide()
        $("#zadolzitelnoVreme").hide()
        $("#zadolzitelnoSport").hide()
        $("#zadolzitelnoPrvoPoluvremeHome").hide()
        $("#zadolzitelnoPrvoPoluvremeAway").hide()
        $("#zadolzitelnoVtoroPoluvremeHome").hide()
        $("#zadolzitelnoVtoroPoluvremeAway").hide()
        $("#zadolzitelnoTretoPoluvremeHome").hide()
        $("#zadolzitelnoTretoPoluvremeAway").hide()
        $("#zadolzitelnoCetvrtoPoluvremeHome").hide()
        $("#zadolzitelnoCetvrtoPoluvremeAway").hide();
        $("#istiTimoviDomakin").hide();
        $("#istiTimoviGostin").hide();

        if (addLeagueSelect == "") {
            $("#dangerLiga").show()
        } else {
            $("#dangerLiga").hide()
        }

        if (addDomakinSelect == "") {
            $("#dangerDomakin").show()
        } else {
            $("#dangerDomakin").hide()
        }

        if (addKonecenHome == "") {
            $("#dangerKonecenDomakin").show();
            $("#zadolzitelnoKonecenDomakin").hide()
        } else {
            $("#dangerKonecenDomakin").hide()
        }

        if (addKonecenHome.length >= 4) {
            $("#maxKonecenHome").show();
            $("#zadolzitelnoKonecenDomakin").hide()
        } else {
            $("#maxKonecenHome").hide()
        }

        if (addKonecenAway == "") {
            $("#dangerKonecenGostin").show()
            $("#zadolzitelnoKonecenGostin").hide()
        } else {
            $("#dangerKonecenGostin").hide()
        }

        if (addKonecenAway.length >= 4) {
            $("#maxKonecenAway").show()
            $("#zadolzitelnoKonecenGostin").hide()
        } else {
            $("#maxKonecenAway").hide()
        }

        if (addPrvoPoluvremeHome.length >= 4) {
            $("#maxPrvoHome").show()
            $("#zadolzitelnoPrvoPoluvremeHome").hide()
        } else {
            $("#maxPrvoHome").hide()
            $("#zadolzitelnoPrvoPoluvremeHome").show()
        }

        if (addPrvoPoluvremeAway.length >= 4) {
            $("#maxPrvoAway").show()
            $("#zadolzitelnoPrvoPoluvremeAway").hide()
        } else {
            $("#maxPrvoAway").hide()
            $("#zadolzitelnoPrvoPoluvremeAway").show()
        }

        if (addVtoroPoluvremeHome.length >= 4) {
            $("#maxVtoroHome").show()
            $("#zadolzitelnoVtoroPoluvremeHome").hide()
        } else {
            $("#maxVtoroHome").hide()
            $("#zadolzitelnoVtoroPoluvremeHome").show()
        }

        if (addVtoroPoluvremeAway.length >= 4) {
            $("#maxVtoroAway").show()
            $("#zadolzitelnoVtoroPoluvremeAway").hide()
        } else {
            $("#maxVtoroAway").hide()
            $("#zadolzitelnoVtoroPoluvremeAway").show()
        }

        if (addTretoPoluvremeHome.length >= 4) {
            $("#maxTretoHome").show()
            $("#zadolzitelnoTretoPoluvremeHome").hide()
        } else {
            $("#maxTretoHome").hide()
            $("#zadolzitelnoTretoPoluvremeHome").show()
        }

        if (addTretoPoluvremeAway.length >= 4) {
            $("#maxTretoAway").show()
            $("#zadolzitelnoTretoPoluvremeAway").hide()
        } else {
            $("#maxTretoAway").hide()
            $("#zadolzitelnoTretoPoluvremeAway").show()
        }

        if (addCetvrtoPoluvremeHome.length >= 4) {
            $("#maxCetvrtoHome").show()
            $("#zadolzitelnoCetvrtoPoluvremeHome").hide()
        } else {
            $("#maxCetvrtoHome").hide()
            $("#zadolzitelnoCetvrtoPoluvremeHome").show()
        }

        if (addCetvrtoPoluvremeAway.length >= 4) {
            $("#maxCetvrtoAway").show()
            $("#zadolzitelnoCetvrtoPoluvremeAway").hide()
        } else {
            $("#maxCetvrtoAway").hide()
            $("#zadolzitelnoCetvrtoPoluvremeAway").show()
        }

        if (addGostinSelect == "") {
            $("#dangerGostin").show()
        } else {
            $("#dangerGostin").hide()
        }

        if (addDatum == "") {
            $("#dangerDatum").show()
        } else {
            $("#dangerDatum").hide()
        }

        if (addVreme == "") {
            $("#dangerVreme").show()
        } else {
            $("#dangerVreme").hide()
        }

        if (addSportNatprevaruvanje == "") {
            $("#dangerSport").show()
        } else {
            $("#dangerSport").hide()
        }

        if (addDomakinSelect != "" && addGostinSelect != "") {
            if (addDomakinSelect === addGostinSelect) {
                $("#istiTimoviDomakin").show()
                $("#istiTimoviGostin").show()
            } else {
                $("#istiTimoviDomakin").hide()
                $("#istiTimoviGostin").hide()
            }
        }

    }
})

//////////////------------DELETE----------------------//////////////////////////////////////////////////
$(document).on('click', '[id^="btnDelete-"]', function () {
    $(".modal").find('button[id^="deleteResults-"]').attr("id", "deleteResults-" + $(this).data('id'));
    var currentRowDelete = $(this).closest("tr");
    var deleteCol3 = currentRowDelete.find("td:eq(3)").text();
    var deleteCol4 = currentRowDelete.find("td:eq(6)").text();
    var deleteDatum = currentRowDelete.find("td:eq(8)").text();
    var deleteVreme = currentRowDelete.find("td:eq(9)").text();
    var deleteData = deleteCol3 + " и " + deleteCol4;
    $("#deletePrashalnik").html(deleteData)
    $("#deleteDatum").html(deleteDatum)
    $("#deleteVreme").html(deleteVreme)
});
$(document).on('click', '[id^="deleteResults-"]', function () {
    let id_html = $(this).attr("id");
    let pk_value = id_html.split("-")[1];

    if (pk_value.length > 0) {
        alert("Успешно избришавте");
        postData("delete", [{ "pk_id": pk_value, "table_name": "results" }]);
        window.location.href = "../view/results.html";
    } else {
        alert("Неуспешно избришавте");
    }
});

///////////////////////-----------UPDATE-----------/////////////////////////////////////////////////

$(document).on('click', '[id^="btnUpdate-"]', function () {
    $("#dangerKonecenDomakinUpdate").hide()
    $("#dangerKonecenGostinUpdate").hide()
    $("#maxKonecenHomeUpdate").hide()
    $("#maxKonecenAwayUpdate").hide()
    $("#maxPrvoHomeUpdate").hide()
    $("#maxPrvoAwayUpdate").hide()
    $("#maxVtoroHomeUpdate").hide()
    $("#maxVtoroAwayUpdate").hide()
    $("#maxTretoHomeUpdate").hide()
    $("#maxTretoAwayUpdate").hide()
    $("#maxCetvrtoHomeUpdate").hide()
    $("#maxCetvrtoAwayUpdate").hide()
    $("#zadolzitelnoKonecenDomakinUpdate").show()
    $("#zadolzitelnoKonecenGostinUpdate").show()
    $(".istiTimoviUpdate").hide();
    $(".modal").find('button[id^="editResults-"]').attr("id", "editResults-" + $(this).data('id'));

    getDataLeaguesUpdate("leagues", { "table_name": "leagues" });
    getDataDomakinUpdate("teams", { "table_name": "teams" });
    getDataGostinUpdate("teams", { "table_name": "teams" });
    getDataSportUpdate("sport", { "table_name": "sport" });
    getResultsUpdate("results", { "table_name": "results" });

    var currentRow = $(this).closest("tr");
    var kol2LigaId = currentRow.find("td:eq(1)").text();
    var kol3Liga = currentRow.find("td:eq(2)").text();
    var kol4Domakin = currentRow.find("td:eq(3)").text();
    var kol5DomakinId = currentRow.find("td:eq(4)").text();
    var kol7Gostin = currentRow.find("td:eq(6)").text();
    var kol8GostinId = currentRow.find("td:eq(7)").text();
    var kol9Datum = currentRow.find("td:eq(8)").text();
    var kolVreme = currentRow.find("td:eq(9)").text();
    var kol11Natprevaruvanje = currentRow.find("td:eq(10)").text();
    var colPoluvreminja = currentRow.find("td:eq(11)").text();
    var kol12SportId = currentRow.find("td:eq(12)").text();
    var kolprvoPoluvremeDomakin = currentRow.find("td:eq(13)").text();
    var kolvtoroPoluvremeDomakin = currentRow.find("td:eq(14)").text();
    var koltretoPoluvremeDomakin = currentRow.find("td:eq(15)").text();
    var kolcetvrtoPoluvremeDomakin = currentRow.find("td:eq(16)").text();
    var kolkonecenDomakin = currentRow.find("td:eq(17)").text();
    var kolkonecenGostin = currentRow.find("td:eq(18)").text();
    var kolprvoPoluvremeGostin = currentRow.find("td:eq(19)").text();
    var kolvtoroPoluvremeGostin = currentRow.find("td:eq(20)").text();
    var koltretoPoluvremeGostin = currentRow.find("td:eq(21)").text();
    var kolcetvrtoPoluvremeGostin = currentRow.find("td:eq(22)").text();

    var data = kol4Domakin + " vs " + kol7Gostin;
    var dataLeagues = kol3Liga + "\n";
    var dataHome = kol4Domakin + "\n";
    var dataAway = kol7Gostin + "\n";
    var dataNatprevaruvanje = kol11Natprevaruvanje + "\n";

    $("#naslovIme").html(data)

    $(document).ready(function () {
        $(this).find("input[id^=konecenHomeUpdate] ,textarea").each(function () {
            if (!$(this).val()) {
                $(this).attr("placeholder", kolkonecenDomakin);
            }
        });
        $(this).find("input[id^=KonecenAwayUpdate] ,textarea").each(function () {
            if (!$(this).val()) {
                $(this).attr("placeholder", kolkonecenGostin);
            }
        });
        $(this).find("input[id^=PrvoPoluvremeHomeUpdate] ,textarea").each(function () {
            if (!$(this).val()) {
                $(this).attr("placeholder", kolprvoPoluvremeDomakin);
            }
        });
        $(this).find("input[id^=VtoroPoluvremeHomeUpdate] ,textarea").each(function () {
            if (!$(this).val()) {
                $(this).attr("placeholder", kolvtoroPoluvremeDomakin);
            }
        });
        $(this).find("input[id^=TretoPoluvremeHomeUpdate] ,textarea").each(function () {
            if (!$(this).val()) {
                $(this).attr("placeholder", koltretoPoluvremeDomakin);
            }
        });
        $(this).find("input[id^=CetvrtoPoluvremeHomeUpdate] ,textarea").each(function () {
            if (!$(this).val()) {
                $(this).attr("placeholder", kolcetvrtoPoluvremeDomakin);
            }
        });
        $(this).find("input[id^=PrvoPoluvremeAwayUpdate] ,textarea").each(function () {
            if (!$(this).val()) {
                $(this).attr("placeholder", kolprvoPoluvremeGostin);
            }
        });
        $(this).find("input[id^=VtoroPoluvremeAwayUpdate] ,textarea").each(function () {
            if (!$(this).val()) {
                $(this).attr("placeholder", kolvtoroPoluvremeGostin);
            }
        });
        $(this).find("input[id^=TretoPoluvremeAwayUpdate] ,textarea").each(function () {
            if (!$(this).val()) {
                $(this).attr("placeholder", koltretoPoluvremeGostin);
            }
        });
        $(this).find("input[id^=CetvrtoPoluvremeAwayUpdate] ,textarea").each(function () {
            if (!$(this).val()) {
                $(this).attr("placeholder", kolcetvrtoPoluvremeGostin);
            }
        });
    });


    $(document).on("input", "#konecenHomeUpdate,#KonecenAwayUpdate,#PrvoPoluvremeHomeUpdate,#PrvoPoluvremeAwayUpdate,#VtoroPoluvremeHomeUpdate,#VtoroPoluvremeAwayUpdate,#TretoPoluvremeHomeUpdate,#TretoPoluvremeAwayUpdate,#CetvrtoPoluvremeHomeUpdate,#CetvrtoPoluvremeAwayUpdate", function () {
        this.value = this.value.replace(/\D/g, '');
    });

    ///LIGA/////
    function getDataLeaguesUpdate(actionLeaguesUpdate, post_dataLeaguesUpdate) {
        $.ajax({
            type: 'POST',
            url: '../model/select.php',
            data: JSON.stringify(post_dataLeaguesUpdate),
            success: function (data) {
                let jsonLeaguesUpdate = jQuery.parseJSON(data);
                let jsonLLeaguesUpdate = jsonLeaguesUpdate.length;
                let selectLeaguesUpdate = '<option  value=' + kol2LigaId + '>' + dataLeagues + '</option > ';
                if (actionLeaguesUpdate) {
                    for (let i1 = 0; i1 < jsonLLeaguesUpdate; i1++) {
                        if (jsonLeaguesUpdate[i1].id != null) {
                            selectLeaguesUpdate += '<option  value=' + jsonLeaguesUpdate[i1].id + '>' + jsonLeaguesUpdate[i1].original_name + '</option > ';
                        }
                        $("#leagueSelectUpdate").html(selectLeaguesUpdate);
                    }
                }
            }
        });
    }

    ////domakin//////
    function getDataDomakinUpdate(actionDomakinUpdate, post_dataDomakinUpdate) {
        $.ajax({
            type: 'POST',
            url: '../model/select.php',
            data: JSON.stringify(post_dataDomakinUpdate),
            success: function (data) {
                let jsonDomakinUpdate = jQuery.parseJSON(data);
                let jsonLDomakinUpdate = jsonDomakinUpdate.length;
                selectDomakinUpdate = '<option  value=' + kol5DomakinId + '>' + dataHome + '</option > ';
                if (actionDomakinUpdate) {
                    for (let i1 = 0; i1 < jsonLDomakinUpdate; i1++) {
                        if (jsonDomakinUpdate[i1].id != null) {
                            selectDomakinUpdate += '<option  value=' + jsonDomakinUpdate[i1].id + '>' + jsonDomakinUpdate[i1].original_name + '</option>';
                        }
                        $("#domakinSelectUpdate").html(selectDomakinUpdate);
                        $("#domakinSelectUpdateHide").html(selectDomakinUpdate);
                    }
                }
            }
        });
    }

    ///gostin////
    function getDataGostinUpdate(actionGostinUpdate, post_dataGostinUpdate) {
        $.ajax({
            type: 'POST',
            url: '../model/select.php',
            data: JSON.stringify(post_dataGostinUpdate),
            success: function (data) {
                let jsonGostinUpdate = jQuery.parseJSON(data);
                let jsonLGostinUpdate = jsonGostinUpdate.length;
                selectGostinUpdate = '<option  value=' + kol8GostinId + '>' + dataAway + '</option > ';
                if (actionGostinUpdate) {
                    for (let i1 = 0; i1 < jsonLGostinUpdate; i1++) {
                        if (jsonGostinUpdate[i1].id != null) {
                            selectGostinUpdate += '<option  value=' + jsonGostinUpdate[i1].id + '>' + jsonGostinUpdate[i1].original_name + '</option>';
                        }
                        $("#gostinSelectUpdate").html(selectGostinUpdate);
                        $("#gostinSelectUpdateHide").html(selectGostinUpdate);
                    }
                }
            }
        });
    }

    ///sport///
    function getDataSportUpdate(actionSportUpdate, post_dataSportUpdate) {
        $.ajax({
            type: 'POST',
            url: '../model/select.php',
            data: JSON.stringify(post_dataSportUpdate),
            success: function (data) {
                let jsonSportUpdate = jQuery.parseJSON(data);
                let jsonLSportUpdate = jsonSportUpdate.length;
                selectSportUpdate = '<option id=' + colPoluvreminja + ' value=' + kol12SportId + '>' + dataNatprevaruvanje + '</option > ';
                //console.log("aj pechati selekt sporto", selectSportUpdate)
                if (actionSportUpdate) {
                    for (let i = 0; i < jsonLSportUpdate; i++) {
                        if (jsonSportUpdate[i].sportID != null) {

                            selectSportUpdate += '<option id=' + jsonSportUpdate[i].poluvreminja + ' value=' + jsonSportUpdate[i].sportID + ' >' + jsonSportUpdate[i].natprevaruvanje + '</option>';
                        }
                        $("#natprevaruvanjeSportUpdate").html(selectSportUpdate);

                        $("#pokaziKonecenUpdate").hide();
                        $("#pokaziPrvoVtoroPoluvremeUpdate").hide();
                        $("#pokaziTretoPoluvremeUpdate").hide();
                        $("#pokaziCetvrtoPoluvremeUpdate").hide();

                        if (colPoluvreminja < "3") {
                            $("#pokaziKonecenUpdate").show();
                            $("#pokaziPrvoVtoroPoluvremeUpdate").show();
                        } else if (colPoluvreminja < "4") {
                            $("#pokaziKonecenUpdate").show();
                            $("#pokaziPrvoVtoroPoluvremeUpdate").show();
                            $("#pokaziTretoPoluvremeUpdate").show();
                        } else if (colPoluvreminja < "5") {
                            $("#pokaziKonecenUpdate").show();
                            $("#pokaziPrvoVtoroPoluvremeUpdate").show();
                            $("#pokaziTretoPoluvremeUpdate").show();
                            $("#pokaziCetvrtoPoluvremeUpdate").show();
                        } else {
                            $("#pokaziKonecenUpdate").hide();
                            $("#pokaziPrvoVtoroPoluvremeUpdate").hide();
                            $("#pokaziTretoPoluvremeUpdate").hide();
                            $("#pokaziCetvrtoPoluvremeUpdate").hide();
                        }

                        $(document).on('click', "#natprevaruvanjeSportUpdate", function () {
                            $("#pokaziKonecenUpdate").hide();
                            $("#pokaziPrvoVtoroPoluvremeUpdate").hide();
                            $("#pokaziTretoPoluvremeUpdate").hide();
                            $("#pokaziCetvrtoPoluvremeUpdate").hide();


                            let najdiIdUpdate = $("#natprevaruvanjeSportUpdate").find(":selected").attr("id")

                            if (najdiIdUpdate < "3") {
                                $("#pokaziKonecenUpdate").show();
                                $("#pokaziPrvoVtoroPoluvremeUpdate").show();
                            } else if (najdiIdUpdate < "4") {
                                $("#pokaziKonecenUpdate").show();
                                $("#pokaziPrvoVtoroPoluvremeUpdate").show();
                                $("#pokaziTretoPoluvremeUpdate").show();
                            } else if (najdiIdUpdate < "5") {
                                $("#pokaziKonecenUpdate").show();
                                $("#pokaziPrvoVtoroPoluvremeUpdate").show();
                                $("#pokaziTretoPoluvremeUpdate").show();
                                $("#pokaziCetvrtoPoluvremeUpdate").show();
                            } else {
                                $("#pokaziNaslovZaRezultatUpdate").show();
                                $("#pokaziKonecenUpdate").hide();
                                $("#pokaziPrvoVtoroPoluvremeUpdate").hide();
                                $("#pokaziTretoPoluvremeUpdate").hide();
                                $("#pokaziCetvrtoPoluvremeUpdate").hide();
                            }
                        })
                    }
                }
            }
        });
    };

    //////Results za data i vreme
    function getResultsUpdate() {
        $.ajax({
            type: 'POST',
            url: '../model/select.php',
            success: function () {
                let datumResults = '<input type="date" class="form-control" id="datumUpdate" name="datumUpdate" value=' + kol9Datum + '>';
                let vremeResults = '<input type="time" class="form-control" id="vremeUpdate" name = "vremeUpdate" value=' + kolVreme + '> ';
                $("#datumDivUpdate").html(datumResults);
                $("#vremeDivUpdate").html(vremeResults);
            }
        });
    }
});

$(document).on('click', '[id^="editResults-"]', function () {
    $("#dangerKonecenDomakinUpdate").hide()
    $("#dangerKonecenGostinUpdate").hide()
    $("#maxKonecenHomeUpdate").hide()
    $("#maxKonecenAwayUpdate").hide()
    $("#maxPrvoHomeUpdate").hide()
    $("#maxPrvoAwayUpdate").hide()
    $("#maxVtoroHomeUpdate").hide()
    $("#maxVtoroAwayUpdate").hide()
    $("#maxTretoHomeUpdate").hide()
    $("#maxTretoAwayUpdate").hide()
    $("#maxCetvrtoHomeUpdate").hide()
    $("#maxCetvrtoAwayUpdate").hide()
    $("#zadolzitelnoKonecenDomakinUpdate").show()
    $("#zadolzitelnoKonecenGostinUpdate").show()
    $(".istiTimoviUpdate").hide();
    let id_html = $(this).attr("id");
    let pk_value_update = id_html.split("-")[1];
    let ligaUpdate = $("#leagueSelectUpdate").find(":selected").val();
    let domakinUpdate = $("#domakinSelectUpdate").find(":selected").val();
    let domakinUpdateHide = $("#domakinSelectUpdateHide").find(":selected").val();
    let gostinUpdate = $("#gostinSelectUpdate").find(":selected").val();
    let gostinUpdateHide = $("#gostinSelectUpdateHide").find(":selected").val();
    let datumUpdate = $(".modal").find('input[id="datumUpdate"]').val();
    let vremeUpdate = $(".modal").find('input[id="vremeUpdate"]').val();
    let sportUpdate = $("#natprevaruvanjeSportUpdate").find(":selected").val();
    let konecenHomeUpdate = $(".modal").find('input[id="konecenHomeUpdate"]').val();
    let konecenAwayUpdate = $(".modal").find('input[id="KonecenAwayUpdate"]').val();
    let prvoPoluvremeHomeUpdate = $(".modal").find('input[id="PrvoPoluvremeHomeUpdate"]').val();
    let prvoPoluvremeAwayUpdate = $(".modal").find('input[id="PrvoPoluvremeAwayUpdate"]').val();
    let vtoroPoluvremeHomeUpdate = $(".modal").find('input[id="VtoroPoluvremeHomeUpdate"]').val();
    let vtoroPoluvremeAwayUpdate = $(".modal").find('input[id="VtoroPoluvremeAwayUpdate"]').val();
    let tretoPoluvremeHomeUpdate = $(".modal").find('input[id="TretoPoluvremeHomeUpdate"]').val();
    let tretoPoluvremeAwayUpdate = $(".modal").find('input[id="TretoPoluvremeAwayUpdate"]').val();
    let cetvrtoPoluvremeHomeUpdate = $(".modal").find('input[id="CetvrtoPoluvremeHomeUpdate"]').val();
    let cetvrtoPoluvremeAwayUpdate = $(".modal").find('input[id="CetvrtoPoluvremeAwayUpdate"]').val();

    let objResultsUpdate = [{ "league": ligaUpdate, "home": domakinUpdate, "homeHide": domakinUpdateHide, "prvoPoluvremeHome": prvoPoluvremeHomeUpdate, "vtoroPoluvremeHome": vtoroPoluvremeHomeUpdate, "tretoPoluvremeHome": tretoPoluvremeHomeUpdate, "cetvrtoPoluvremeHome": cetvrtoPoluvremeHomeUpdate, "konecenHome": konecenHomeUpdate, "konecenAway": konecenAwayUpdate, "prvoPoluvremeAway": prvoPoluvremeAwayUpdate, "vtoroPoluvremeAway": vtoroPoluvremeAwayUpdate, "tretoPoluvremeAway": tretoPoluvremeAwayUpdate, "cetvrtoPoluvremeAway": cetvrtoPoluvremeAwayUpdate, "away": gostinUpdate, "awayHide": gostinUpdateHide, "datum": datumUpdate, "vreme": vremeUpdate, "sport": sportUpdate, "pk_id": pk_value_update, "table_name": "results" }]

    if (ligaUpdate != "" && domakinUpdate != "" && (konecenHomeUpdate != "" && konecenHomeUpdate.length < 4) && (konecenAwayUpdate != "" && konecenAwayUpdate.length < 4) && prvoPoluvremeHomeUpdate.length < 4 && prvoPoluvremeAwayUpdate.length < 4 && vtoroPoluvremeHomeUpdate.length < 4 && vtoroPoluvremeAwayUpdate.length < 4 && tretoPoluvremeHomeUpdate.length < 4 && tretoPoluvremeAwayUpdate.length < 4 && cetvrtoPoluvremeHomeUpdate.length < 4 && cetvrtoPoluvremeAwayUpdate.length < 4 && gostinUpdate != "" && datumUpdate != "" && vremeUpdate != "" && sportUpdate != "" && domakinUpdate != gostinUpdate) {
        postData("update", objResultsUpdate);
    } else {
        console.log(objResultsUpdate)
        alert("Неуспешно променивте. Обидете се повторно!!!");

        $("#zadolzitelnoPrvoPoluvremeHomeUpdate").hide()
        $("#zadolzitelnoPrvoPoluvremeAwayUpdate").hide()
        $("#zadolzitelnoVtoroPoluvremeHomeUpdate").hide()
        $("#zadolzitelnoVtoroPoluvremeAwayUpdate").hide()
        $("#zadolzitelnoTretoPoluvremeHomeUpdate").hide()
        $("#zadolzitelnoTretoPoluvremeAwayUpdate").hide()
        $("#zadolzitelnoCetvrtoPoluvremeHomeUpdate").hide()
        $("#zadolzitelnoCetvrtoPoluvremeAwayUpdate").hide()
        $(".istiTimoviUpdate").hide();

        if (konecenHomeUpdate == "") {
            $("#dangerKonecenDomakinUpdate").show();
            $("#zadolzitelnoKonecenDomakinUpdate").hide()
        } else {
            $("#dangerKonecenDomakinUpdate").hide()
        }

        if (konecenHomeUpdate.length >= 4) {
            $("#maxKonecenHomeUpdate").show();
            $("#zadolzitelnoKonecenDomakinUpdate").hide()
        } else {
            $("#maxKonecenHomeUpdate").hide()
        }

        if (konecenAwayUpdate == "") {
            $("#dangerKonecenGostinUpdate").show()
            $("#zadolzitelnoKonecenGostinUpdate").hide()
        } else {
            $("#dangerKonecenGostinUpdate").hide()
        }

        if (konecenAwayUpdate.length >= 4) {
            $("#maxKonecenAwayUpdate").show()
            $("#zadolzitelnoKonecenGostinUpdate").hide()
        } else {
            $("#maxKonecenAwayUpdate").hide()
        }

        if (prvoPoluvremeHomeUpdate.length >= 4) {
            $("#maxPrvoHomeUpdate").show()
            $("#zadolzitelnoPrvoPoluvremeHomeUpdate").hide()
        } else {
            $("#maxPrvoHomeUpdate").hide()
            $("#zadolzitelnoPrvoPoluvremeHomeUpdate").show()
        }

        if (prvoPoluvremeAwayUpdate.length >= 4) {
            $("#maxPrvoAwayUpdate").show()
            $("#zadolzitelnoPrvoPoluvremeAwayUpdate").hide()
        } else {
            $("#maxPrvoAwayUpdate").hide()
            $("#zadolzitelnoPrvoPoluvremeAwayUpdate").show()
        }

        if (vtoroPoluvremeHomeUpdate.length >= 4) {
            $("#maxVtoroHomeUpdate").show()
            $("#zadolzitelnoVtoroPoluvremeHomeUpdate").hide()
        } else {
            $("#maxVtoroHomeUpdate").hide()
            $("#zadolzitelnoVtoroPoluvremeHomeUpdate").show()
        }

        if (vtoroPoluvremeAwayUpdate.length >= 4) {
            $("#maxVtoroAwayUpdate").show()
            $("#zadolzitelnoVtoroPoluvremeAwayUpdate").hide()
        } else {
            $("#maxVtoroAwayUpdate").hide()
            $("#zadolzitelnoVtoroPoluvremeAwayUpdate").show()
        }

        if (tretoPoluvremeHomeUpdate.length >= 4) {
            $("#maxTretoHomeUpdate").show()
            $("#zadolzitelnoTretoPoluvremeHomeUpdate").hide()
        } else {
            $("#maxTretoHomeUpdate").hide()
            $("#zadolzitelnoTretoPoluvremeHomeUpdate").show()
        }

        if (tretoPoluvremeAwayUpdate.length >= 4) {
            $("#maxTretoAwayUpdate").show()
            $("#zadolzitelnoTretoPoluvremeAwayUpdate").hide()
        } else {
            $("#maxTretoAwayUpdate").hide()
            $("#zadolzitelnoTretoPoluvremeAwayUpdate").show()
        }

        if (cetvrtoPoluvremeHomeUpdate.length >= 4) {
            $("#maxCetvrtoHomeUpdate").show()
            $("#zadolzitelnoCetvrtoPoluvremeHomeUpdate").hide()
        } else {
            $("#maxCetvrtoHomeUpdate").hide()
            $("#zadolzitelnoCetvrtoPoluvremeHomeUpdate").show()
        }

        if (cetvrtoPoluvremeAwayUpdate.length >= 4) {
            $("#maxCetvrtoAwayUpdate").show()
            $("#zadolzitelnoCetvrtoPoluvremeAwayUpdate").hide()
        } else {
            $("#maxCetvrtoAwayUpdate").hide()
            $("#zadolzitelnoCetvrtoPoluvremeAwayUpdate").show()
        }

        if (domakinUpdate != "" && gostinUpdate != "") {
            if (domakinUpdate === gostinUpdate) {
                $(".istiTimoviUpdate").show();
            } else {
                $(".istiTimoviUpdate").hide();

            }
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
