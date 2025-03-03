public class StringEqualityExample {
    public static void main(String[] args) {
        // Create two different String instances with the same content
        String a = new String("hello");
        String b = new String("hello");

        String c = a;

        // Using == checks if both references point to the same object (They are different objects)
        System.out.println("a == b: " + (a == b)); // Output: false

        // Using .equals checks if the content of the objects is the same (The content "hello" is the same)
        System.out.println("a.equals(b): " + a.equals(b)); // Output: true

        System.out.println("a == c: " + (a == c)); // Output: true (Refer to the same String object)
        System.out.println("a.equals(c): " + a.equals(c)); // Output: true
    }
}
