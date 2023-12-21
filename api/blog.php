<?php
require 'config.php';
	$allBlog = $db->query("SELECT * FROM blog");
		if(mysqli_num_rows($allBlog) > 0){
			while($row = $allBlog->fetch_assoc()){
				$viewjson["id"] = $row['id'];
				$viewjson["title"] = $row['title'];
				$viewjson["details"] = $row['details'];
				$viewjson["img"] = $row['img'];
				$viewjson["status"] = $row['status'];
				$json_array[] = $viewjson;
			}
			echo json_encode(["success"=>true,"bloglist"=>$json_array]);
			return;
		}
		else{
			echo json_encode(["success"=>false]);
			return;
		}
?> 