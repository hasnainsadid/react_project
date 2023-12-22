<?php
require 'config.php';
	$allPackage = $db->query("SELECT * FROM packages");
		if(mysqli_num_rows($allPackage) > 0){
			while($row = $allPackage->fetch_assoc()){
				$viewjson["id"] = $row['id'];
				$viewjson["title"] = $row['title'];
				$viewjson["tour_location"] = $row['tour_location'];
				$viewjson["cost"] = $row['cost'];
				$viewjson["description"] = $row['description'];
				$viewjson["upload_path"] = $row['upload_path'];
				$viewjson["status"] = $row['status'];
				$json_array[] = $viewjson;
			}
			echo json_encode(["success"=>true,"packagelist"=>$json_array]);
			return;
		}
		else{
			echo json_encode(["success"=>false]);
			return;
		}
?> 