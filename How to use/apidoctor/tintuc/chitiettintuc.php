<?php
	include('../connect/connect.php');
	$id = $_GET['id'];
	$luat = $mysqli->query("SELECT p.Id,p.tentintuc as TenTinTuc,p.Hinhanh,p.Noidung FROM tintuc p  where p.Id=$id");
	while ($row = $luat->fetch_object()){		
	    $luat_chittiet[] = $row;
	}
	echo json_encode($luat_chittiet);


?>
