<?php

$json        =    json_decode(file_get_contents("php://input"));
$table_name    =    $json->table_name;
$data        =    array();

require_once "../lib/class_database.php";

$objDatabase = new Database();
switch ($table_name) { //json vaka treba da odi vo js
    case "teams":
        require_once "DAO/teamsDAO.php";
        $objTeams = new teamsDAO($objDatabase);

        $results = $objTeams->selectTeamsCallStoredProcedure();


        //echo '<pre>';
        //var_dump($results); //a ova var dump treba prvo vaka da odi od array php
        //echo '<pre>';


        foreach ($results as $row) {
            $data[] = array(
                "id" => $row["timID"],
                "original_name" => $row["timOriginalnoIme"],
                "alternative_name" => $row["timAlternativnoIme"],
                "natprevaruvanje" => $row["natprevaruvanjeSport"],
                "sportID" => $row["sportID"],
                "ef_team" => $row["efTim"]
            );
        }
        break;

    case "leagues":
        require_once "DAO/leaguesDAO.php";
        $objLeagues = new LeaguesDAO($objDatabase);

        $results = $objLeagues->selectLeaguesCallStoredProcedure();
        //$results = $objLeagues->selectLeagues();//ova e komentirana zaradi pregolemite podatoci tesko mu e da se procitat
        foreach ($results as $row) {
            $data[] = array(
                "id" => $row["id"],
                "original_name" => $row["original_name"],
                "alternative_name" => $row["alternative_name"],
                "priority_default" => $row["priority_default"],
                "priority_custom" => $row["priority_custom"],
                "template" => $row["template"],
                "number_of_sets" => $row["number_of_sets"],
                "sport" => $row["sport"],
                "code_range" => $row["code_range"],
                "subtitle" => $row["subtitle"],
                "region_id" => $row["region_id"],
                "zone_id" => $row["zone_id"],
                "statistics_code" => $row["statistics_code"],
                "statistics_group" => $row["statistics_group"],
                "statistics_name_new" => $row["statistics_name_new"],
                "percent" => $row["percent"],
                "percent_ggng" => $row["percent_ggng"],
                "odds_group" => $row["odds_group"],
                "efID" => $row["efID"],
                "apiFoot_id" => $row["apiFoot_id"],
                "results" => $row["results"],
                "extra_type_template_id" => $row["extra_type_template_id"]
            );
        }
        break;

    case "moja":
        require_once "DAO/mojaDAO.php";
        $objMoja = new MojaDAO($objDatabase);

        $results = $objMoja->selectMoja();

        foreach ($results as $row) {
            $data[] = array(
                "id" => $row["id"],
                "ime" => $row["ime"],
                "prezime" => $row["prezime"],
                "grad" => $row["grad"],
                "firmaID" => $row["firmaID"]
            );
        }
        break;
    case "sport":
        require_once "DAO/sportDAO.php";
        $objSport = new SportDAO($objDatabase);

        $results = $objSport->selectSport();

        foreach ($results as $row) {
            $data[] = array(
                "sportID" => $row["sportID"],
                "natprevaruvanje" => $row["natprevaruvanje"],
                "poluvreminja" => $row["poluvreminja"]
            );
        }
        break;

    case "premierLeague":
        require_once "DAO/premierLeagueDAO.php";
        $objPremierLeague = new PremierLeagueDAO($objDatabase);

        $results = $objPremierLeague->selectPremierLeagueCallStoredProcedure();

        foreach ($results as $row) {
            $data[] = array(
                "position" => $row["position"],
                "played" => $row["played"],
                "won" => $row["won"],
                "drawn" => $row["drawn"],
                "lost" => $row["lost"],
                "gf" => $row["gf"],
                "ga" => $row["ga"],
                "gd" => $row["gd"],
                "points" => $row["points"],
                "form" => $row["form"]
            );
        }
        break;

    case "results":
        require_once "DAO/resultsDAO.php";
        $objResults = new ResultsDAO($objDatabase);

        $results = $objResults->selectResultsCallStoredProcedure();
        //$results = $objResults->selectUnikat();

        foreach ($results as $row) {
            $data[] = array(
                "resultsID" => $row["resultsID"],
                "IDimeNaLiga" => $row["IDimeNaLiga"],
                "imeNaLiga" => $row["imeNaLiga"],
                "domakin" => $row["domakin"],
                "domakinID" => $row["domakinID"],
                "results" => $row["results"],
                "gostin" => $row["gostin"],
                "gostinID" => $row["gostinID"],
                "datum" => $row["datum"],
                "vreme" => $row["vreme"],
                "natprevaruvanje" => $row["natprevaruvanje"],
                "sportID" => $row["sportID"],
                "poluvreminja" => $row["poluvreminja"],
                "prvoPoluvremeDomakin" => $row["prvoPoluvremeDomakin"],
                "vtoroPoluvremeDomakin" => $row["vtoroPoluvremeDomakin"],
                "tretoPoluvremeDomakin" => $row["tretoPoluvremeDomakin"],
                "cetvrtoPoluvremeDomakin" => $row["cetvrtoPoluvremeDomakin"],
                "konecenDomakin" => $row["konecenDomakin"],
                "konecenGostin" => $row["konecenGostin"],
                "prvoPoluvremeGostin" => $row["prvoPoluvremeGostin"],
                "vtoroPoluvremeGostin" => $row["vtoroPoluvremeGostin"],
                "tretoPoluvremeGostin" => $row["tretoPoluvremeGostin"],
                "cetvrtoPoluvremeGostin" => $row["cetvrtoPoluvremeGostin"]
            );
        }
        break;
}

//echo '<pre>';
echo json_encode($data);
//echo '<pre>';
