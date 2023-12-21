<?php
require 'config.php';
	$allTeam = $db->query("SELECT * FROM instructor");
		if(mysqli_num_rows($allTeam) > 0){
			while($row = $allTeam->fetch_assoc()){
				$viewjson["id"] = $row['id'];
				$viewjson["name"] = $row['name'];
				$viewjson["designation"] = $row['designation'];
				$viewjson["img"] = $row['img'];
				$viewjson["status"] = $row['status'];
				$json_array[] = $viewjson;
			}
			echo json_encode(["success"=>true,"teamlist"=>$json_array]);
			return;
		}
		else{
			echo json_encode(["success"=>false]);
			return;
		}
?> 