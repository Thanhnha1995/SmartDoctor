<?php

include('../../connect/connect.php');
	$collection = $mysqli->query("SELECT
	hdxetnghiem.idhdxetnghiem,
	nguoidung.hovaten,
    nguoidung.ngaysinh,
    nguoidung.sodienthoai,
	dichvu.tendichvu,
	hdxetnghiem.ngay,
	ca.thoigian,
	benhvien.tenbenhvien,
    bacsi.tenbacsi,
	trangthailichkham.tentrangthai
	FROM hdxetnghiem, nguoidung, dichvu,ca, benhvien,trangthailichkham, bacsi
	WHERE
	hdxetnghiem.idnguoidung = nguoidung.idnguoidung
	AND hdxetnghiem.iddichvu = dichvu.iddichvu
	AND hdxetnghiem.idca = ca.idca
	and hdxetnghiem.idbenhvien = benhvien.idbenhvien
	AND hdxetnghiem.idtrangthailichkham = trangthailichkham.idtrangthailichkham
    AND hdxetnghiem.idbacsi = bacsi.idbacsi
	AND hdxetnghiem.idtrangthailichkham =1");
	
	while ($row = $collection->fetch_object()){
	    $product[] = $row;
	}

	echo (json_encode($product));
	
?> 