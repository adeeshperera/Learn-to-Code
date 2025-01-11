public class StringExamples {

    public static void main(String[] args) {
        // 1. Creating a String with double quotes
        String hello = "hello"; // Simple way to create a string
        System.out.println("hello = " + hello);

        // 2. Creating a String using the new keyword (not often used)
        String helloNew = new String("hello"); // Creating a string object with the new keyword
        System.out.println("helloNew = " + helloNew);

        // 3. Creating a String from a char array
        char[] chars = { 'h', 'e', 'l', 'l', 'o' };
        String helloFromChars = new String(chars); // Converting char array to String
        System.out.println("helloFromChars = " + helloFromChars);

        // 4. Getting the length of a String
        int length = "one two three".length(); // Getting the number of characters in the string
        System.out.println("Length of 'one two three' = " + length);

        // 5. Converting a String to a char array
        char[] charArray = "hello".toCharArray(); // Converting String to char array
        System.out.print("charArray = ");
        for (char c : charArray) { // for-each loop (Iterate over elements of an array or a collection)
            System.out.print(c + " "); // Printing each character in the char array
        }
        System.out.println(); // Prints an empty line

        // 6. Getting a substring from a String (Substring method is used to extract a part of a String based on specified indices)
        String substringFromFourth = "one two three".substring(4); // Getting substring starting from index 4
        System.out.println("Substring from index 4 = " + substringFromFourth);

        // 7. Getting a middle part of a String
        String middleSubstring = "one two three".substring(4, 7); // Getting substring from index 4 to 7 (not including 7)
        System.out.println("Substring from index 4 to 7 = " + middleSubstring);

        // 8. Checking if a String starts with a certain prefix
        boolean startsWith = "one two three".startsWith("one"); // Checking if the string starts with "one"
        System.out.println("Starts with 'one' = " + startsWith);

        // 9. Checking if a String ends with a certain suffix
        boolean endsWith = "one two three".endsWith("three"); // Checking if the string ends with "three"
        System.out.println("Ends with 'three' = " + endsWith);

        // 10. Replacing a substring within a String
        String replacedString = "one two three".replace("two", "too"); // Replacing "two" with "too"
        System.out.println("Replaced String = " + replacedString);

        // 11. Splitting a String into an array of parts
        String[] parts = "one two three".split(" "); // Splitting the string by space
        String first = parts[0]; // First part
        String second = parts[1]; // Second part
        String third = parts[2]; // Third part
        System.out.println("First part = " + first);
        System.out.println("Second part = " + second);
        System.out.println("Third part = " + third);
    }
}
