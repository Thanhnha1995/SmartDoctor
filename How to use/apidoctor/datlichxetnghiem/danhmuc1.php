<?php
//collection
include('../connect/connect.php');
	$collection = $mysqli->query("SELECT * FROM danhmuc
  ");
	
	while ($row = $collection->fetch_object()){
	    $product[] = $row;
	}

	echo (json_encode($product));
	
?>
