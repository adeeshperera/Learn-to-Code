public class VariableInClassScope {
    // Class-level variable (visible throughout the class)
    private String name;

    public VariableInClassScope() {
        // Constructor (can access class-level variables)
        name = "my name";
    }

    public String getName() {
        // Method (can access class-level variables)
        return name;
    }

    private void printNameTenTimes() {
        // Method (can access class-level variables)
        for (int i = 0; i < 10; i++) {
            // Loop (can access class-level variables)
            System.out.println(name);
        }
    }
}
