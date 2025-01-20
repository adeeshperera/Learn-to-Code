public class MathExamples {
    public static void main(String[] args) {
        // Example 1: Finding the absolute value of a number
        int negativeNumber = -17;
        int absValue = Math.abs(negativeNumber); // absValue = 17
        System.out.println("Absolute value of " + negativeNumber + " is: " + absValue);

        // Example 2: Finding the square root of a number
        double number = 16;
        double sqrtValue = Math.sqrt(number); // sqrtValue = 4.0
        System.out.println("Square root of " + number + " is: " + sqrtValue);

        // Example 3: Finding the maximum of two numbers
        int num1 = 12;
        int num2 = 7;
        int maxValue = Math.max(num1, num2); // maxValue = 12
        System.out.println("Maximum of " + num1 + " and " + num2 + " is: " + maxValue);

        // Example 4: Calculating 10 to the power of 3
        double base = 10;
        double exponent = 3;
        double powerValue = Math.pow(base, exponent); // powerValue = 1000.0
        System.out.println(base + " to the power of " + exponent + " is: " + powerValue);
    }
}
