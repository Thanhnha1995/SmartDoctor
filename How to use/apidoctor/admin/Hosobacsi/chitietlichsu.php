<?php
	include('../../connect/connect.php');
	$id = $_GET['id'];
  $luat = $mysqli->query("SELECT
  bacsi.idbacsi,
  bacsi.email,
  bacsi.ngaysinh,
  chuyenkhoa.tenchuyenkhoa,
  benhvien.tenbenhvien,
  bacsi.hinhanh,
  bacsi.tenbacsi,
  bacsi.thongtin,
  bacsi.sodienthoai
  FROM bacsi, chuyenkhoa, benhvien
  WHERE
  bacsi.idchuyenkhoa = chuyenkhoa.idchuyenkhoa
  AND bacsi.idbenhvien = benhvien.idbenhvien
  AND bacsi.idbacsi=$id");
	while ($row = $luat->fetch_object()){		
	    $luat_chittiet[] = $row;
	}
	echo json_encode($luat_chittiet);


?>
