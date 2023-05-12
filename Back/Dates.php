<?php

require_once 'DbHandler.php';

class Dates {
    private $dbHandler;

    public function __construct() {
        $this->dbHandler = new DbHandler;
    }

    public function getDates()
    {
        $result = $this->dbHandler->GetRandomInfo();
        return $result[0]['date'] ?? null;
    }
}
