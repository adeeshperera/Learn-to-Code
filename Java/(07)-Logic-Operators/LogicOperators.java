// Define a class named LogicOperatorsExample
public class LogicOperators {

    // Main method where execution begins
    public static void main(String[] args) {

        // == Equality Operator
        int i = 3;
        int j = 2;
        boolean bool = i == j; // b = false
        System.out.println("i == j: " + bool);

        // != Inequality Operator
        int a = 3;
        int b = 2;
        if (a != b) {
            System.out.println("a is not equal to b");
        }

        // < Less Than Operator
        int x = 3;
        int y = 5;
        if (x < y) {
            System.out.println("x is less than y");
        }

        // <= Less Than or Equal To Operator
        int m = 3;
        int n = 3;
        if (m <= n) {
            System.out.println("m is less than or equal to n");
        }

        // > Greater Than Operator
        int p = 7;
        int q = 4;
        if (p > q) {
            System.out.println("p is greater than q");
        }

        // >= Greater Than or Equal To Operator
        int r = 6;
        int s = 6;
        if (r >= s) {
            System.out.println("r is greater than or equal to s");
        }

        // && Logical AND Operator
        int num1 = 3, num2 = 7, num3 = 5, num4 = 5;
        if (num1 == num2 && num3 < num4) {
            System.out.println("Both conditions are true");
        }

        // || Logical OR Operator
        int num5 = 2;
        int num6 = 8;
        if (num5 > 5 || num6 < 10) {
            System.out.println("At least one condition is true");
        }

        // ! Logical NOT Operator
        int value1 = 1;
        int value2 = 2;
        boolean result = !(value1 > value2); // result = true
        System.out.println("!(value1 > value2): " + result);

        // Operator Precedence
        // && is evaluated before || unless there are parentheses
        int x1 = 1, y1 = 2, z1 = 3, w1 = 1;
        if (x1 == w1 || y1 == z1 && z1 == 5) { // && (AND) has higher precedence than || (OR), so y1 == z1 && z1 == 5 is evaluated first
            System.out.println("This code will execute");
        }
        if ((x1 == w1 || y1 == z1) && z1 == 5) { // Parentheses () ensure that x1 == w1 || y1 == z1 is evaluated first
            System.out.println("Now it will not execute");
        }
    }
}
