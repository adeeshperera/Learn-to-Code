import java.util.Map;
import java.util.TreeMap;

public class TreeMapExample {
    public static void main(String[] args) {
        // Create a TreeMap with String keys and Integer values
        Map<String, Integer> map = new TreeMap<>();

        // Add key-value pairs to the map
        map.put("Ricky", 90);
        map.put("Lucy", 93);
        map.put("Fred", 80);
        map.put("Ethel", 91);

        // Print the map (sorted by keys)
        System.out.println("TreeMap: " + map); // Output: TreeMap: {Ethel=91, Fred=80, Lucy=93, Ricky=90}

        // Get the value for a specific key
        int score = map.get("Lucy");
        System.out.println("Score for Lucy: " + score); // Output: Score for Lucy: 93
    }
}
