<?php
//đăng kí
include('../../connect/connect.php');
$json = file_get_contents('php://input');
$obj = json_decode($json, true);
$id = $_GET['id'];
	$sql = "UPDATE ca SET soluong=soluong-1 WHERE idca=$id";
	$result = $mysqli->query($sql);
	?>