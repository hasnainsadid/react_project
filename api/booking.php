<?php 
    
    require 'config.php';

    $msg = json_decode(file_get_contents("php://input"));

    if(isset($msg->data->name) && !empty($msg->data->name) && isset($msg->data->email) && !empty($msg->data->email) ){
        $name =  $msg->data->name;
        $email =  $msg->data->email;
        $phone =  $msg->data->phone;
        $package =  $msg->data->package;
        $schedule =  $msg->data->schedule;

        $sql = "INSERT INTO `book_list`(`id`, `name`, `email`, `phone_no`, `package_id`, `status`, `schedule`, `date_created`) VALUES (NULL, '$name', '$email', '$phone', '$package', 0, '$schedule', NOW())";
    $db->query($sql);

    if($db->affected_rows>0){
        echo json_encode(["msg"=>"Booked Successfully."]);
    } else {
        echo json_encode(["msg"=>"Error"]);
    }
    } else {
        echo json_encode(["msg"=>"Empty Field Not allowed"]);
    }

?>