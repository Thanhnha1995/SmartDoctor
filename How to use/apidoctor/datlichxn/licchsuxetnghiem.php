<?php
	include('../connect/connect.php');
	$id = $_GET['id'];
	$luat = $mysqli->query("SELECT hdxetnghiem.idhdxetnghiem, hdxetnghiem.ngay, hdxetnghiem.giatien, dichvu.tendichvu, dichvu.hinhanh FROM hdxetnghiem, dichvu WHERE hdxetnghiem.iddichvu = dichvu.iddichvu AND hdxetnghiem.idnguoidung =$id");
	while ($row = $luat->fetch_object()){		
	    $luat_chittiet[] = $row;
	}
	echo json_encode($luat_chittiet);


?>
