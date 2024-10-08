
<?php

include("store.php");

// Enable error reporting
error_reporting(E_ALL);
ini_set('display_errors', 1);

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Use $_POST to retrieve form data
    $nm = $_POST['username'];
    $em = $_POST['email'];
    $pw = $_POST['password'];
    $cpw = $_POST['confirm_password'];

    // Check if the passwords match
    if ($pw === $cpw) {

        // Hashing the password
        $hashed_password = password_hash($pw, PASSWORD_DEFAULT);

        // Insert data into the USER table
        $query = "INSERT INTO user (username, email, password, confirm_password) VALUES ('$nm', '$em', '$hashed_password', '$hashed_password')";

        $data = mysqli_query($sto, $query);

        // Check if data insertion was successful
        if ($data) {
            echo "Data Submitted Successfully";
        } else {
            echo "Failed to Submit Data: " . mysqli_error($sto);
        }
    } else {
        echo "Passwords do not match. Please try again.";
    }
}

?>  

