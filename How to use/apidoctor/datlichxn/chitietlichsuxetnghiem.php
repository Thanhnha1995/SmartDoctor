<?php
	include('../connect/connect.php');
	$id = $_GET['id'];
	$luat = $mysqli->query("SELECT  hdxetnghiem.mahdxn, hdxetnghiem.ngay, dichvu.tendichvu, dichvu.giatien, benhvien.tenbenhvien, benhvien.diachi, benhvien.dienthoai, ca.thoigian FROM hdxetnghiem,benhvien,dichvu,ca WHERE hdxetnghiem.iddichvu=dichvu.iddichvu AND hdxetnghiem.idbenhvien=benhvien.idbenhvien AND hdxetnghiem.idca=ca.idca AND hdxetnghiem.idhdxetnghiem=$id");
	while ($row = $luat->fetch_object()){		
	    $luat_chittiet[] = $row;
	}
	echo json_encode($luat_chittiet);


?>
