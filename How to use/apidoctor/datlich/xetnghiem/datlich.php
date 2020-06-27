<?php
//cart
use \Firebase\JWT\JWT;
require __DIR__ . '/../../vendor/autoload.php';
include('../../function.php');
include('../../connect/connect.php');
	$json = file_get_contents('php://input');
	$obj = json_decode($json, true);
	$key = "example_key";
	$token = $obj['token'];
	$idnguoidung = $obj['idnguoidung'];
	$iddichvu = $obj['iddichvu'];
	$ngay = $obj['ngay'];
	$giatien = $obj['giatien'];
	$idca = $obj['idca'];
	$mahdxn = $obj['mahdxn'];
  $idbenhvien = $obj['idbenhvien'];
  $idtrangthailichkham = $obj['idtrangthailichkham'];
try{
	$decoded = JWT::decode($token, $key, array('HS256'));
	if($decoded->expire < time()){
		echo 'HET_HAN';
	}
	else{
	echo	$sql = "INSERT INTO hdxetnghiem(
			idnguoidung,
			iddichvu,
			ngay,
			giatien,
			idca,
			mahdxn,
			idbenhvien,
      idtrangthailichkham 
			) VALUES('$idnguoidung','$iddichvu','$ngay','$giatien','$idca','$mahdxn','$idbenhvien','$idtrangthailichkham')";
			$result = $mysqli->query($sql);
			if($result){
				$array=array(
					"status" => true,
					"message" => "dat lich thanh cong",
			);
			}
			else{
				$array=array(
					"status" => false,
					"message" => "dat lich that bai",
			);
			}
	}
	print_r(json_encode($array));
}
catch(Exception $e){
	echo 'TOKEN_KHONG_HOP_LE';
}

?>