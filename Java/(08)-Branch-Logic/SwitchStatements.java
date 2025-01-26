// Define a class to determine season based on month using a switch statement
public class SwitchStatements {

    // Method to determine and print season based on month
    public void detectSeason(int month) {
        String season;

        switch (month) {
        case 11: // December
        case 0: // January
        case 1: // February
            season = "Winter";
            break;
        case 2: // March
        case 3: // April
        case 4: // May
            season = "Spring";
            break;
        case 5: // June
        case 6: // July
        case 7: // August
            season = "Summer";
            break;
        case 8: // September
        case 9: // October
        case 10: // November
            season = "Fall";
            break;
        default:
            season = "Unknown";
        }

        System.out.println("The month " + month + " is in " + season);
    }

    // Example usage in main method
    public static void main(String[] args) {
        SwitchStatements detector = new SwitchStatements();

        // Test cases
        detector.detectSeason(5); // Output: The month 5 is in Summer
        detector.detectSeason(11); // Output: The month 11 is in Winter
        detector.detectSeason(8); // Output: The month 8 is in Fall
        detector.detectSeason(15); // Output: The month 15 is in Unknown
    }
}
