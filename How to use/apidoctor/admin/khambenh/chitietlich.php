<?php
	include('../../connect/connect.php');
	$id = $_GET['id'];
  $luat = $mysqli->query("SELECT
	hdxetnghiem.idhdxetnghiem,
	nguoidung.hovaten,
    nguoidung.ngaysinh,
    nguoidung.sodienthoai,
    nguoidung.email,
    nguoidung.diachi,
    nguoidung.nghenghiep,
    gioitinh.gioitinh,
	dichvu.tendichvu,
	hdxetnghiem.ngay,
	ca.thoigian,
	benhvien.tenbenhvien,
    bacsi.tenbacsi,
	trangthailichkham.tentrangthai
	FROM hdxetnghiem, nguoidung, dichvu,ca, benhvien,trangthailichkham, bacsi, gioitinh
	WHERE
	hdxetnghiem.idnguoidung = nguoidung.idnguoidung
	AND hdxetnghiem.iddichvu = dichvu.iddichvu
	AND hdxetnghiem.idca = ca.idca
	and hdxetnghiem.idbenhvien = benhvien.idbenhvien
	AND hdxetnghiem.idtrangthailichkham = trangthailichkham.idtrangthailichkham
    AND hdxetnghiem.idbacsi = bacsi.idbacsi
    and gioitinh.idgioitinh = nguoidung.idgioitinh
    AND hdxetnghiem.idhdxetnghiem =$id");
	while ($row = $luat->fetch_object()){		
	    $luat_chittiet[] = $row;
	}
	echo json_encode($luat_chittiet);


?>
