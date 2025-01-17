import java.util.ArrayList;
import java.util.Collections;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

public class Main {
    public static void main(String[] args) {
        // Print Variable Values
        // Primitives
        int intValue = 10;
        double doubleValue = 20.5;
        char charValue = 'A';
        boolean booleanValue = true;
        long longValue = 100000L;

        System.out.println("Primitive Variables:");
        System.out.println("int: " + intValue);
        System.out.println("double: " + doubleValue);
        System.out.println("char: " + charValue);
        System.out.println("boolean: " + booleanValue);

        // Check min and max values of type Long
        System.out.println("Long Min Value: " + Long.MIN_VALUE);
        System.out.println("Long Max Value: " + Long.MAX_VALUE);

        // Strings
        // Create a String sentence
        String sentence = "The quick brown fox jumps over the lazy dog";
        System.out.println("\nString Operations:");

        // Print out the sentence length
        System.out.println("Sentence length: " + sentence.length());

        // Replace the third word in the sentence
        String[] words = sentence.split(" ");
        if (words.length > 2) {
            words[2] = "black";
            String newSentence = String.join(" ", words);
            System.out.println("Modified Sentence: " + newSentence);
        }

        // Split the sentence into an array of its words
        String[] splitWords = sentence.split(" ");
        System.out.print("Array of words: ");
        for (String word : splitWords) {
            System.out.print(word + " ");
        }
        System.out.println();

        // Print out the fourth word in the sentence
        if (splitWords.length > 3) {
            System.out.println("Fourth word: " + splitWords[3]);
        }

        // Dates
        // Create a new Date representing right now
        Date currentDate = new Date();
        System.out.println("\nDate Operations:");

        // Print out the date variable
        System.out.println("Current Date: " + currentDate);

        // Get the month for the date variable
        // Months in Java Date are 0-based, so January is 0
        int month = currentDate.getMonth() + 1; // Adding 1 to make it human-readable (1-based)
        System.out.println("Current Month: " + month);

        // Lists
        // Create an ArrayList of type Integer
        ArrayList<Integer> numbers = new ArrayList<>();
        numbers.add(34);
        numbers.add(7);
        numbers.add(23);
        numbers.add(45);
        numbers.add(12);

        System.out.println("\nArrayList Operations:");

        // Print the list before sorting
        System.out.println("List before sorting: " + numbers);

        // Sort the list
        Collections.sort(numbers);

        // Print out the list after sorting
        System.out.println("List after sorting: " + numbers);

        // Maps
        // Create a Map with String keys and String values
        Map<String, String> addressBook = new HashMap<>();
        addressBook.put("John Doe", "123 Elm Street");
        addressBook.put("Jane Smith", "456 Oak Avenue");
        addressBook.put("Bob Johnson", "789 Pine Road");

        System.out.println("\nMap Operations:");

        // Print out the map
        System.out.println("Address Book: " + addressBook);

        // Print out the size of the map
        System.out.println("Number of addresses in the book: " + addressBook.size());

        // Get an address for one of the names
        String address = addressBook.get("Jane Smith");
        System.out.println("Address for Jane Smith: " + address);
    }
}
