public class BracketScope {
    public static void main(String[] args) {
        {
            // Bracket scope
            String letters = "abcdefg";

            if (letters.length() > 0) {
                // letters is visible here
                char[] chars = letters.toCharArray();
                // chars is visible here
                System.out.println(chars.length);
            }
            // letters is still visible here
            System.out.println(letters);
        }
        // letters is not visible here
        // System.out.println(letters); // Uncommenting this line will cause a compilation error
    }
}
