<?php
require_once "../lib/class_database.php";

$objDatabase = new Database();

$json        =    json_decode(file_get_contents("php://input"));
$pk_id        =    $json[0]->pk_id;
$table_name = $json[0]->table_name;

//$table_name = "leagues";

switch ($table_name) {
    case "teams":
        require_once "DAO/teamsDAO.php";
        $objTeams = new TeamsDAO($objDatabase);

        $objTeams->setId($pk_id);

        $objTeams->deleteTeams();
        break;

    case "leagues":
        require_once "DAO/leaguesDAO.php";
        $objLeagues = new LeaguesDAO($objDatabase);

        $objLeagues->setId($pk_id);

        $objLeagues->deleteLeagues();
        break;

    case "moja":
        require_once "DAO/mojaDAO.php";
        $objMoja = new MojaDAO($objDatabase);

        $objMoja->setId($pk_id);

        $objMoja->deleteMoja();
        break;

    case "sport":
        require_once "DAO/sportDAO.php";
        $objSport = new SportDAO($objDatabase);

        $objSport->setSportID($pk_id);

        $objSport->deleteSport();
        break;

    case "premierLeague":
        require_once "DAO/premierLeagueDAO.php";
        $objPremierLeague = new PremierLeagueDAO($objDatabase);

        $objPremierLeague->setPosition($pk_id);

        $objSport->deletePremierLeague();
        break;

    case "results":
        require_once "DAO/resultsDAO.php";
        $objResults = new ResultsDAO($objDatabase);

        $objResults->setResultsID($pk_id);

        $objResults->deleteResults();
        break;

    default:
        echo "Pogresna tabela";
        break;
}
