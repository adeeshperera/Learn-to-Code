public class OperatorPrecedenceExamples {

    public static void main(String[] args) {

        // Example 1: Operator Precedence with Multiplication and Addition
        int answer1 = 2 + 3 * 4;
        // Multiplication (*) has higher precedence than addition (+)
        // So, 3 * 4 is evaluated first which gives 12
        // Then 2 + 12 is evaluated which gives 14
        System.out.println("Example 1: 2 + 3 * 4 = " + answer1); // Output: 14

        // Example 2: Using Parentheses to Alter Precedence
        int answer2 = (2 + 3) * 4;
        // Parentheses alter precedence, so (2 + 3) is evaluated first which gives 5
        // Then 5 * 4 is evaluated which gives 20
        System.out.println("Example 2: (2 + 3) * 4 = " + answer2); // Output: 20

        // Example 3: Modulo and Addition
        int answer3 = 17 % 3 + 2;
        // Modulo (%) has higher precedence than addition (+)
        // So, 17 % 3 is evaluated first which gives 2
        // Then 2 + 2 is evaluated which gives 4
        System.out.println("Example 3: 17 % 3 + 2 = " + answer3); // Output: 4

        // Example 4: Using Parentheses with Modulo and Addition
        int answer4 = 17 % (3 + 2);
        // Parentheses alter precedence, so (3 + 2) is evaluated first which gives 5
        // Then 17 % 5 is evaluated which gives 2
        System.out.println("Example 4: 17 % (3 + 2) = " + answer4); // Output: 2
    }
}
