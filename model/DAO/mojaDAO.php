<?php
require_once "POJO/moja.php";

class MojaDAO extends Moja
{
    private $table_name = "moja";
    private $database = null;

    public function __construct($DB)
    {
        $this->database = $DB;
    }

    public function insertMoja()
    {
        //$id = parent::getId();
        $ime = parent::getIme();
        $prezime = parent::getPrezime();
        $grad = parent::getGrad();
        $firmaID = parent::getFirmaID();

        $columns = "ime,prezime,grad,firmaID";
        $columns_value = "'$ime','$prezime','$grad',$firmaID";

        return $this->database->insertRow($this->table_name, $columns, $columns_value);
    }

    public function selectMoja()
    {
        return $this->database->selectRow($this->table_name);
    }

    public function deleteMoja()
    {
        $pk_name = "id";
        $pk_value = parent::getId();

        return $this->database->deleteRow($this->table_name, $pk_name, $pk_value);
    }

    public function updateMoja()
    {
        $pk_name = "id";
        $pk_value = parent::getId();
        $ime = parent::getIme();
        $prezime = parent::getPrezime();
        $grad = parent::getGrad();
        $firmaID = parent::getFirmaID();

        $columns = "ime='$ime', prezime='$prezime', grad='$grad',firmaID=$firmaID";
        return $this->database->updateRow($this->table_name, $columns, $pk_name, $pk_value);
    }
}
