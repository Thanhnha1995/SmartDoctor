<?php
	include('../connect/connect.php');
	$id = $_GET['id'];
	$luat = $mysqli->query("SELECT
  datcauhoi.iddatcauhoi,
  datcauhoi.iddatcauhoi,
  datcauhoi.tendatcauhoi,
  danhmuccauhoi.tendanhmuccauhoi,
  nguoidung.hovaten,
  trangthaitraloicauhoi.tentrangthai
  FROM datcauhoi, danhmuccauhoi, nguoidung,trangthaitraloicauhoi
  WHERE
  datcauhoi.iddanhmuccauhoi = danhmuccauhoi.iddanhmuccauhoi
  and datcauhoi.idnguoidung= nguoidung.idnguoidung
  AND datcauhoi.idtrangthaitraloicauhoi = trangthaitraloicauhoi.idtrangthaitraloicauhoi
  AND datcauhoi.idnguoidung=$id");
	while ($row = $luat->fetch_object()){		
	    $luat_chittiet[] = $row;
	}
	echo json_encode($luat_chittiet);


?>
