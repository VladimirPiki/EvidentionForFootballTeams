<?php
$json            =    json_decode(file_get_contents("php://input"));
//var_dump($json);

$table_name = $json[0]->table_name;
//$table_name = "moja";
require_once "../lib/class_database.php";

$objDatabase = new Database();


switch ($table_name) {
    case 'teams':
        require_once "DAO/teamsDAO.php";
        $objTeams = new TeamsDAO($objDatabase);

        //$objTeams->setId($json[0]->id);
        $objTeams->setOriginalName($json[0]->original_name);
        $objTeams->setAlternativeName($json[0]->alternative_name);
        $objTeams->setSport($json[0]->sport);
        $objTeams->setEfTeam($json[0]->ef_team);

        $objTeams->insertTeams();

        //echo "uspesno";
        break;

    case 'leagues':
        require_once "DAO/leaguesDAO.php";
        $objLeagues = new LeaguesDAO($objDatabase);

        //$objLeagues->setId($json[0]->id);
        $objLeagues->setOriginalName($json[0]->original_name);
        $objLeagues->setAlternativeName($json[0]->alternative_name);
        $objLeagues->setPriorityDefault($json[0]->priority_default);
        $objLeagues->setPriorityCustom($json[0]->priority_custom);
        $objLeagues->setTemplate($json[0]->template);
        $objLeagues->setNumberOfSets($json[0]->number_of_sets);
        $objLeagues->setSport($json[0]->sport);
        $objLeagues->setCodeRange($json[0]->code_range);
        $objLeagues->setSubtitle($json[0]->subtitle);
        $objLeagues->setRegionId($json[0]->region_id);
        $objLeagues->setZoneId($json[0]->zone_id);
        $objLeagues->setStatisticsCode($json[0]->statistics_code);
        $objLeagues->setStatisticsGroup($json[0]->statistics_group);
        $objLeagues->setStatisticsNameNew($json[0]->statistics_name_new);
        $objLeagues->setPercent($json[0]->percent);
        $objLeagues->setPercentGgng($json[0]->percent_ggng);
        $objLeagues->setOddsGroup($json[0]->odds_group);
        $objLeagues->setEfID($json[0]->efID);
        $objLeagues->setApiFootId($json[0]->apiFoot_id);
        $objLeagues->setResults($json[0]->results);
        $objLeagues->setExtraTypeTemplateId($json[0]->extra_type_template_id);

        $objLeagues->insertLeagues();
        break;

    case 'moja':
        require_once "DAO/mojaDAO.php";
        $objMoja = new MojaDAO($objDatabase);

        $objMoja->setIme($json[0]->ime);
        $objMoja->setPrezime($json[0]->prezime);
        $objMoja->setGrad($json[0]->grad);
        $objMoja->setFirmaID($json[0]->firmaID);

        $objMoja->insertMoja();
        break;

    case "sport":
        require_once "DAO/sportDAO.php";
        $objSport = new SportDAO($objDatabase);

        $objSport->setSportID($json[0]->sportID);
        $objSport->setNatprevaruvanje($json[0]->natprevaruvanje);
        $objSport->setPoluvreminja($json[0]->poluvreminja);

        $objSport->insertSport();
        break;

    case "premierLeague":
        require_once "DAO/premierLeagueDAO.php";
        $objPremierLeague = new PremierLeagueDAO($objDatabase);

        $objPremierLeague->setPosition($json[0]->position);
        $objPremierLeague->setClub($json[0]->club);
        $objPremierLeague->setPlayed($json[0]->played);
        $objPremierLeague->setWon($json[0]->won);
        $objPremierLeague->setDrawn($json[0]->drawn);
        $objPremierLeague->setLost($json[0]->lost);
        $objPremierLeague->setGf($json[0]->gf);
        $objPremierLeague->setGa($json[0]->ga);
        $objPremierLeague->setGd($json[0]->gd);
        $objPremierLeague->setPoints($json[0]->points);
        $objPremierLeague->setForm($json[0]->form);
        $objPremierLeague->setNextClub($json[0]->nextClub);

        $objSport->insertPremierLeague();
        break;

    case "results":
        require_once "DAO/resultsDAO.php";

        $objResults = new ResultsDAO($objDatabase);
        $objResults->setLeague($json[0]->league);
        $objResults->setHome($json[0]->home);
        $objResults->setPrvoPoluvremeHome($json[0]->prvoPoluvremeHome);
        $objResults->setVtoroPoluvremeHome($json[0]->vtoroPoluvremeHome);
        $objResults->setTretoPoluvremeHome($json[0]->tretoPoluvremeHome);
        $objResults->setCetvrtoPoluvremeHome($json[0]->cetvrtoPoluvremeHome);
        $objResults->setKonecenHome($json[0]->konecenHome);
        $objResults->setKonecenAway($json[0]->konecenAway);
        $objResults->setPrvoPoluvremeAway($json[0]->prvoPoluvremeAway);
        $objResults->setVtoroPoluvremeAway($json[0]->vtoroPoluvremeAway);
        $objResults->setTretoPoluvremeAway($json[0]->tretoPoluvremeAway);
        $objResults->setCetvrtoPoluvremeAway($json[0]->cetvrtoPoluvremeAway);
        $objResults->setAway($json[0]->away);
        $objResults->setDatum($json[0]->datum);
        $objResults->setVreme($json[0]->vreme);
        $objResults->setSport($json[0]->sport);

        $objResults->insertResults();
        break;

    default:
        echo "Погрешно име на табела";
        break;
}
