<?php
//cart
use \Firebase\JWT\JWT;
require __DIR__ . '/../vendor/autoload.php';
include('../function.php');
include('../connect/connect.php');
	$json = file_get_contents('php://input');
	$obj = json_decode($json, true);
	$key = "example_key";
	$token = $obj['token'];
  $tendatcauhoi = $obj['tendatcauhoi'];
  $iddanhmuccauhoi	 = $obj['iddanhmuccauhoi'];
	$idnguoidung = $obj['idnguoidung'];
	$idtrangthaitraloicauhoi=$obj['idtrangthaitraloicauhoi'];


try{
	$decoded = JWT::decode($token, $key, array('HS256'));
	if($decoded->expire < time()){
		echo 'HET_HAN';
	}
	else{
		$sql = "INSERT INTO datcauhoi(
			tendatcauhoi,
			iddanhmuccauhoi,
			idnguoidung,
			idtrangthaitraloicauhoi
			) VALUES('$tendatcauhoi','$iddanhmuccauhoi','$idnguoidung','$idtrangthaitraloicauhoi')";
			$result = $mysqli->query($sql);
			if($result){
				$array=array(
					"status" => true,
					"message" => "dat cau hoi thanh cong",
			);
			}
			else{
				$array=array(
					"status" => false,
					"message" => "dat cau hoi that bai",
			);
			}
	}
	print_r(json_encode($array));
}
catch(Exception $e){
	echo 'TOKEN_KHONG_HOP_LE';
}

?>