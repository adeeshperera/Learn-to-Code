// Define a class to handle grading based on score
public class IfStatements {

    // Method to calculate and print grade based on score
    public void calculateGrade(int score) {
        if (score >= 90 && score <= 100) {
            System.out.println("You got an 'A'");
        } else if (score >= 80 && score < 90) {
            System.out.println("You got a 'B'");
        } else if (score >= 70 && score < 80) {
            System.out.println("You got a 'C'");
        } else if (score >= 60 && score < 70) {
            System.out.println("You got a 'D'");
        } else {
            System.out.println("You got an 'F'");
        }
    }

    // Example usage in main method
    public static void main(String[] args) {
        IfStatements calculator = new IfStatements();

        // Test cases
        calculator.calculateGrade(83); // Output: You got a 'B'
        calculator.calculateGrade(45); // Output: You got an 'F'
        calculator.calculateGrade(95); // Output: You got an 'A'
    }
}
