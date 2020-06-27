<?php
	include('../../connect/connect.php');
	$id = $_GET['id'];
	$luat = $mysqli->query("SELECT p.id,p.tentintuc as tentintuc,p.hinhanh,p.noidung FROM tintuc p  where p.Id=$id");
	while ($row = $luat->fetch_object()){		
	    $luat_chittiet[] = $row;
	}
	echo json_encode($luat_chittiet);


?>
