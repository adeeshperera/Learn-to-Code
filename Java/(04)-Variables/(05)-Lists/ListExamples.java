import java.util.ArrayList;
import java.util.List;
import java.util.Collections;

public class ListExamples {

    public static void main(String[] args) {

        // Example 1: Creating a list with different types of elements
        List<Object> mixedList = new ArrayList<>();
        mixedList.add(1); // Integer
        mixedList.add('a'); // Character
        mixedList.add("three"); // String
        mixedList.add(4.2f); // Float

        System.out.println("Mixed List: " + mixedList); // Output: [1, a, three, 4.2]

        // Example 2: Creating a list of integers
        List<Integer> intList = new ArrayList<>();
        intList.add(4);
        intList.add(2);
        intList.add(1);
        intList.add(3);

        System.out.println("Integer List: " + intList); // Output: [4, 2, 1, 3]

        // Sorting the list of integers
        Collections.sort(intList);
        System.out.println("Sorted Integer List: " + intList); // Output: [1, 2, 3, 4]

        // Example 3: Accessing elements in a list
        int thirdElement = intList.get(2); // Indexing starts from 0
        System.out.println("Third Element: " + thirdElement); // Output: 3

        // Example 4: Finding the index of an element
        int index = intList.indexOf(3); // Returns the index of the first occurrence of 3
        System.out.println("Index of 3: " + index); // Output: 2

        // Example 5: Getting the size of a list
        int size = intList.size();
        System.out.println("Size of Integer List: " + size); // Output: 4
    }
}
