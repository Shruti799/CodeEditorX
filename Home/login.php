<?php
session_start(); // Start the session

include("store.php");

// Enable error reporting for debugging
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Check if the form is submitted
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Retrieve the username and password from the form
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Query to fetch the user from the database
    $query = "SELECT * FROM user WHERE username = '$username'";
    $result = mysqli_query($sto, $query);

    // Checking if the user exists
    if (mysqli_num_rows($result) > 0) {
        // Fetch user data
        $user = mysqli_fetch_assoc($result);

        // Verifing the password using password_verify
        if (password_verify($password, $user['password'])) {
            // Password is correct, set session variables
            $_SESSION['username'] = $username;
            // Redirect to the home page
            header("Location: home.html");
            exit();
        } else {
            echo "Invalid password. Please try again.";
        }
    } else {
        echo "User not found. Please check your username.";
    }
}
?>
