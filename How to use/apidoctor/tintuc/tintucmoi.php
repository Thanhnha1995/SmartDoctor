<?php
//collection
include('../connect/connect.php');
	$collection = $mysqli->query("SELECT * FROM tintuc ORDER by Id DESC LIMIT 0,1
  ");
	
	while ($row = $collection->fetch_object()){
	    $product[] = $row;
	}

	echo (json_encode($product));
	
?>