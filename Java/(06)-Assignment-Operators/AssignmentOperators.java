public class AssignmentOperators {

    public static void main(String[] args) {
        // Assignment operator =
        int number = 10; // Assigns the value 10 to the variable 'number'
        System.out.println("Assignment Operator: " + number); // Output: 10

        // Addition assignment operator +=
        number += 5; // Equivalent to: number = number + 5;
        System.out.println("Addition Assignment Operator: " + number); // Output: 15

        // Subtraction assignment operator -=
        number -= 3; // Equivalent to: number = number - 3;
        System.out.println("Subtraction Assignment Operator: " + number); // Output: 12

        // Multiplication assignment operator *=
        number *= 2; // Equivalent to: number = number * 2;
        System.out.println("Multiplication Assignment Operator: " + number); // Output: 24

        // Division assignment operator /=
        number /= 4; // Equivalent to: number = number / 4;
        System.out.println("Division Assignment Operator: " + number); // Output: 6

        // Modulo assignment operator %=
        number %= 4; // Equivalent to: number = number % 4;
        System.out.println("Modulo Assignment Operator: " + number); // Output: 2

        // Post-increment operator ++
        int count = 5;
        int result1 = count++; // result1 = 5, count = 6
        System.out.println("Post-increment Operator: " + result1 + ", " + count); // Output: 5, 6

        // Pre-increment operator ++
        int count2 = 3;
        int result2 = ++count2; // result2 = 4, count2 = 4
        System.out.println("Pre-increment Operator: " + result2 + ", " + count2); // Output: 4, 4

        // Post-decrement operator --
        int count3 = 8;
        int result3 = count3--; // result3 = 8, count3 = 7
        System.out.println("Post-decrement Operator: " + result3 + ", " + count3); // Output: 8, 7

        // Pre-decrement operator --
        int count4 = 6;
        int result4 = --count4; // result4 = 5, count4 = 5
        System.out.println("Pre-decrement Operator: " + result4 + ", " + count4); // Output: 5, 5
    }
}
