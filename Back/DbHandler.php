<?php 

class DbHandler  {
    private $name;
    private $user;
    private $password;
    private $host;
    public function __construct(){
        $this->name = "santéalhistoire";
        $this->user = "root";
        $this->password = "";
        $this->host = "127.0.0.1";

    }
    public function dbConnection() {
        try 
        {
            $dbconnection = new mysqli($this->host, $this->user, $this->password, $this->name);
        } catch (Exception $e) {
            die ('Erreur  : ' . $e->getMessage());
        }
        return $dbconnection;
    }
    public function GetRandomInfo() {
        $db = $this->dbConnection();
        $sql = 'SELECT * FROM alcohol ORDER BY RAND() LIMIT 1';
        $resultQuery = $db->query($sql);
        $row = $resultQuery->fetch_assoc();
        $data = array(
            "date" => $row['DateOfCreation'],
            "name" => $row['Name'],
        );
        
        return $data;
    }
}
?>
