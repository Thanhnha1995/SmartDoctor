<?php

include('../connect/connect.php');

	$limit = 3;
	$page = isset($_GET['page'])?$_GET['page']:1;
	settype($page, "int");
	$offset = ($page - 1) * $limit;

	$collection = $mysqli->query("SELECT * FROM chuyenkhoa");
	
	while ($row = $collection->fetch_object()){
	    $product[] = $row;
	}

	echo (json_encode($product));
	
?>