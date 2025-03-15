package authentication;

// The User class implements both Person and Login interfaces, meaning it must provide implementations
// for all methods declared in these interfaces.
public class User implements Person, Login {
    private String name; // Name of the user
    private String username; // Username for login
    private String password; // Password for login

    // Constructor to initialize the User object with name, username, and password.
    public User(String name, String username, String password) {
        this.name = name;
        this.username = username;
        this.password = password;
    }

    // Implement the getName method from the Person interface.
    @Override
    public String getName() {
        return name;
    }

    // Implement the getUsername method from the Login interface.
    @Override
    public String getUsername() {
        return username;
    }

    // Implement the getPassword method from the Login interface.
    @Override
    public String getPassword() {
        return password;
    }
}
