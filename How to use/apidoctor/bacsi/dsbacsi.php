<?php
//collection
include('../connect/connect.php');
	$collection = $mysqli->query("SELECT bacsi.idbacsi, chuyenkhoa.tenchuyenkhoa, benhvien.tenbenhvien, bacsi.hinhanh, bacsi.tenbacsi, bacsi.sobenhnhandagiup, bacsi.namkinhnghiem, bacsi.catuvan, bacsi.thongtin, bacsi.trinhdohocvan, bacsi.bangcapchungchi FROM bacsi,benhvien,chuyenkhoa WHERE bacsi.idchuyenkhoa=chuyenkhoa.idchuyenkhoa AND bacsi.idbenhvien= benhvien.idbenhvien");
	
	while ($row = $collection->fetch_object()){
	    $product[] = $row;
	}

	echo (json_encode($product));
	
?>