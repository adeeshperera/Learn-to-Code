package authentication;

import java.util.HashMap;
import java.util.Map;

// UserService is responsible for managing users and authenticating them.
public class UserService {
    // A static map to store user objects with their usernames as keys.
    private static Map<String, User> users = new HashMap<>();
    // The key is a username (String), and the value is a User object

    // Static block to initialize the user map with a sample user.
    static {
        User user = new User("Test", "test@test.com", "testpassword");
        users.put(user.getUsername(), user);
    }
    // What It Is: This block of code runs once when the UserService class is first used
    // Purpose: It creates a sample User object with the name, username, and password. Then, it adds this User to the users map, using the username as the key

    // Method to authenticate a user based on username and password.
    public Login authenticate(String username, String password) {
        // Retrieve the user object from the map using the provided username.
        User user = users.get(username);
        if (user != null && password.equals(user.getPassword())) {
            return user; // Return the user if the password matches.
        }
        // If user is not found or password is incorrect, throw an exception.
        throw new RuntimeException("User not found or incorrect password");
    }
}
