<?php
//collection
include('../connect/connect.php');
	$collection = $mysqli->query("SELECT ds.iddanhmuccauhoi as value, ds.tendanhmuccauhoi as label FROM danhmuccauhoi ds");
	
	while ($row = $collection->fetch_object()){
	    $product[] = $row;
	}

	echo (json_encode($product));
	
?>