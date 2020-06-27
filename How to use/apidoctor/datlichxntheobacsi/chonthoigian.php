<?php
  include('../connect/connect.php');
	$ngay = $_GET['ngay'];
  $idbacsi = $_GET['idbacsi'];
  $luat = $mysqli->query("
	SELECT ca.idca AS value,
	ca.thoigian AS label
	FROM LichBS,ca,datlich 
	WHERE LichBS.idbacsi=$idbacsi
	AND LichBS.idca=ca.idca 
	AND datlich.iddatlich=ca.iddatlich 
	AND datlich.ngay=$ngay
  ");
	while ($row = $luat->fetch_object()){		
	    $luat_chittiet[] = $row;
	}
	echo json_encode($luat_chittiet);
?>
