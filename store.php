<?php
$servername="localhost";
$username="root";
$password="";
$dbname="codeditor_project";
$sto = mysqli_connect($servername,$username,$password,$dbname);

if($sto){
   echo "Connection Successful";
}
else{
    echo "Failed to Connect".mysqli_connect_error();
}
?>