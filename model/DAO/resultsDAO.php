<?php
require_once "POJO/results.php";

class ResultsDAO extends Results
{
    private $table_name = "results";
    private $database = null;

    public function __construct($DB)
    {
        $this->database = $DB;
    }

    public function insertResults()
    {
        $league = parent::getLeague();
        $home = parent::getHome();
        $prvoPoluvremeHome = parent::getPrvoPoluvremeHome();
        $vtoroPoluvremeHome = parent::getVtoroPoluvremeHome();
        $tretoPoluvremeHome = parent::getTretoPoluvremeHome();
        $cetvrtoPoluvremeHome = parent::getCetvrtoPoluvremeHome();
        $konecenHome = parent::getKonecenHome();
        $konecenAway = parent::getKonecenAway();
        $prvoPoluvremeAway = parent::getPrvoPoluvremeAway();
        $vtoroPoluvremeAway = parent::getVtoroPoluvremeAway();
        $tretoPoluvremeAway = parent::getTretoPoluvremeAway();
        $cetvrtoPoluvremeAway = parent::getCetvrtoPoluvremeAway();
        $away = parent::getAway();
        $datum = parent::getDatum();
        $vreme = parent::getVreme();
        $sport = parent::getSport();

        $columns = "league,home,prvoPoluvremeHome,vtoroPoluvremeHome,tretoPoluvremeHome,cetvrtoPoluvremeHome,konecenHome,konecenAway,prvoPoluvremeAway,vtoroPoluvremeAway,tretoPoluvremeAway,cetvrtoPoluvremeAway,away,datum,vreme,sport";
        $columns_value = "'$league','$home','$prvoPoluvremeHome','$vtoroPoluvremeHome','$tretoPoluvremeHome','$cetvrtoPoluvremeHome','$konecenHome','$konecenAway','$prvoPoluvremeAway','$vtoroPoluvremeAway','$tretoPoluvremeAway','$cetvrtoPoluvremeAway','$away','$datum','$vreme','$sport'";

        //return $this->database->insertRow($this->table_name, $columns, $columns_value);
        return $this->database->insertRowResults($this->table_name, $columns, $columns_value, $home, $away, $datum);
    }

    public function selectResultsCallStoredProcedure()
    {
        return $this->database->selectRowStoredProcedure("_select_results");
    }


    public function selectResultsLeagues()
    {
        $resultsID = parent::getResultsID();
        return $this->database->callStoredProcedure("_select_results_leagues($resultsID)");
    }

    public function deleteResults()
    {
        $pk_name = "resultsID";
        $pk_value = parent::getResultsID();

        return $this->database->deleteRow($this->table_name, $pk_name, $pk_value);
    }

    public function updateResults()
    {
        $pk_name = "resultsID";
        $pk_value = parent::getResultsID();
        $league = parent::getLeague();
        $home = parent::getHome();
        $prvoPoluvremeHome = parent::getPrvoPoluvremeHome();
        $vtoroPoluvremeHome = parent::getVtoroPoluvremeHome();
        $tretoPoluvremeHome = parent::getTretoPoluvremeHome();
        $cetvrtoPoluvremeHome = parent::getCetvrtoPoluvremeHome();
        $konecenHome = parent::getKonecenHome();
        $konecenAway = parent::getKonecenAway();
        $prvoPoluvremeAway = parent::getPrvoPoluvremeAway();
        $vtoroPoluvremeAway = parent::getVtoroPoluvremeAway();
        $tretoPoluvremeAway = parent::getTretoPoluvremeAway();
        $cetvrtoPoluvremeAway = parent::getCetvrtoPoluvremeAway();
        $away = parent::getAway();
        $datum = parent::getDatum();
        $vreme = parent::getVreme();
        $sport = parent::getSport();

        $homeHide = parent::getHome();
        $awayHide = parent::getAway();

        $columns = "league=$league,home=$home,prvoPoluvremeHome='$prvoPoluvremeHome',vtoroPoluvremeHome='$vtoroPoluvremeHome',tretoPoluvremeHome='$tretoPoluvremeHome',cetvrtoPoluvremeHome='$cetvrtoPoluvremeHome',konecenHome=$konecenHome,konecenAway=$konecenAway,prvoPoluvremeAway='$prvoPoluvremeAway',vtoroPoluvremeAway='$vtoroPoluvremeAway',tretoPoluvremeAway='$tretoPoluvremeAway',cetvrtoPoluvremeAway='$cetvrtoPoluvremeAway',away=$away,datum='$datum',vreme='$vreme',sport=$sport";

        //return $this->database->updateRow($this->table_name, $columns, $pk_name, $pk_value);
        return $this->database->updateRowResults($this->table_name, $columns, $pk_name, $pk_value, $home, $away, $datum, $homeHide, $awayHide);
    }
}
