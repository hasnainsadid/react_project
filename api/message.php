<?php 
    
    require 'config.php';

    $msg = json_decode(file_get_contents("php://input"));

    if(isset($msg->data->name) && !empty($msg->data->name) && isset($msg->data->email) && !empty($msg->data->email) ){
        $name =  $msg->data->name;
        $email =  $msg->data->email;
        $subject =  $msg->data->subject;
        $message =  $msg->data->message;

        $sql = "INSERT INTO `inquiry`(`id`, `name`, `email`, `subject`, `message`, `status`, `date_created`) VALUES (NULL, '$name', '$email', '$subject', '$message', 0, now())";
    $db->query($sql);

    if($db->affected_rows>0){
        echo json_encode(["msg"=>"Message Sent Successfully."]);
    } else {
        echo json_encode(["msg"=>"Message Not Sent"]);
    }
    } else {
        echo json_encode(["msg"=>"Empty Field Not allowed"]);
    }

?>