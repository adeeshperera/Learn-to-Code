import java.util.Hashtable;
import java.util.Map;

public class HashtableExample {
    public static void main(String[] args) {
        // Create a Hashtable with String keys and Integer values
        Map<String, Integer> map = new Hashtable<>();

        // Add key-value pairs to the map
        map.put("Ricky", 90);
        map.put("Lucy", 93);
        map.put("Fred", 80);
        map.put("Ethel", 91);

        // Print the map
        System.out.println("Hashtable: " + map); // Output: Hashtable: {Ricky=90, Lucy=93, Fred=80, Ethel=91}

        // Get the value for a specific key
        int score = map.get("Ricky");
        System.out.println("Score for Ricky: " + score); // Output: Score for Ricky: 90
    }
}
