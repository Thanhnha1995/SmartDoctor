<?php
	include('../connect/connect.php');
	$id = $_GET['id'];
	$luat = $mysqli->query("SELECT traloicauhoi.idtraloicauhoi, bacsi.tenbacsi, bacsi.hinhanh, datcauhoi.tendatcauhoi, traloicauhoi.noidung, trangthaitraloicauhoi.tentrangthai, nguoidung.hovaten FROM traloicauhoi, bacsi, datcauhoi, trangthaitraloicauhoi, nguoidung WHERE traloicauhoi.idbacsi = bacsi.idbacsi AND traloicauhoi.iddatcauhoi = datcauhoi.iddatcauhoi AND traloicauhoi.idtrangthaitraloicauhoi = trangthaitraloicauhoi.idtrangthaitraloicauhoi AND trangthaitraloicauhoi.idtrangthaitraloicauhoi =2 and datcauhoi.idnguoidung = nguoidung.idnguoidung AND datcauhoi.iddatcauhoi = traloicauhoi.iddatcauhoi =$id");
	while ($row = $luat->fetch_object()){		
	    $luat_chittiet[] = $row;
	}
	echo json_encode($luat_chittiet);
?>
