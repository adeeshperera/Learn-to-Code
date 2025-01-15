import java.util.HashMap;
import java.util.Map;

public class HashMapExample {
    public static void main(String[] args) {
        // Create a HashMap with arbitrary key-value types
        Map<Object, Object> map = new HashMap<>();

        // Add key-value pairs to the map
        map.put(1, "hello");
        map.put("hi", 26);
        map.put(true, "yes");

        // Print the map
        System.out.println("HashMap: " + map); // Output: HashMap: {1=hello, hi=26, true=yes}

        // Get the value for a specific key
        System.out.println("Value for key 'hi': " + map.get("hi")); // Output: Value for key 'hi': 26
    }
}
