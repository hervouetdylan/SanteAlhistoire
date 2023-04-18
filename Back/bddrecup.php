<?php 
try 
{
    $dbconnection = new PDO('mysql:host=localhost:8000;dbname=santéalhistoire;charset=utf8', 'root', 'root');
} catch (Exception $e) {
    die ('Erreur  : ' . $e->getMessage());
}