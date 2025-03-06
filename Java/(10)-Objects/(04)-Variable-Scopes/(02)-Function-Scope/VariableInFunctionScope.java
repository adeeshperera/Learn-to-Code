public class VariableInFunctionScope {
    public void print() {
        // name is not visible here; it is not defined in this method
        // System.out.println(name); // Uncommenting this line will cause a compilation error
    }

    private void printNameTenTimes() {
        // Method-level variable (visible only within this method)
        String name = "my name";

        for (int i = 0; i < 10; i++) {
            // Loop (can access method-level variable)
            System.out.println(name);
        }
    }
}
