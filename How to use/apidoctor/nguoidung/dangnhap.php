<?php
//dang nhap
use \Firebase\JWT\JWT;
require __DIR__ . '/../vendor/autoload.php';
include('../function.php');
include('../connect/connect.php');

$key = "example_key";
$json = file_get_contents('php://input');
$obj = json_decode($json, true);
$email = $obj['email'];
$matkhau = md5($obj['matkhau']);
$sql = "SELECT 
u.idnguoidung,
u.hovaten,
u.idgioitinh,
u.ngaysinh,
u.diachi,
u.sodienthoai,
u.nghenghiep,
u.socmnd,
u.masobnxh,
u.cannang,
u.chieucao,
u.bmi,
u.idnhommau,
u.tinhtrangbenhly,
u.diungvacacphanung,
u.cachsudungthuoc,
u.email FROM nguoidung u where email = '$email' and matkhau = '$matkhau'";
$result = $mysqli->query($sql);
$user = mysqli_fetch_assoc($result);


if($user){
	$jwt = getToken($email);
	$array=array(
			"status" => true,
			"message" => "Successfully Login",
			'token'=>$jwt,
			'user'=>$user
	);
}
else{
	$array=array(
			"status" => false,
			"message" => "Invalid Username or Password",
	);
}
print_r(json_encode($array));

?>