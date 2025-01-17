import java.util.HashMap;
import java.util.Map;

public class MapExamples {

    public static void main(String[] args) {
        // Example 1: Using a Map with arbitrary key-value types
        Map<Object, Object> arbitraryMap = new HashMap<>();
        arbitraryMap.put(1, "hello"); // Integer key with String value
        arbitraryMap.put("hi", 26); // String key with Integer value
        arbitraryMap.put(true, "yes"); // Boolean key with String value

        System.out.println("Arbitrary Map: " + arbitraryMap);
        // Output: Arbitrary Map: {1=hello, hi=26, true=yes}

        // Example 2: Using a Map with String keys and Integer values
        Map<String, Integer> scoreMap = new HashMap<>();
        scoreMap.put("Ricky", 90); // String key with Integer value
        scoreMap.put("Lucy", 93);
        scoreMap.put("Fred", 80);
        scoreMap.put("Ethel", 91);

        System.out.println("Score Map: " + scoreMap);
        // Output: Score Map: {Ethel=91, Fred=80, Lucy=93, Ricky=90}

        // Example 3: Retrieving a value from the map
        int lucyScore = scoreMap.get("Lucy"); // Gets the value associated with key "Lucy"
        System.out.println("Lucy’s score: " + lucyScore);
        // Output: Lucy’s score: 93

        // Example 4: Replacing a value in the map
        scoreMap.put("Ricky", 89); // Updates the value for key "Ricky"
        int rickyScore = scoreMap.get("Ricky"); // Gets the updated value for key "Ricky"
        System.out.println("Updated Ricky’s score: " + rickyScore);
        // Output: Updated Ricky’s score: 89
    }
}
