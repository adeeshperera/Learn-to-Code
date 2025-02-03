import java.util.Arrays;
import java.util.Iterator;
import java.util.List;

public class IteratorExample {
    public static void main(String[] args) {
        // Create a list of strings
        List<String> names = Arrays.asList("Ricky", "Lucy", "Fred", "Ethel");

        // Obtain an iterator for the list (Creates an Iterator object)
        // The iterator() method provides a way to access the elements of the list one by one
        Iterator<String> iterator = names.iterator();

        // Iterate through the list using the iterator
        while (iterator.hasNext()) { // iterator.hasNext() checks if there is another element to iterate over
            // Print each element
            System.out.println(iterator.next()); // iterator.next() gets the next element in the list
        }
    }
}
