<?php
	include('../connect/connect.php');
	$limit = 3;
	$page = isset($_GET['page'])?$_GET['page']:1;
	settype($page, "int");
	$offset = ($page - 1) * $limit;
  $iddichvu = $_GET['iddichvu'];
	$luat = $mysqli->query("select bacsi.tenbacsi, bacsi.hinhanh, bacsi.catuvan, chuyenkhoa.tenchuyenkhoa, benhvien.tenbenhvien, bacsi.idbacsi FROM bacsi, chuyenkhoa, benhvien, dichvu WHERE bacsi.idchuyenkhoa = chuyenkhoa.idchuyenkhoa AND bacsi.idbenhvien = benhvien.idbenhvien AND dichvu.iddichvu =$iddichvu LIMIT $offset,$limit");
	while ($row = $luat->fetch_object()){		
	    $luat_chittiet[] = $row;
	}
	echo json_encode($luat_chittiet);


?>




