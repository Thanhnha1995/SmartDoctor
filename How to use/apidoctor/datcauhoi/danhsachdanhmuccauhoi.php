<?php
//collection
include('../connect/connect.php');
	$collection = $mysqli->query("SELECT * FROM danhmuccauhoi");
	
	while ($row = $collection->fetch_object()){
	    $product[] = $row;
	}

	echo (json_encode($product));
	
?>