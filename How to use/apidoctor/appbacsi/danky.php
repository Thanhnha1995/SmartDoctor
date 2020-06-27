<?php
use \Firebase\JWT\JWT;
require __DIR__ . '/../vendor/autoload.php';
include('../function.php');
include('../connect/connect.php');
	$json = file_get_contents('php://input');
	$obj = json_decode($json, true);
  $hovaten= $obj['hovaten'];
$email = $obj['email'];
$cauhoi = $obj['cauhoi'];
if($email !=''){
	$sql = "INSERT INTO dangkybs(
	hovaten,
	email,
  cauhoi
	) VALUES('$hovaten','$email','$cauhoi')";
	$result = $mysqli->query($sql);
	if($result){
		$array=array(
			"status" => true,
			"message" => "danng ky thanh cong",
	);
	}
	else{
		$array=array(
			"status" => false,
			"message" => "email va mat khau ton tai",
	);
	}
}
print_r(json_encode($array));
?>