<?php
class Database
{
    //class Attributes
    private $db_servername = "127.0.0.1";
    private $db_username   = "root";
    private $db_password   = "";
    private $db_name       = "krstevski";

    private $conn           = null;


    //class methods
    public function __construct()
    {
        try {
            $this->conn = new PDO("mysql:host=$this->db_servername;dbname=$this->db_name", $this->db_username, $this->db_password);
            $this->conn->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
            $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $statement  = $this->conn->prepare("SET NAMES 'utf8'");
            $statement->execute();
            ini_set('default_charset', 'utf-8');
        } catch (PDOException $e) {
            echo "Connection failed: " . $e->getMessage();
        }
    }

    public function insertRow($table_name, $columns, $columns_value)
    {
        $sql = "INSERT INTO $table_name ($columns) VALUES ($columns_value)";
        $stmt = $this->conn->prepare($sql);
        if ($stmt->execute()) {
            // $message = array("message" => "success");
            //echo json_encode($message);
            echo "uspesno";
        }
    }

    /********************************************TABLE -> RESULTS************************************************************** */
    public function insertRowResults($table_name, $columns, $columns_value, $home, $away, $datum)
    {
        $stmt = $this->conn->prepare("SELECT * FROM $table_name WHERE (home=$home OR away=$home OR home=$away OR away=$away) and datum = '$datum'");
        $stmt->execute();

        if ($stmt->fetchColumn() > 0) {
            echo "Ova utakmica e izigrana";
        } else {
            $sql = "INSERT INTO $table_name ($columns) VALUES ($columns_value)";
            $stmt = $this->conn->prepare($sql);
            if ($stmt->execute()) {
                echo "uspesno";
            }
        }
    }


    public function updateRowResults($table_name, $columns, $pk_name, $pk_value, $home, $away, $datum, $homeHide, $awayHide)
    {
        if (($home && $away) === ($homeHide && $awayHide)) {

            $sql = "UPDATE $table_name SET $columns WHERE $pk_name=$pk_value";
            $stmt = $this->conn->prepare($sql);
            if ($stmt->execute()) {
                echo "success";
            };
        } else {
            $stmt = $this->conn->prepare("SELECT * FROM $table_name WHERE (home=$home OR away=$home OR home=$away OR away=$away) and datum = '$datum'");

            $stmt->execute();
            if ($stmt->fetchColumn() > 0) {
                echo "unsuccess";
            } else {
                $sql = "UPDATE $table_name SET $columns WHERE $pk_name=$pk_value";
                $stmt = $this->conn->prepare($sql);
                if ($stmt->execute()) {
                    echo "success";
                };
            }
        }

        /*$stmt = $this->conn->prepare("SELECT * FROM $table_name WHERE (home=$home OR away=$home OR home=$away OR away=$away or home=$homeHide OR away=$homeHide OR home=$awayHide OR away=$awayHide) and datum = '$datum'");

        $stmt->execute();
        if ($stmt->fetchColumn() > 0) {
            echo "unsuccess";
        } else {
            $sql = "UPDATE $table_name SET $columns WHERE $pk_name=$pk_value";
            $stmt = $this->conn->prepare($sql);
            if ($stmt->execute()) {
                echo "success";
            };
        }*/

        /* $stmt = $this->conn->prepare("SELECT * FROM $table_name WHERE (home=$homeHide OR away=$homeHide OR home=$awayHide OR away=$awayHide) and datum = '$datum'");
        $stmt->execute();
        if ($stmt->fetchColumn() > 0) {
            $sql = "UPDATE $table_name SET $columns WHERE $pk_name=$pk_value";
            $stmt = $this->conn->prepare($sql);
            if ($stmt->execute()) {
                echo "success";
            };
        } else {
            $stmt1 = $this->conn->prepare("SELECT * FROM $table_name WHERE (home=$home OR away=$home OR home=$away OR away=$away OR home=$homeHide OR away=$homeHide OR home=$awayHide OR away=$awayHide) and datum = '$datum'");

            $stmt1->execute();
            if ($stmt1->fetchColumn() > 0) {
                echo "unsuccess";
            } else {
                $sql1 = "UPDATE $table_name SET $columns WHERE $pk_name=$pk_value";
                $stmt1 = $this->conn->prepare($sql1);
                if ($stmt1->execute()) {
                    echo "success";
                };
            }
        }*/
    }


    /*public function updateRowResults($table_name, $columns, $pk_name, $pk_value, $home, $away, $datum)
    {
        //$stmt = $this->conn->prepare("SELECT * FROM $table_name WHERE (home=$home OR away=$home OR home=$away OR away=$away) and datum = '$datum'");

        $stmt = $this->conn->prepare("SELECT *,if((home=$home OR away=$home OR home= $away OR away= $away) and datum ='$datum','IZIGRANA','neizigrana') AS uslov
        FROM $table_name");

        $stmt->execute();
        if ($stmt->fetchColumn() > 0) {
            echo "unsuccess";
        } else {
            $sql = "UPDATE $table_name SET $columns WHERE $pk_name=$pk_value and $uslov='neizigrana'";
            $stmt = $this->conn->prepare($sql);
            if ($stmt->execute()) {
                echo "success";
            };
        }
    }*/

    /********************************************************************************************************** */

    public function deleteRow($table_name, $pk_name, $pk_value)
    {

        $sql = "DELETE FROM $table_name WHERE $pk_name=$pk_value";
        $stmt = $this->conn->prepare($sql);
        $stmt->execute();
    }
    public function selectFieldsRow($fields = '*', $table_name = "")
    {
        $sql = "SELECT $fields FROM $table_name ";
        $stmt = $this->conn->prepare($sql);
        $stmt->execute();
        return $stmt->fetchAll();
    }
    public function selectRow($table_name)
    {
        $sql = "SELECT * FROM $table_name ";
        $stmt = $this->conn->prepare($sql);
        $stmt->execute();
        return $stmt->fetchAll();
    }

    public function updateRow($table_name, $columns, $pk_name, $pk_value)
    {
        $sql = "UPDATE $table_name SET $columns WHERE $pk_name=$pk_value";
        $stmt = $this->conn->prepare($sql);
        if ($stmt->execute()) {
            echo "success";
        };
    }

    public function selectRowStoredProcedure($selectRowStoredProcedureName)
    {
        $stmt = $this->conn->prepare("call $selectRowStoredProcedureName()");
        $stmt->execute();
        return $stmt->fetchAll();
    }

    /**
     * @param mixed $storedProcedureName
     * @param mixed $params
     * 
     * @return [type]
     */
    public function callStoredProcedure($storedProcedureName, $params)
    {
        $stmt = $this->conn->prepare("call $storedProcedureName($params)");
        $stmt->execute();
        return $stmt->fetchAll();
    }
}
