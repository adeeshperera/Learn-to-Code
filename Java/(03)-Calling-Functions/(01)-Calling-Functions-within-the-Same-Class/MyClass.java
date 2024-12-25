public class MyClass {

    // Function to get a message based on a name
    public String getMessage(String name) {
        return "Hello, " + name + "!";
    }

    public static void main(String[] args) {
        // Create an instance of MyClass
        MyClass obj = new MyClass();

        // Calling getMessage function directly
        String message1 = obj.getMessage("Alice");
        System.out.println(message1); // Output: Hello, Alice!

        // Calling getMessage function using 'this' keyword (though not necessary here)
        String message2 = obj.getMessage("Bob");
        System.out.println(message2); // Output: Hello, Bob!
    }
}
