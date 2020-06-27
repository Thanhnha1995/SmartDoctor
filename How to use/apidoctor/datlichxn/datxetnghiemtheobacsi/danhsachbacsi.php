<?php
	include('../../connect/connect.php');
	$id = $_GET['id'];
	$luat = $mysqli->query("SELECT bacsi.idbacsi, chuyenkhoa.tenchuyenkhoa, benhvien.tenbenhvien, bacsi.hinhanh, bacsi.tenbacsi, bacsi.sobenhnhandagiup, bacsi.namkinhnghiem, bacsi.catuvan, bacsi.thongtin, bacsi.trinhdohocvan, bacsi.bangcapchungchi FROM bacsi,benhvien,chuyenkhoa WHERE bacsi.idchuyenkhoa=chuyenkhoa.idchuyenkhoa AND bacsi.idbenhvien= benhvien.idbenhvien AND benhvien.idbenhvien=$id");
	while ($row = $luat->fetch_object()){		
	    $luat_chittiet[] = $row;
	}
	echo json_encode($luat_chittiet);


?>
