<?php
include("store.php");
error_reporting(0);

// if (isset($_POST['submit'])) {
//     $nm = $_POST['username'];
//     $em = $_POST['email'];
//     $pw = $_POST['password'];
//     $cpw = $_POST['confirm_password'];

//     // Check if passwords match
//     if ($pw === $cpw) {
//         // Use prepared statements to avoid SQL injection
//         $stmt = $sto->prepare("INSERT INTO USER (username, email, password) VALUES (?, ?, ?)");
//         $stmt->bind_param("sss", $nm, $em, $pw);

//         if ($stmt->execute()) {
//             echo "Data Submitted";
//         } else {
//             echo "Failed to Submit: " . $stmt->error;
//         }

//         $stmt->close();
//     } else {
//         echo "Passwords do not match.";
//     }
// }

// $sto->close();
?>

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sign Up</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #8f8fcc;
            background-size: cover;
            text-align: center;
        }

        .container {
            max-width: 330px;
            margin: 3% auto;
            padding: 18px;
            background-color: white;
            border: 6px ;
            margin-top: 7px;
        }

        h1 {
            color: #1c8adb;
            font-size: 27px;
        }
        
        form {
            text-align: left;
        }

        label {
            display: block;
            margin-top: 8px;
            color: black;
        }

        input[type="text"],
        input[type="password"],
        input[type="email"] {
            width: 93%;
            padding: 9px 9px;
            margin-top: 4px;
            margin-bottom: 5px;
            border: 1px solid #999;
            outline: none;
            border-radius: 12px;
        }
        

        input[type="submit"] {
            background-color: #007BFF;
            margin-top: 10px;
            margin-left: 96px;
            color: white;
            border: none;
            padding: 8px 50px;
            border-radius: 5px;
            cursor: pointer;
        }

        input[type="submit"]:hover {
            background-color: #4c98e8;
        }
        .header {
            text-align: left;
            color: whitesmoke;
            padding: 10px;
            border-radius: 10px;
            margin: 0;
            margin-top: -20px;
        }
    </style>
</head>
<body>
    <div class="header">
        <h2>&copy; CodeEditorX</h2>
    </div>
    <div class="container">
        <img src="icon1.png" style="width:70px; margin-top: -50px;">
        <h1>Sign Up</h1>
        <form action="store.php" method="post">
            <input type="text" id="username" name="username" placeholder="Username" required>
            <input type="email" id="email" name="email" placeholder="Your Email" required>
            <input type="password" id="password" name="password" placeholder="Password" required>
            <input type="password" id="confirm_password" name="confirm_password" placeholder="Confirm Password" required>
            <p><span><input type="checkbox" name=""></span> I agree to the Terms and Conditions</p>
            <input type="submit" name="submit" value="Sign Up">
        </form>
    </div>
</body>
</html>

<?php
$nm=$_GET['username'];
$em=$_GET['email'];
$pw=$_GET['password'];
$cpw=$_GET['confirm_password'];

$query="INSERT INTO USER VALUES('$nm','$em','$pw','$cpw')";
$data=mysqli_query($sto,$query);

if($data){
    echo "Data Submitted";
}
else{
    echo "Failed to Submit";
}
?>   
