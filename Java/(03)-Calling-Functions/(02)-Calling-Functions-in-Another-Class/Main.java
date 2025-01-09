// import (03)-Calling-Functions.(02)-Calling-Functions-in-Another-Class.Another;  // Package name of Another

// Main class to demonstrate calling function from Another class
public class Main {
    // main method - entry point of the program
    public static void main(String[] args) {
        // Create an instance of Another class
        Another other = new Another(); // Creates a new instance of Another class

        // Call getMessage method from Another class instance
        String name = "Alice"; // Example name
        String message = other.getMessage(name); // Calls getMessage method with 'Alice' as argument

        // Print the message returned by getMessage method
        System.out.println(message); // Outputs the message to the console
    }
}
