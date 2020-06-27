<?php
  include('../connect/connect.php');
	$id = $_GET['id'];
	$luat = $mysqli->query("SELECT xetnghiem.idxetnghiem, benhvien.tenbenhvien, benhvien.diachi, benhvien.dienthoai, benhvien.hinhanh, benhvien.gioithieu FROM xetnghiem,benhvien WHERE xetnghiem.idxetnghiem = benhvien.idxetnghiem AND xetnghiem.idxetnghiem =$id");
	while ($row = $luat->fetch_object()){		
	    $luat_chittiet[] = $row;
	}
	echo json_encode($luat_chittiet);
?>
