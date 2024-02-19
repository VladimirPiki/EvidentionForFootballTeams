<?php
require_once "POJO/sport.php";

class SportDAO extends Sport
{
    private $table_name = "sport";
    private $database = null;

    public function __construct($DB)
    {
        $this->database = $DB;
    }

    public function insertSport()
    {
        $sportID = parent::getSportID();
        $natprevaruvanje = parent::getNatprevaruvanje();
        $poluvreminja = parent::getPoluvreminja();

        $columns = "sportID,natprevaruvanje,poluvreminja";
        $columns_value = "'$sportID','$natprevaruvanje',$poluvreminja";

        return $this->database->insertRow($this->table_name, $columns, $columns_value);
    }

    public function selectSport()
    {
        return $this->database->selectRow($this->table_name);
    }

    public function deleteSport()
    {
        $pk_name = "sportID";
        $pk_value = parent::getSportID();

        return $this->database->deleteRow($this->table_name, $pk_name, $pk_value);
    }

    public function updateSport()
    {
        $pk_name = "sportID";
        $pk_value = parent::getSportID();
        $natprevaruvanje = parent::getNatprevaruvanje();
        $poluvreminja = parent::getPoluvreminja();

        $columns = "natprevaruvanje='$natprevaruvanje',poluvreminja=$poluvreminja";
        return $this->database->updateRow($this->table_name, $columns, $pk_name, $pk_value);
    }
}
