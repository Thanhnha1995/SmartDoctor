<?php
  include('../connect/connect.php');
	$ngay = $_GET['ngay'];
	$idbacsi = $_GET['idbacsi'];
	$luat = $mysqli->query("
	SELECT 
	cabacsi.thoigian as label, 
	cabacsi.idcabacsi as value 
	FROM datlichbacsi,cabacsi
	WHERE datlichbacsi.iddatlichbacsi=cabacsi.iddatlichbacsi 
	AND datlichbacsi.idbacsi=$idbacsi 
	AND ngay=$ngay AND cabacsi.soluong>0
	");
	while ($row = $luat->fetch_object()){		
	    $luat_chittiet[] = $row;
	}
	echo json_encode($luat_chittiet);
?>
         


