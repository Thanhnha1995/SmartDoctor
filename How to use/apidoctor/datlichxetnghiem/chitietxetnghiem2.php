<?php
  include('../connect/connect.php');
	$id = $_GET['id'];
	$luat = $mysqli->query("SELECT dichvu.idxetnghiem, dichvu.hinhanh, xetnghiem.tendichvu, xetnghiem.mota, xetnghiem.giatien, xetnghiem.tenkhac, xetnghiem.muctieu, xetnghiem.doituong, xetnghiem.huongdan, xetnghiem.chitiet, danhmuc.tendanhmuc, benhvien.tenbenhvien, benhvien.diachi, benhvien.dienthoai FROM xetnghiem,danhmuc, benhvien WHERE xetnghiem.iddanhmuc = danhmuc.iddanhmuc AND xetnghiem.idbenhvien = benhvien.idbenhvien AND xetnghiem.idxetnghiem=$id");
	while ($row = $luat->fetch_object()){		
	    $luat_chittiet[] = $row;
	}
	echo json_encode($luat_chittiet);
?>
