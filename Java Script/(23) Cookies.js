<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Cookie Example</title>
<script>
// Function to create a cookie
function createCookie(name, value, days) {
    var expires;
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    } else {
        expires = "";
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

// Function to read a cookie
function readCookie(name) {
    var nameEQ = name + "=";
    var cookies = document.cookie.split(';');
    for(var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        while (cookie.charAt(0) == ' ') {
            cookie = cookie.substring(1, cookie.length);
        }
        if (cookie.indexOf(nameEQ) == 0) {
            return cookie.substring(nameEQ.length, cookie.length);
        }
    }
    return null;
}

// Function to delete a cookie
function eraseCookie(name) {
    createCookie(name, "", -1);
}

// Example usage
document.addEventListener("DOMContentLoaded", function() {
    // Creating a cookie named "username" with value "John" that expires in 1 day
    createCookie("username", "John", 1);
    
    // Reading the value of the "username" cookie
    var username = readCookie("username");
    console.log("Username:", username);
    
    // Deleting the "username" cookie
    eraseCookie("username");
    
    // Attempting to read the value of the "username" cookie after deletion
    var deletedUsername = readCookie("username");
    console.log("Deleted Username:", deletedUsername);
});
</script>
</head>
<body>
</body>
</html>

