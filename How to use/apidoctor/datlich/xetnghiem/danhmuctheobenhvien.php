<?php
  include('../../connect/connect.php');
	$id = $_GET['id'];
	$luat = $mysqli->query("SELECT benhvien.idbenhvien, danhmuc.tendanhmuc, danhmuc.iddanhmuc FROM benhvien, danhmuc WHERE benhvien.idbenhvien=danhmuc.iddichvu AND benhvien.idbenhvien =$id");
	while ($row = $luat->fetch_object()){		
	    $luat_chittiet[] = $row;
	}
	echo json_encode($luat_chittiet);
?>
