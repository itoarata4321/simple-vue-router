<?php
$dsn = sprintf('mysql:host=%s;', 'db');
$user = 'root';
$dbh = new PDO($dsn, $user, 'password');
$sql = "SELECT version();";
foreach ($dbh->query($sql, PDO::FETCH_ASSOC) as $row) {
	print_r($row);
}
// $sql = "show tables;";
$sql = "show databases;";
foreach ($dbh->query($sql, PDO::FETCH_ASSOC) as $row) {
	var_dump($row);
	echo "<br>";
}
