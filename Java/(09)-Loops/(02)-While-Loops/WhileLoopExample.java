public class WhileLoopExample {
    public static void main(String[] args) {
        // Example 01
        // Initialize the variable
        int i = 2;

        // Loop while 'i' is less than or equal to 8
        while (i <= 8) {
            // Print the current value of 'i'
            System.out.println(i);
            // Increment 'i' by 2
            i += 2;
        }

        // Example 02
        // Initialize variables
        int number = 1;
        int sum = 0;

        // Loop while 'number' is less than or equal to 5
        while (number <= 5) {
            // Add 'number' to 'sum'
            sum += number;
            // Increment 'number' by 1
            number++;
        }

        // Print the result
        System.out.println("Sum of numbers from 1 to 5 is: " + sum);
    }
}
