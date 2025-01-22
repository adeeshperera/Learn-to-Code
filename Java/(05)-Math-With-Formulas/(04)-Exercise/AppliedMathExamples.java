public class AppliedMathExamples {

    public static void main(String[] args) {
        // Example 1: Calculate the area of a triangle
        double base = 10; // base of the triangle
        double height = 15; // height of the triangle

        // Area formula: (base * height) / 2
        double area = (base * height) / 2;
        System.out.println("The area of the triangle is: " + area);

        // Example 2: Calculate the future value of $10,000 earning 8% interest per year for 20 years
        double PV = 10000; // Present value
        double annualInterestRate = 0.08; // 8% interest rate
        int years = 20; // Number of years

        // Future value formula: FV = PV * (1 + i)^n
        double FV1 = PV * Math.pow((1 + annualInterestRate), years);
        System.out.println("The future value of $10,000 at 8% interest over 20 years is: " + FV1);

        // Example 3: Calculate the future value of $500 per month earning 8% interest per year for 20 years
        double PMT = 500; // Monthly payment
        double monthlyInterestRate = annualInterestRate / 12; // Monthly interest rate
        int totalMonths = years * 12; // Total number of months

        // Future value formula for monthly payments: FV = PMT * [(1 + i)^n - 1] / i
        double FV2 = PMT * (Math.pow((1 + monthlyInterestRate), totalMonths) - 1) / monthlyInterestRate;
        System.out.println("The future value of $500 per month at 8% interest over 20 years is: " + FV2);
    }
}
