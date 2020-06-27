<?php
	include('../connect/connect.php');
	$id = $_GET['id'];
	$luat = $mysqli->query("SELECT hdxetnghiem.idhdxetnghiem, hdxetnghiem.mahdxn, hdxetnghiem.ngay, hdxetnghiem.giatien, hdxetnghiem.mahdxn, nguoidung.hovaten, benhvien.tenbenhvien, benhvien.diachi, benhvien.dienthoai, dichvu.tendichvu, dichvu.giatien FROM dichvu, nguoidung, hdxetnghiem, benhvien WHERE nguoidung.idnguoidung = hdxetnghiem.idnguoidung AND hdxetnghiem.iddichvu = dichvu.iddichvu and hdxetnghiem.idbenhvien = benhvien.idbenhvien AND hdxetnghiem.idhdxetnghiem=$id");
	while ($row = $luat->fetch_object()){		
	    $luat_chittiet[] = $row;
	}
	echo json_encode($luat_chittiet);


?>
