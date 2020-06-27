<?php
	include('../connect/connect.php');
	$id = $_GET['id'];
	$luat = $mysqli->query("sELECT
  nguoidung.idnguoidung,
  nguoidung.hovaten,
  nguoidung.ngaysinh,
  nguoidung.diachi,
  nguoidung.sodienthoai,
  nguoidung.nghenghiep,
  nguoidung.socmnd,
  nguoidung.masobnxh,
  nguoidung.cannang,
  nguoidung.chieucao,
  nguoidung.bmi,
  nguoidung.tinhtrangbenhly,
  nguoidung.diungvacacphanung,
  nguoidung.cachsudungthuoc,
  gioitinh.gioitinh,
  nhommau.tennhommau
  FROM nguoidung, gioitinh,  nhommau
  WHERE nguoidung.idgioitinh = gioitinh.idgioitinh AND  nguoidung.idnhommau = nhommau.idnhommau AND nguoidung.idnguoidung=$id");
	while ($row = $luat->fetch_object()){		
	    $luat_chittiet[] = $row;
	}
	echo json_encode($luat_chittiet);


?>



