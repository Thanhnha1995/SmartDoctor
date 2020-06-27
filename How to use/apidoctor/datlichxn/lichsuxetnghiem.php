<?php
  include('../connect/connect.php');
  $ixetnghiem = $_GET['id'];
  $idnguoidung = $_GET['idnnguoidung'];
	$luat = $mysqli->query("SELECT dichvu.iddichvu, dichvu.hinhanh, dichvu.tendichvu, dichvu.mota, dichvu.giatien, dichvu.tenkhac, dichvu.muctieu, dichvu.doituong, dichvu.huongdan, dichvu.chitiet, danhmuc.tendanhmuc, benhvien.tenbenhvien, benhvien.diachi, benhvien.dienthoai FROM dichvu,danhmuc, benhvien WHERE dichvu.iddanhmuc = danhmuc.iddanhmuc AND dichvu.idbenhvien = benhvien.idbenhvien AND dichvu.iddichvu=$id");
	while ($row = $luat->fetch_object()){		
	    $luat_chittiet[] = $row;
	}
	echo json_encode($luat_chittiet);
?>
