<?php
  include('../connect/connect.php');
	$idchuyenkhoa = $_GET['idchuyenkhoa'];
	$idbenhvien = $_GET['idbenhvien'];
	$luat = $mysqli->query("
	SELECT 
	bacsi.idbacsi, 
	chuyenkhoa.tenchuyenkhoa, 
	chuyenkhoa.idchuyenkhoa,
	benhvien.tenbenhvien, 
	benhvien.idbenhvien,
	bacsi.hinhanh, 
	bacsi.tenbacsi, 
	bacsi.sobenhnhandagiup, 
	bacsi.namkinhnghiem, 
	bacsi.catuvan, 
	bacsi.thongtin, 
	bacsi.trinhdohocvan, 
	bacsi.bangcapchungchi 
	FROM bacsi,benhvien,chuyenkhoa 
	WHERE bacsi.idchuyenkhoa=chuyenkhoa.idchuyenkhoa
	AND bacsi.idbenhvien= benhvien.idbenhvien
	AND chuyenkhoa.idchuyenkhoa =$idchuyenkhoa
	AND benhvien.idbenhvien =$idbenhvien
	");
	while ($row = $luat->fetch_object()){		
	    $luat_chittiet[] = $row;
	}
	echo json_encode($luat_chittiet);
?>
