<?php
require_once "POJO/teams.php";

class TeamsDAO extends Teams
{
    private $table_name = "teams";
    private $database = null;

    public function __construct($DB)
    {
        $this->database = $DB;
    }

    public function insertTeams()
    {
        // $id = parent::getId();
        $original_name = parent::getOriginalName();
        $alternative_name = parent::getAlternativeName();
        $sport = parent::getSport();
        $ef_team = parent::getEfTeam();

        $columns = "original_name,alternative_name,sport,ef_team";
        $columns_value = "'$original_name','$alternative_name',$sport,$ef_team";

        return $this->database->insertRow($this->table_name, $columns, $columns_value);
    }

    public function selectTeams()
    {
        return $this->database->selectRow($this->table_name);
    }

    public function deleteTeams()
    {
        $pk_name = "id";
        $pk_value = parent::getId();

        return $this->database->deleteRow($this->table_name, $pk_name, $pk_value);
    }

    public function updateTeams()
    {
        $pk_name = "id";
        $pk_value = parent::getId();
        $original_name = parent::getOriginalName();
        $alternative_name = parent::getAlternativeName();
        $sport = parent::getSport();
        $ef_team = parent::getEfTeam();

        $columns = "original_name='$original_name',alternative_name='$alternative_name',sport=$sport,ef_team=$ef_team";
        return $this->database->updateRow($this->table_name, $columns, $pk_name, $pk_value);
    }

    public function selectTeamsCallStoredProcedure()
    {
        return $this->database->selectRowStoredProcedure("_select_teams_posledni_iljada");
    }
}
