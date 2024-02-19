<?php

require_once "POJO/premierLeague.php";

class PremierLeagueDAO extends PremierLeague
{
    private $table_name = "premierLeague";
    private $database = null;

    public function __construct($DB)
    {
        $this->database = $DB;
    }

    public function insertPremierLeague()
    {
        $position = parent::getPosition();
        $club = parent::getClub();
        $played = parent::getPlayed();
        $won = parent::getWon();
        $drawn = parent::getDrawn();
        $lost = parent::getPosition();
        $gf = parent::getGf();
        $ga = parent::getGa();
        $gd = parent::getGd();
        $points = parent::getPoints();
        $form = parent::getForm();
        $nextClub = parent::getNextClub();
        $columns_value = "$position,$club,$played,$won,$drawn,$lost,$gf,$ga,'$gd',$points,'$form',$nextClub";
        $this->database->callStoredProcedure("_insert_premier_league", $columns_value);
    }

    public function deletePremierLeague()
    {
        $position = parent::getPosition();
        $pk_value = $position;
        $this->database->callStoredProcedure("_delete_premier_league", $pk_value);
    }

    public function updatePremierLeague()
    {
        $pk_name = "position";
        $pk_value = parent::getPosition();
        $club = parent::getClub();
        $played = parent::getPlayed();
        $won = parent::getWon();
        $drawn = parent::getDrawn();
        $lost = parent::getPosition();
        $gf = parent::getGf();
        $ga = parent::getGa();
        $gd = parent::getGd();
        $points = parent::getPoints();
        $form = parent::getForm();
        $nextClub = parent::getNextClub();

        $columns = "club=$club, played=$played, won=$won,drawn=$drawn,lost=$lost,gf=$gf,ga=$ga,gd='$gd',points=$points,form='$form',nextClub=$nextClub";
        return $this->database->updateRow($this->table_name, $columns, $pk_name, $pk_value);
    }

    public function selectPremierLeagueCallStoredProcedure()
    {
        return $this->database->selectRowStoredProcedure("_select_premier_league");
    }
}
