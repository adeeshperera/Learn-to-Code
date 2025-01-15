import java.util.LinkedHashMap;
import java.util.Map;

public class LinkedHashMapExample {
    public static void main(String[] args) {
        // Create a LinkedHashMap with String keys and Integer values
        Map<String, Integer> map = new LinkedHashMap<>();

        // Add key-value pairs to the map
        map.put("Ricky", 90);
        map.put("Lucy", 93);
        map.put("Fred", 80);
        map.put("Ethel", 91);

        // Print the map (insertion order is preserved)
        System.out.println("LinkedHashMap: " + map); // Output: LinkedHashMap: {Ricky=90, Lucy=93, Fred=80, Ethel=91}

        // Get the value for a specific key
        int score = map.get("Ethel");
        System.out.println("Score for Ethel: " + score); // Output: Score for Ethel: 91
    }
}
