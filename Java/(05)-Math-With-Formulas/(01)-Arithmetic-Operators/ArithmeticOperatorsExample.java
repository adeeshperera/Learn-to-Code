public class ArithmeticOperatorsExample {
    public static void main(String[] args) {
        // Addition
        // To get the sum of addends, use the '+' operator.
        int addend1 = 2;
        int addend2 = 3;
        int sum = addend1 + addend2; // sum = 5
        System.out.println("Sum: " + sum);

        // Subtraction
        // To get the difference between the minuend and the subtrahend, use the '-' operator.
        int minuend = 5;
        int subtrahend = 3;
        int difference = minuend - subtrahend; // difference = 2
        System.out.println("Difference: " + difference);

        // Multiplication
        // To get the product of the multiplicand and the multiplier, use the '*' operator.
        int multiplicand = 5;
        int multiplier = 3;
        int product = multiplicand * multiplier; // product = 15
        System.out.println("Product: " + product);

        // Division
        // To get the quotient of the dividend and the divisor, use the '/' operator.
        int dividend = 15;
        int divisor = 3;
        int quotient = dividend / divisor; // quotient = 5
        System.out.println("Quotient (int division): " + quotient);

        // For decimal answers, use float or double.
        // Here, we're using 'float' for a decimal quotient.
        int dividend2 = 17;
        int divisor2 = 4;
        float quotientFloat = (float) dividend2 / divisor2; // quotientFloat = 4.25
        System.out.println("Quotient (float division): " + quotientFloat);

        // Or use 'double' for a more precise decimal quotient.
        double quotientDouble = (double) dividend2 / divisor2; // quotientDouble = 4.25
        System.out.println("Quotient (double division): " + quotientDouble);

        // Modulo
        // Modulo gives the remainder of division using the '%' operator.
        int dividend3 = 17;
        int divisor3 = 3;
        int remainder = dividend3 % divisor3; // remainder = 2
        System.out.println("Remainder: " + remainder);
    }
}
