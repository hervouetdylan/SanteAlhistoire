<?php
require_once 'DbHandler.php';

class Names {
    private $dbHandler;

    public function __construct()
    {
        $this->dbHandler = new DbHandler;
    }

    public function getNames()
    {
        $result = $this->dbHandler->GetRandomInfo();
        return $result[0]['name'] ?? null;
    }
}
