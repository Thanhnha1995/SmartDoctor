<?php
use \Firebase\JWT\JWT;
require __DIR__ . '/../vendor/autoload.php';
include('../function.php');
include('../connect/connect.php');
	$json = file_get_contents('php://input');
	$obj = json_decode($json, true);
	$key = "example_key";
	$token = $obj['token'];
$hovaten= $obj['hovaten'];
$idgioitinh = $obj['idgioitinh'];
$ngaysinh = $obj['ngaysinh'];
$diachi= $obj['diachi'];
$sodienthoai = $obj['sodienthoai'];
$nghenghiep = $obj['nghenghiep'];
$socmnd = $obj['socmnd'];
$masobnxh = $obj['masobnxh'];
$cannang	 = $obj['cannang'];
$chieucao = $obj['chieucao'];
$bmi = $obj['bmi'];
$idnhommau = $obj['idnhommau'];
$tinhtrangbenhly = $obj['tinhtrangbenhly'];
$diungvacacphanung = $obj['diungvacacphanung'];
$cachsudungthuoc = $obj['cachsudungthuoc'];
$email = $obj['email'];
$matkhau = md5($obj['matkhau']);
if($email !=''){
	
	$sql = "INSERT INTO nguoidung(
	hovaten,
	idgioitinh,
	ngaysinh,
	diachi,
	sodienthoai,
	nghenghiep,
	socmnd,
	masobnxh,
	cannang,
	chieucao,
	bmi,
	idnhommau,
	tinhtrangbenhly,
	diungvacacphanung,
	cachsudungthuoc,
	email,
	matkhau
	) VALUES('$hovaten','$idgioitinh','$ngaysinh','$diachi','$sodienthoai','$nghenghiep','$socmnd','$masobnxh','$cannang','$chieucao','$bmi','$idnhommau','$tinhtrangbenhly','$diungvacacphanung','$cachsudungthuoc','$email','$matkhau')";
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