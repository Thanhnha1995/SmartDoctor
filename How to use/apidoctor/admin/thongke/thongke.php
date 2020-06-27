<?php
include('../../function.php');
include('../../connect/connect.php');
		$qr = $mysqli->query("SELECT COUNT(idnguoidung) as soluongnguoidung FROM nguoidung");
		while ($nguoidung = $qr->fetch_object()){
			$ds_nguoidung[] = $nguoidung;
		}
		
		$benhvien = $mysqli->query("SELECT COUNT(idbenhvien) as dsbenhvien FROM benhvien");
		while ($bv = $benhvien->fetch_object()){
			$ds_benhvien[] = $bv;
    }
    $tintuc = $mysqli->query("SELECT COUNT(id) as dstintuc FROM tintuc");
		while ($tt = $tintuc->fetch_object()){
			$ds_tintuc[] = $tt;
    }
    
    $array = array(
    'nguoidung'=>$ds_nguoidung, 
    'benhvien'=>$ds_benhvien,
    'tintuc'=>$ds_tintuc
  );
		echo json_encode($array);
	
?>