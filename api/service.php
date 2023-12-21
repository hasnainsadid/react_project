<?php
require 'config.php';
	$allService = $db->query("SELECT * FROM services");
		if(mysqli_num_rows($allService) > 0){
			while($row = $allService->fetch_assoc()){
				$viewjson["id"] = $row['id'];
				$viewjson["title"] = $row['title'];
				$viewjson["details"] = $row['details'];
				$viewjson["cost"] = $row['cost'];
				$viewjson["status"] = $row['status'];
				$json_array[] = $viewjson;
			}
			echo json_encode(["success"=>true,"servicelist"=>$json_array]);
			return;
		}
		else{
			echo json_encode(["success"=>false]);
			return;
		}
?> 