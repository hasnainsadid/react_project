<?php
require 'config.php';
	$allTestimonial = $db->query("SELECT * FROM testimonial");
		if(mysqli_num_rows($allTestimonial) > 0){
			while($row = $allTestimonial->fetch_assoc()){
				$viewjson["id"] = $row['id'];
				$viewjson["name"] = $row['name'];
				$viewjson["profession"] = $row['profession'];
				$viewjson["details"] = $row['details'];
				$viewjson["img"] = $row['img'];
				$viewjson["status"] = $row['status'];
				$json_array[] = $viewjson;
			}
			echo json_encode(["success"=>true,"testimoniallist"=>$json_array]);
			return;
		}
		else{
			echo json_encode(["success"=>false]);
			return;
		}
?> 