<?php
require_once "POJO/users.php";
class UsersDAO extends Users
{
    private $table_name = "users";
    private $database = null;

    public function __construct($DB)
    {
        $this->database = $DB;
    }

    public function insertUsers()
    {
        $users_id = parent::getUsersID();
        $username = parent::getUsername();
        $password = parent::getPassword();


        $columns = "users_id,username,password";
        $columns_value = "'$users_id','$username','$password'";

        return $this->database->insertRow($this->table_name, $columns, $columns_value);
    }

    public function selectUsers()
    {
        return $this->database->selectRow($this->table_name);
    }

    public function deleteMoja()
    {
        $pk_name = "users_id";
        $pk_value = parent::getUsersID();

        return $this->database->deleteRow($this->table_name, $pk_name, $pk_value);
    }

    public function updateUsers()
    {
        $pk_name = "users_id";
        $pk_value = parent::getUsersID();
        $username = parent::getUsername();
        $password = parent::getPassword();

        $columns = "username='$username', password='$password'";
        return $this->database->updateRow($this->table_name, $columns, $pk_name, $pk_value);
    }

    public function loginUsers()
    {
        return $this->database->selectRow($this->table_name . " WHERE username like '" . parent::getUsername() . "' AND password LIKE '" . parent::getPassword() . "'");
    }
}
