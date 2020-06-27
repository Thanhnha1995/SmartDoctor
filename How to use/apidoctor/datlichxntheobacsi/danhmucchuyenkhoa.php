<?php
	include('../connect/connect.php');
	$id = $_GET['id'];
	$luat = $mysqli->query("SELECT chuyenkhoa.tenchuyenkhoa, chuyenkhoa.idchuyenkhoa FROM benhvien, chuyenkhoa WHERE chuyenkhoa.idbenhvien = benhvien.idbenhvien AND chuyenkhoa.idbenhvien =$id");
	while ($row = $luat->fetch_object()){		
	    $luat_chittiet[] = $row;
	}
	echo json_encode($luat_chittiet);


?>
