<?php
	include('../../connect/connect.php');
	$id = $_GET['id'];
	$luat = $mysqli->query("SELECT * FROM benhvien WHERE benhvien.idbenhvien=$id");
	while ($row = $luat->fetch_object()){		
	    $luat_chittiet[] = $row;
	}
	echo json_encode($luat_chittiet);


?>
    