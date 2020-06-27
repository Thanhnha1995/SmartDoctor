<?php
use \Firebase\JWT\JWT;
require __DIR__ . '/../../vendor/autoload.php';
include('../../function.php');
include('../../connect/connect.php');
	$json = file_get_contents('php://input');
	$obj = json_decode($json, true);
	$key = "example_key";
  $token = $obj['token'];
  $id = $_GET['id'];
	$tentintuc = $obj['tentintuc'];
	$hinhanh = $obj['hinhanh'];
	$noidung = $obj['noidung'];

try{
	$decoded = JWT::decode($token, $key, array('HS256'));
	if($decoded->expire < time()){
		echo 'HET_HAN';
	}
	else{
 
		$sql = "UPDATE tintuc SET
    tentintuc= '$tentintuc',
    hinhanh ='$hinhanh',
    noidung ='$noidung'
    where id='$id'";
			$result = $mysqli->query($sql);
			if($result){
				$array=array(
					"status" => true,
					"message" => "dang tin thanh cong"
			);
			}
			else{
				$array=array(
					"status" => false,
					"message" => "dang tin that bai",
			);
			}
	}
	print_r(json_encode($array));
}
catch(Exception $e){
	echo 'TOKEN_KHONG_HOP_LE';
}

?>