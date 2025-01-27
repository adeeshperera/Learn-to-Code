import java.util.Arrays;
import java.util.List;

public class ForLoopExamples {

    public static void main(String[] args) {

        // Incrementing Example
        System.out.println("Incrementing Example:");
        for (int i = 0; i < 5; i++) {
            // Print the current value of i
            System.out.println(i);
        }
        System.out.println(); // Print a blank line for separation

        // Incrementing by 2 Example
        System.out.println("Incrementing by 2 Example:");
        for (int i = 2; i <= 8; i += 2) {
            // Print the current value of i
            System.out.println(i);
        }
        System.out.println(); // Print a blank line for separation

        // Decrementing Example
        System.out.println("Decrementing Example:");
        for (int i = 5; i > 0; i--) {
            // Print the current value of i
            System.out.println(i);
        }
        System.out.println(); // Print a blank line for separation

        // Iterating Through a Collection (Enhanced For Loop)
        System.out.println("Iterating Through a Collection (Enhanced For Loop):");
        List<String> names = Arrays.asList("Ricky", "Lucy", "Fred", "Ethel"); // Converts an array of elements into a List
        for (String name : names) {
            // Print each name in the list
            System.out.println(name);
        }
        System.out.println(); // Print a blank line for separation

        // Iterating Through a Collection Using Index
        System.out.println("Iterating Through a Collection Using Index:");
        for (int i = 0; i < names.size(); i++) {
            // Print the index and the corresponding name from the list
            System.out.println(i + " = " + names.get(i));
        }
    }
}
