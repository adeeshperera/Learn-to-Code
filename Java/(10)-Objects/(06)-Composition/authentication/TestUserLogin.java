package authentication;

public class TestUserLogin {
    public static void main(String[] args) {
        UserService userService = new UserService();
        Login login = userService.authenticate("test@test.com", "testpassword");
        User user = (User) login;
        System.out.println("Hello, " + user.getName());
    }
}
