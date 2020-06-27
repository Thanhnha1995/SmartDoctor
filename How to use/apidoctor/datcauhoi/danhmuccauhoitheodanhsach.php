<?php
	include('../connect/connect.php');
	$id = $_GET['id'];
	$luat = $mysqli->query("SELECT 
  traloicauhoi.idtraloicauhoi, 
  bacsi.tenbacsi, 
  bacsi.hinhanh, 
  datcauhoi.tendatcauhoi, 
  traloicauhoi.noidung, 
  trangthaitraloicauhoi.tentrangthai, 
  danhmuccauhoi.tendanhmuccauhoi, 
  nguoidung.hovaten 
  FROM traloicauhoi, bacsi, datcauhoi, trangthaitraloicauhoi, danhmuccauhoi, nguoidung 
  WHERE traloicauhoi.idbacsi = bacsi.idbacsi 
  AND traloicauhoi.iddatcauhoi = datcauhoi.iddatcauhoi 
  AND traloicauhoi.idtrangthaitraloicauhoi = trangthaitraloicauhoi.idtrangthaitraloicauhoi 
  AND trangthaitraloicauhoi.idtrangthaitraloicauhoi =2
  and danhmuccauhoi.iddanhmuccauhoi=$id");
	while ($row = $luat->fetch_object()){		
	    $luat_chittiet[] = $row;
	}
	echo json_encode($luat_chittiet);


?>
