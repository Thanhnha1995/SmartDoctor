<?php
  include('../connect/connect.php');
	$ngay = $_GET['ngay'];
	$iddichvu = $_GET['iddichvu'];
	$luat = $mysqli->query("SELECT ca.thoigian as label, ca.idca as value FROM datlich,ca WHERE datlich.iddatlich=ca.iddatlich AND datlich.iddichvu=$iddichvu AND ngay=$ngay AND ca.soluong>0");
	while ($row = $luat->fetch_object()){		
	    $luat_chittiet[] = $row;
	}
	echo json_encode($luat_chittiet);
?>
