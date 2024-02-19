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
    window.location.href = "sport.html";
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
                            '<td>' + json[i].priority_default + '</td>' +
                            '<td>' + json[i].priority_custom + '</td>' +
                            '<td>' + json[i].template + '</td>' +
                            '<td>' + json[i].number_of_sets + '</td>' +
                            '<td>' + json[i].sport + '</td>' +
                            '<td>' + json[i].code_range + '</td>' +
                            '<td>' + json[i].subtitle + '</td>' +
                            '<td>' + json[i].region_id + '</td>' +
                            '<td>' + json[i].zone_id + '</td>' +
                            '<td>' + json[i].statistics_code + '</td>' +
                            '<td>' + json[i].statistics_group + '</td>' +
                            '<td>' + json[i].statistics_name_new + '</td>' +
                            '<td>' + json[i].percent + '</td>' +
                            '<td>' + json[i].percent_ggng + '</td>' +
                            '<td>' + json[i].odds_group + '</td>' +
                            '<td>' + json[i].efID + '</td>' +
                            '<td>' + json[i].apiFoot_id + '</td>' +
                            '<td>' + json[i].results + '</td>' +
                            '<td>' + json[i].extra_type_template_id + '</td>' +
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
    getData("leagues", { "table_name": "leagues" });
});
///////////////////////////////POSTIRANJE///////////////////////////////////////////////////////////
function postData(file, podatociOdForm) {
    $.ajax({
        type: 'POST',
        url: '../model/' + file + '.php',
        data: JSON.stringify(podatociOdForm),
        success: function (data) {
            if (file == "insert") {
                if (data === "uspesno") {
                    //console.log(data)
                    alert("Успешно внесивте!!!")
                    window.location.href = "../view/leagues.html"
                } else {
                    alert("Записот со исто оригинално име, спорт, регион ид постои !!! Ве молам пополнете правилно!!!")///VAKA ZNAM DA GO NAJDAM DUPLIKATOT
                    //console.log(data)
                    $("#alertInfo").show();
                }
            } else if (file === "update") {
                if (data == "success") {
                    //console.log(data)
                    alert("Успешно променивте!!!")
                    window.location.href = "../view/leagues.html"
                } else {
                    //console.log(data)
                    //alert(data)
                    alert("Записот со исто оригинално име, спорт, регион ид постои !!! Ве молам пополнете правилно!!!")
                    $("#alertInfoUpdate").show();
                }
            }
        }
    });
}
///////////////////////////////--------INSERT-------------////////////////////////////////////////////////////////
$(document).on('click', '#addButton', function () {
    $("#alertInfo").hide();
    $("#dangerSport").hide()
    $("#minOriginaloIme").hide()
    $("#dangerRegionId").hide()
    $("#dangerPriorityDefault").hide()
    $("#dangerPriorityCustom").hide()
    $("#dangerTemplate").hide()
    $("#dangerNumberOfSets").hide()
    $("#dangerZoneId").hide()
    $("#dangerPercent").hide()
    $("#dangerPercentGgng").hide()
    $("#dangerOddsGroup").hide()
    $("#dangerEfId").hide()
    $("#dangerApi").hide()
    $("#dangerResults").hide()
    $("#dangerExtra").hide()
    $("#zadolzitelnoOrginalnoIme").show()
    $("#zadolzitelnoSport").show()
    $("#zadolzitelnoRegionId").show()
    $("#zadolzitelnoPriorityDefault").show()
    $("#zadolzitelnoPriorityCustom").show()
    $("#zadolzitelnoTemplate").show()
    $("#zadolzitelnoNumberOfSets").show()
    $("#zadolzitelnoZoneId").show()
    $("#zadolzitelnoPercent").show()
    $("#zadolzitelnoPercentGgng").show()
    $("#zadolzitelnoOddsGroup").show()
    $("#zadolzitelnoEfId").show()
    $("#zadolzitelnoApi").show()
    $("#zadolzitelnoResults").show()
    $("#zadolzitelnoExtra").show()
    $(document).on("input", "#priorityDefault,#priorityCustom,#template,#numberOfSets,#addSport,#regionId,#zoneId,#statisticsGroup,#oddsGroup,#efID,#apiFootId,#resultsAdd,#extraTypeTemplateId", function () {
        this.value = this.value.replace(/\D/g, '');
    });
});
$(document).on('click', '#save', function () {
    $("#alertInfo").hide();
    $("#dangerSport").hide()
    $("#minOriginaloIme").hide()
    $("#dangerRegionId").hide()
    $("#dangerPriorityDefault").hide()
    $("#dangerPriorityCustom").hide()
    $("#dangerTemplate").hide()
    $("#dangerNumberOfSets").hide()
    $("#dangerZoneId").hide()
    $("#dangerPercent").hide()
    $("#dangerPercentGgng").hide()
    $("#dangerOddsGroup").hide()
    $("#dangerEfId").hide()
    $("#dangerApi").hide()
    $("#dangerResults").hide()
    $("#dangerExtra").hide()
    $("#zadolzitelnoOrginalnoIme").show()
    $("#zadolzitelnoSport").show()
    $("#zadolzitelnoRegionId").show()
    $("#zadolzitelnoPriorityDefault").show()
    $("#zadolzitelnoPriorityCustom").show()
    $("#zadolzitelnoTemplate").show()
    $("#zadolzitelnoNumberOfSets").show()
    $("#zadolzitelnoZoneId").show()
    $("#zadolzitelnoPercent").show()
    $("#zadolzitelnoPercentGgng").show()
    $("#zadolzitelnoOddsGroup").show()
    $("#zadolzitelnoEfId").show()
    $("#zadolzitelnoApi").show()
    $("#zadolzitelnoResults").show()
    $("#zadolzitelnoExtra").show()
    let addOriginalName = $("#originalName").val();
    let addAlternativeName = $("#alternativeName").val();
    let addPriorityDefault = $("#priorityDefault").val();
    let addPriorityCustom = $("#priorityCustom").val();
    let addTemplate = $("#template").val();
    let addNumberOfSets = $("#numberOfSets").val();
    let addSport = $("#addSport").val();
    let addCodeRange = $("#codeRange").val();
    let addSubtitle = $("#subtitle").val();
    let addRegionId = $("#regionId").val();
    let addZoneId = $("#zoneId").val();
    let addStatisticsCode = $("#statisticsCode").val();
    let addStatisticsGroup = $("#statisticsGroup").val();
    let addStatisticsNameNew = $("#statisticsNameNew").val();
    let addPercent = $("#percent").val();
    let addPercentGgng = $("#percentGgng").val();
    let addOddsGroup = $("#oddsGroup").val();
    let addefID = $("#efID").val();
    let addApiFootId = $("#apiFootId").val();
    let addResults = $("#resultsAdd").val();
    let addExtraTypeTemplateId = $("#extraTypeTemplateId").val();
    let objLeagues = [{
        "original_name": addOriginalName, "alternative_name": addAlternativeName, "priority_default": addPriorityDefault,
        "priority_custom": addPriorityCustom, "template": addTemplate, "number_of_sets": addNumberOfSets, "sport": addSport, "code_range": addCodeRange,
        "subtitle": addSubtitle, "region_id": addRegionId, "zone_id": addZoneId, "statistics_code": addStatisticsCode,
        "statistics_group": addStatisticsGroup, "statistics_name_new": addStatisticsNameNew, "percent": addPercent, "percent_ggng": addPercentGgng,
        "odds_group": addOddsGroup, "efID": addefID, "apiFoot_id": addApiFootId, "results": addResults, "extra_type_template_id": addExtraTypeTemplateId,
        "table_name": "leagues"
    }];
    if (addOriginalName.length > 3 && addSport != "" && addRegionId != "" && addPriorityDefault != "" && addPriorityCustom != "" && addTemplate != "" && addNumberOfSets != "" && addZoneId != "" && addPercent != "" && addPercentGgng != "" && addefID != "" && addApiFootId != "" && addResults != "" && addExtraTypeTemplateId != "" && addOddsGroup != "") {
        postData("insert", objLeagues);
    } else {
        alert("Неуспешно додадовте. Пополнете правилно!!!");
        $("#zadolzitelnoOrginalnoIme").hide()
        $("#zadolzitelnoSport").hide()
        $("#zadolzitelnoRegionId").hide()
        $("#zadolzitelnoPriorityDefault").hide()
        $("#zadolzitelnoPriorityCustom").hide()
        $("#zadolzitelnoTemplate").hide()
        $("#zadolzitelnoNumberOfSets").hide()
        $("#zadolzitelnoZoneId").hide()
        $("#zadolzitelnoPercent").hide()
        $("#zadolzitelnoPercentGgng").hide()
        $("#zadolzitelnoOddsGroup").hide()
        $("#zadolzitelnoEfId").hide()
        $("#zadolzitelnoApi").hide()
        $("#zadolzitelnoResults").hide()
        $("#zadolzitelnoExtra").hide()
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
        if (addRegionId == "") {
            $("#dangerRegionId").show()
        } else {
            $("#dangerRegionId").hide()
        }
        if (addPriorityDefault == "") {
            $("#dangerPriorityDefault").show()
        } else {
            $("#dangerPriorityDefault").hide()
        }
        if (addPriorityCustom == "") {
            $("#dangerPriorityCustom").show()
        } else {
            $("#dangerPriorityCustom").hide()
        }
        if (addTemplate == "") {
            $("#dangerTemplate").show()
        } else {
            $("#dangerTemplate").hide()
        }
        if (addNumberOfSets == "") {
            $("#dangerNumberOfSets").show()
        } else {
            $("#dangerNumberOfSets").hide()
        }
        if (addZoneId == "") {
            $("#dangerZoneId").show()
        } else {
            $("#dangerZoneId").hide()
        }
        if (addPercent == "") {
            $("#dangerPercent").show()
        } else {
            $("#dangerPercent").hide()
        }
        if (addPercentGgng == "") {
            $("#dangerPercentGgng").show()
        } else {
            $("#dangerPercentGgng").hide()
        }
        if (addefID == "") {
            $("#dangerEfId").show()
        } else {
            $("#dangerEfId").hide()
        }
        if (addApiFootId == "") {
            $("#dangerApi").show()
        } else {
            $("#dangerApi").hide()
        }
        if (addResults == "") {
            $("#dangerResults").show()
        } else {
            $("#dangerResults").hide()
        }
        if (addExtraTypeTemplateId == "") {
            $("#dangerExtra").show()
        } else {
            $("#dangerExtra").hide()
        }
        if (addOddsGroup == "") {
            $("#dangerOddsGroup").show()
        } else {
            $("#dangerOddsGroup").hide()
        }
    }
})
//////////////------------DELETE----------------------//////////////////////////////////////////////////
$(document).on('click', '[id^="btnDelete-"]', function () {
    $(".modal").find('button[id^="deleteLeagues-"]').attr("id", "deleteLeagues-" + $(this).data('id'));
    var currentRowDelete = $(this).closest("tr");
    var deleteCol1 = currentRowDelete.find("td:eq(0)").text();
    var deleteCol2 = currentRowDelete.find("td:eq(1)").text();
    $("#naslovDeleteOriginalIme").html(deleteCol2)
    $("#naslovDeleteId").html(deleteCol1)
});
$(document).on('click', '[id^="deleteLeagues-"]', function () {
    let id_html = $(this).attr("id");
    let pk_value = id_html.split("-")[1];
    postData("delete", [{ "pk_id": pk_value, "table_name": "leagues" }]);
    if (pk_value.length > 0) {
        alert("Успешно избришавте");
        window.location.href = "../view/leagues.html";
    } else {
        alert("Неуспешно избришавте");
    }
});
///////////////////////-----------UPDATE-----------/////////////////////////////////////////////////
$(document).on('click', '[id^="btnUpdate-"]', function () {
    $("#alertInfoUpdate").hide();
    $("#dangerSportUpdate").hide()
    $("#minOriginaloImeUpdate").hide()
    $("#dangerRegionIdUpdate").hide()
    $("#dangerPriorityDefaultUpdate").hide()
    $("#dangerPriorityCustomUpdate").hide()
    $("#dangerTemplateUpdate").hide()
    $("#dangerNumberOfSetsUpdate").hide()
    $("#dangerZoneIdUpdate").hide()
    $("#dangerPercentUpdate").hide()
    $("#dangerPercentGgngUpdate").hide()
    $("#dangerOddsGroupUpdate").hide()
    $("#dangerEfIdUpdate").hide()
    $("#dangerApiUpdate").hide()
    $("#dangerResultsUpdate").hide()
    $("#dangerExtraUpdate").hide()
    $("#zadolzitelnoOrginalnoImeUpdate").show()
    $("#zadolzitelnoSportUpdate").show()
    $("#zadolzitelnoRegionIdUpdate").show()
    $("#zadolzitelnoPriorityDefaultUpdate").show()
    $("#zadolzitelnoPriorityCustomUpdate").show()
    $("#zadolzitelnoTemplateUpdate").show()
    $("#zadolzitelnoNumberOfSetsUpdate").show()
    $("#zadolzitelnoZoneIdUpdate").show()
    $("#zadolzitelnoPercentUpdate").show()
    $("#zadolzitelnoPercentGgngUpdate").show()
    $("#zadolzitelnoOddsGroupUpdate").show()
    $("#zadolzitelnoEfIdUpdate").show()
    $("#zadolzitelnoApiUpdate").show()
    $("#zadolzitelnoResultsUpdate").show()
    $("#zadolzitelnoExtraUpdate").show()
    $(".modal").find('button[id^="editLeagues-"]').attr("id", "editLeagues-" + $(this).data('id'));
    var currentRow = $(this).closest("tr");
    var col1 = currentRow.find("td:eq(0)").text();
    var col2 = currentRow.find("td:eq(1)").text();
    var col3 = currentRow.find("td:eq(2)").text();
    var col4 = currentRow.find("td:eq(3)").text();
    var col5 = currentRow.find("td:eq(4)").text();
    var col6 = currentRow.find("td:eq(5)").text();
    var col7 = currentRow.find("td:eq(6)").text();
    var col8 = currentRow.find("td:eq(7)").text();
    var col9 = currentRow.find("td:eq(8)").text();
    var col10 = currentRow.find("td:eq(9)").text();
    var col11 = currentRow.find("td:eq(10)").text();
    var col12 = currentRow.find("td:eq(11)").text();
    var col13 = currentRow.find("td:eq(12)").text();
    var col14 = currentRow.find("td:eq(13)").text();
    var col15 = currentRow.find("td:eq(14)").text();
    var col16 = currentRow.find("td:eq(15)").text();
    var col17 = currentRow.find("td:eq(16)").text();
    var col18 = currentRow.find("td:eq(17)").text();
    var col19 = currentRow.find("td:eq(18)").text();
    var col20 = currentRow.find("td:eq(19)").text();
    var col21 = currentRow.find("td:eq(20)").text();
    var col22 = currentRow.find("td:eq(21)").text();
    var dataOriginalIme = col2 + "\n";
    var dataAlternativeIme = col3 + "\n";
    var dataPriorityDefault = col4 + "\n";
    var dataPriorityCustom = col5 + "\n";
    var dataTemplate = col6 + "\n";
    var dataNumberOfSets = col7 + "\n";
    var dataSport = col8 + "\n";
    var dataCodeRange = col9 + "\n";
    var dataSubtitle = col10 + "\n";
    var dataRegionId = col11 + "\n";
    var dataZoneId = col12 + "\n";
    var dataStatisticsCode = col13 + "\n";
    var dataStatisticsGroup = col14 + "\n";
    var dataStatisticsNameNew = col15 + "\n";
    var dataPercent = col16 + "\n";
    var dataPercentGgng = col17 + "\n";
    var dataOddsGroup = col18 + "\n";
    var dataEfID = col19 + "\n";
    var dataApiFootId = col20 + "\n";
    var dataResults = col21 + "\n";
    var dataExtraTypeTemplateId = col22 + "\n";
    $("#naslovOriginalIme").html(dataOriginalIme)
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
        $(this).find("input[id^=priorityDefaultInput] ,textarea").each(function () {
            if (!$(this).val()) {
                $(this).attr("placeholder", dataPriorityDefault);
            }
        });
        $(this).find("input[id^=priorityCustomInput] ,textarea").each(function () {
            if (!$(this).val()) {
                $(this).attr("placeholder", dataPriorityCustom);
            }
        });
        $(this).find("input[id^=templateUpdate] ,textarea").each(function () {
            if (!$(this).val()) {
                $(this).attr("placeholder", dataTemplate);
            }
        });
        $(this).find("input[id^=numberOfSetsInput] ,textarea").each(function () {
            if (!$(this).val()) {
                $(this).attr("placeholder", dataNumberOfSets);
            }
        });
        $(this).find("input[id^=sportInput] ,textarea").each(function () {
            if (!$(this).val()) {
                $(this).attr("placeholder", dataSport);
            }
        });
        $(this).find("input[id^=codeRangeInput] ,textarea").each(function () {
            if (!$(this).val()) {
                $(this).attr("placeholder", dataCodeRange);
            }
        });
        $(this).find("input[id^=subtitleInput] ,textarea").each(function () {
            if (!$(this).val()) {
                $(this).attr("placeholder", dataSubtitle);
            }
        });
        $(this).find("input[id^=regionIdInput] ,textarea").each(function () {
            if (!$(this).val()) {
                $(this).attr("placeholder", dataRegionId);
            }
        });
        $(this).find("input[id^=zoneIdInput] ,textarea").each(function () {
            if (!$(this).val()) {
                $(this).attr("placeholder", dataZoneId);
            }
        });
        $(this).find("input[id^=statisticsCodeInput] ,textarea").each(function () {
            if (!$(this).val()) {
                $(this).attr("placeholder", dataStatisticsCode);
            }
        });
        $(this).find("input[id^=statisticsGroupInput] ,textarea").each(function () {
            if (!$(this).val()) {
                $(this).attr("placeholder", dataStatisticsGroup);
            }
        });
        $(this).find("input[id^=statisticsNameNewInput] ,textarea").each(function () {
            if (!$(this).val()) {
                $(this).attr("placeholder", dataStatisticsNameNew);
            }
        });
        $(this).find("input[id^=percentInput] ,textarea").each(function () {
            if (!$(this).val()) {
                $(this).attr("placeholder", dataPercent);
            }
        });
        $(this).find("input[id^=percenGgngInput] ,textarea").each(function () {
            if (!$(this).val()) {
                $(this).attr("placeholder", dataPercentGgng);
            }
        });
        $(this).find("input[id^=oddsGroupInput] ,textarea").each(function () {
            if (!$(this).val()) {
                $(this).attr("placeholder", dataOddsGroup);
            }
        });
        $(this).find("input[id^=efIDInput] ,textarea").each(function () {
            if (!$(this).val()) {
                $(this).attr("placeholder", dataEfID);
            }
        });
        $(this).find("input[id^=apiFootIdInput] ,textarea").each(function () {
            if (!$(this).val()) {
                $(this).attr("placeholder", dataApiFootId);
            }
        });
        $(this).find("input[id^=resultsInput] ,textarea").each(function () {
            if (!$(this).val()) {
                $(this).attr("placeholder", dataResults);
            }
        });
        $(this).find("input[id^=extraTypeTemplateIdInput] ,textarea").each(function () {
            if (!$(this).val()) {
                $(this).attr("placeholder", dataExtraTypeTemplateId);
            }
        });
    });
});
$(document).on('click', '[id^="editLeagues-"]', function () {
    $("#alertInfoUpdate").hide();
    $("#dangerSportUpdate").hide()
    $("#minOriginaloImeUpdate").hide()
    $("#dangerRegionIdUpdate").hide()
    $("#dangerPriorityDefaultUpdate").hide()
    $("#dangerPriorityCustomUpdate").hide()
    $("#dangerTemplateUpdate").hide()
    $("#dangerNumberOfSetsUpdate").hide()
    $("#dangerZoneIdUpdate").hide()
    $("#dangerPercentUpdate").hide()
    $("#dangerPercentGgngUpdate").hide()
    $("#dangerOddsGroupUpdate").hide()
    $("#dangerEfIdUpdate").hide()
    $("#dangerApiUpdate").hide()
    $("#dangerResultsUpdate").hide()
    $("#dangerExtraUpdate").hide()
    $("#zadolzitelnoOrginalnoImeUpdate").show()
    $("#zadolzitelnoSportUpdate").show()
    $("#zadolzitelnoRegionIdUpdate").show()
    $("#zadolzitelnoPriorityDefaultUpdate").show()
    $("#zadolzitelnoPriorityCustomUpdate").show()
    $("#zadolzitelnoTemplateUpdate").show()
    $("#zadolzitelnoNumberOfSetsUpdate").show()
    $("#zadolzitelnoZoneIdUpdate").show()
    $("#zadolzitelnoPercentUpdate").show()
    $("#zadolzitelnoPercentGgngUpdate").show()
    $("#zadolzitelnoOddsGroupUpdate").show()
    $("#zadolzitelnoEfIdUpdate").show()
    $("#zadolzitelnoApiUpdate").show()
    $("#zadolzitelnoResultsUpdate").show()
    $("#zadolzitelnoExtraUpdate").show()
    let id_html = $(this).attr("id");
    let pk_value_update = id_html.split("-")[1];
    let originalNameUpdate = $(".modal").find('input[id="originalNameInput"]').val();
    let alternativeNameUpdate = $(".modal").find('input[id="alternativeNameInput"]').val();
    let priorityDefaultUpdate = $(".modal").find('input[id="priorityDefaultInput"]').val();
    let priorityCustomUpdate = $(".modal").find('input[id="priorityCustomInput"]').val();
    let templateUpdate = $(".modal").find('input[id="templateUpdate"]').val();
    let numberOfSetsUpdate = $(".modal").find('input[id="numberOfSetsInput"]').val();
    let sportUpdate = $(".modal").find('input[id="sportInput"]').val();
    let codeRangeUpdate = $(".modal").find('input[id="codeRangeInput"]').val();
    let subtitleUpdate = $(".modal").find('input[id="subtitleInput"]').val();
    let regionIdUpdate = $(".modal").find('input[id="regionIdInput"]').val();
    let zoneIdUpdate = $(".modal").find('input[id="zoneIdInput"]').val();
    let statisticsCodeUpdate = $(".modal").find('input[id="statisticsCodeInput"]').val();
    let statisticsGroupUpdate = $(".modal").find('input[id="statisticsGroupInput"]').val();
    let statisticsName_newUpdate = $(".modal").find('input[id="statisticsNameNewInput"]').val();
    let percentUpdate = $(".modal").find('input[id="percentInput"]').val();
    let percentGgngUpdate = $(".modal").find('input[id="percenGgngInput"]').val();
    let oddsGroupUpdate = $(".modal").find('input[id="oddsGroupInput"]').val();
    let efIDUpdate = $(".modal").find('input[id="efIDInput"]').val();
    let apiFootIdUpdate = $(".modal").find('input[id="apiFootIdInput"]').val();
    let resultsUpdate = $(".modal").find('input[id="resultsInput"]').val();
    let extraTypeTemplateIdUpdate = $(".modal").find('input[id="extraTypeTemplateIdInput"]').val();

    let objLeaguesUpdate = [{ "original_name": originalNameUpdate, "alternative_name": alternativeNameUpdate, "priority_default": priorityDefaultUpdate, "priority_custom": priorityCustomUpdate, "template": templateUpdate, "number_of_sets": numberOfSetsUpdate, "sport": sportUpdate, "code_range": codeRangeUpdate, "subtitle": subtitleUpdate, "region_id": regionIdUpdate, "zone_id": zoneIdUpdate, "statistics_code": statisticsCodeUpdate, "statistics_group": statisticsGroupUpdate, "statistics_name_new": statisticsName_newUpdate, "percent": percentUpdate, "percent_ggng": percentGgngUpdate, "odds_group": oddsGroupUpdate, "efID": efIDUpdate, "apiFoot_id": apiFootIdUpdate, "results": resultsUpdate, "extra_type_template_id": extraTypeTemplateIdUpdate, "pk_id": pk_value_update, "table_name": "leagues" }];

    if (originalNameUpdate.length > 3 && sportUpdate != "" && regionIdUpdate != "" && priorityDefaultUpdate != "" && priorityCustomUpdate != "" && templateUpdate != "" && numberOfSetsUpdate != "" && zoneIdUpdate != "" && percentUpdate != "" && percentGgngUpdate != "" && oddsGroupUpdate != "" && efIDUpdate != "" && apiFootIdUpdate != "" && resultsUpdate != "" && extraTypeTemplateIdUpdate != "") {
        postData("update", objLeaguesUpdate);
    } else {
        alert("Неуспешно променивте. Обидете се повторно!!!");
        $("#zadolzitelnoOrginalnoImeUpdate").hide()
        $("#zadolzitelnoSportUpdate").hide()
        $("#zadolzitelnoRegionIdUpdate").hide()
        $("#zadolzitelnoPriorityDefaultUpdate").hide()
        $("#zadolzitelnoPriorityCustomUpdate").hide()
        $("#zadolzitelnoTemplateUpdate").hide()
        $("#zadolzitelnoNumberOfSetsUpdate").hide()
        $("#zadolzitelnoZoneIdUpdate").hide()
        $("#zadolzitelnoPercentUpdate").hide()
        $("#zadolzitelnoPercentGgngUpdate").hide()
        $("#zadolzitelnoOddsGroupUpdate").hide()
        $("#zadolzitelnoEfIdUpdate").hide()
        $("#zadolzitelnoApiUpdate").hide()
        $("#zadolzitelnoResultsUpdate").hide()
        $("#zadolzitelnoExtraUpdate").hide()
        if (sportUpdate == "") {
            $("#dangerSportUpdate").show()
        } else {
            $("#dangerSportUpdate").hide()
        }
        if (originalNameUpdate.length < 3) {
            $("#minOriginaloImeUpdate").show()
        } else {
            $("#minOriginaloImeUpdate").hide()
        }
        if (regionIdUpdate == "") {
            $("#dangerRegionIdUpdate").show()
        } else {
            $("#dangerRegionIdUpdate").hide()
        }
        if (priorityDefaultUpdate == "") {
            $("#dangerPriorityDefaultUpdate").show()
        } else {
            $("#dangerPriorityDefaultUpdate").hide()
        }
        if (priorityCustomUpdate == "") {
            $("#dangerPriorityCustomUpdate").show()
        } else {
            $("#dangerPriorityCustomUpdate").hide()
        }
        if (templateUpdate == "") {
            $("#dangerTemplateUpdate").show()
        } else {
            $("#dangerTemplateUpdate").hide()
        }
        if (numberOfSetsUpdate == "") {
            $("#dangerNumberOfSetsUpdate").show()
        } else {
            $("#dangerNumberOfSetsUpdate").hide()
        }
        if (zoneIdUpdate == "") {
            $("#dangerZoneIdUpdate").show()
        } else {
            $("#dangerZoneIdUpdate").hide()
        }
        if (percentUpdate == "") {
            $("#dangerPercentUpdate").show()
        } else {
            $("#dangerPercentUpdate").hide()
        }
        if (percentGgngUpdate == "") {
            $("#dangerPercentGgngUpdate").show()
        } else {
            $("#dangerPercentGgngUpdate").hide()
        }
        if (efIDUpdate == "") {
            $("#dangerEfIdUpdate").show()
        } else {
            $("#dangerEfIdUpdate").hide()
        }
        if (apiFootIdUpdate == "") {
            $("#dangerApiUpdate").show()
        } else {
            $("#dangerApiUpdate").hide()
        }
        if (resultsUpdate == "") {
            $("#dangerResultsUpdate").show()
        } else {
            $("#dangerResultsUpdate").hide()
        }
        if (extraTypeTemplateIdUpdate == "") {
            $("#dangerExtraUpdate").show()
        } else {
            $("#dangerExtraUpdate").hide()
        }
        if (oddsGroupUpdate == "") {
            $("#dangerOddsGroupUpdate").show()
        } else {
            $("#dangerOddsGroupUpdate").hide()
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