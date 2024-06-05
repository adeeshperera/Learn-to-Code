<?php

// Loop through all the cookies stored on the server
foreach ($_COOKIE as $key => $value) {
    // Print out the name and value of each cookie
    echo "Cookie Name: " . $key . ", Value: " . $value . "<br>";
}

?>

