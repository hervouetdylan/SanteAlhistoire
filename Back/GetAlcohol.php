<?php

require_once 'DbHandler.php';

class GetAlcohol {
    private $dbHandler;

    public function __construct() {
        $this->dbHandler = new DbHandler;
    }

    public function getAlcohol()
    {
        $result = $this->dbHandler->GetRandomInfo();
        return $result ?? null;
    }
}

$getAlcohol = new GetAlcohol();
$response = $getAlcohol->getAlcohol();

header('Content-Type: application/json');
echo json_encode($response);