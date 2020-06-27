<?php

include('../../connect/connect.php');
	$collection = $mysqli->query("SELECT
  bacsi.idbacsi,
  bacsi.email,
  chuyenkhoa.tenchuyenkhoa,
  benhvien.tenbenhvien,
  bacsi.hinhanh,
  bacsi.tenbacsi,
  bacsi.thongtin,
  bacsi.sodienthoai
  FROM bacsi, chuyenkhoa, benhvien
  WHERE
  bacsi.idchuyenkhoa = chuyenkhoa.idchuyenkhoa
  AND bacsi.idbenhvien = benhvien.idbenhvien");
	
	while ($row = $collection->fetch_object()){
	    $product[] = $row;
	}

	echo (json_encode($product));
	
?> 