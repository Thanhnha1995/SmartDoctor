<?php
//đăng kí
include('../connect/connect.php');
$json = file_get_contents('php://input');
$obj = json_decode($json, true);
$email= $obj['email'];
$matkhau = md5($obj['matkhau']);
$idchuyenkhoa = $obj['idchuyenkhoa'];
$idbenhvien= $obj['idbenhvien'];
$hinhanh = $obj['hinhanh'];
$tenbacsi = $obj['tenbacsi'];
$sobenhnhandagiup = $obj['sobenhnhandagiup'];
$namkinhnghiem = $obj['namkinhnghiem'];
$catuvan	 = $obj['catuvan'];
$thongtin = $obj['thongtin'];
$trinhdohocvan = $obj['trinhdohocvan'];
$bangcapchungchi = $obj['bangcapchungchi'];
$iddichvu = $obj['iddichvu'];
$iddanhmuccauhoi = $obj['iddanhmuccauhoi'];
$idtrangthaihethong = $obj['idtrangthaihethong'];
$sodienthoai = $obj['sodienthoai'];
if($sodienthoai !='' && $email != '' && $matkhau!=''){
	
	$sql = "INSERT INTO bacsi(
		email,
		matkhau,
		idchuyenkhoa,
		idbenhvien,
		hinhanh,
		tenbacsi,
		sobenhnhandagiup,
		namkinhnghiem,
		catuvan,
		thongtin,
		trinhdohocvan,
		bangcapchungchi,
		iddichvu,
		iddanhmuccauhoi,
		idtrangthaihethong,
		sodienthoai
	) VALUES('$email','$matkhau','$idchuyenkhoa','$idbenhvien','$hinhanh','$tenbacsi','$sobenhnhandagiup','$namkinhnghiem','$catuvan','$thongtin','$trinhdohocvan','$bangcapchungchi','$iddichvu','$iddanhmuccauhoi	','$idtrangthaihethong','$sodienthoai')";
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