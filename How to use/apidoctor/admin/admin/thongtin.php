<?php
 header("Access-Control-Allow-Origin: *");
//dang nhap
use \Firebase\JWT\JWT;
require __DIR__ . '/../../vendor/autoload.php';
include('../../function.php');
include('../../connect/connect.php');
$key = "example_key";
$json = file_get_contents('php://input');
$obj = json_decode($json, true);
$id = $_GET['id'];
$sql = "SELECT
admin.id,
admin.email,
admin.matkhau,
admin.hovaten,
admin.ngaysinh,
admin.diachi,
admin.sodienthoai,
admin.gioitinh,
chucvu.tenchucvu
FROM admin, chucvu
WHERE admin.idchucvu = chucvu.idchucvu and admin.id =$id";
$result = $mysqli->query($sql);
$user = mysqli_fetch_assoc($result);
if($user){
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