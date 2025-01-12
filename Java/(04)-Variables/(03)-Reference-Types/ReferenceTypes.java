import java.time.LocalDate; // Import LocalDate class for date operations
import java.time.format.DateTimeFormatter; // Import DateTimeFormatter for date formatting
import java.time.format.FormatStyle; // Import FormatStyle for date formatting styles

public class ReferenceTypes { // Store references (or addresses) to objects (Include classes (String, Date, ArrayList), interfaces, arrays, enums, custom objects (Indirect Storage))
    public static void main(String[] args) {
        // 1. String Example
        String greeting = "Hello, World!"; // Declare and initialize a String
        System.out.println("Greeting: " + greeting);

        // 2. Date Example using LocalDate

        // Get the current date
        LocalDate now = LocalDate.now();
        System.out.println("Current Date: " + now); // e.g., 2024-08-08

        // Add 30 days to the current date
        LocalDate plus30Days = now.plusDays(30);
        System.out.println("Date after 30 days: " + plus30Days); // e.g., 2024-09-07

        // Get the month from the current date
        String month = now.getMonth().toString();
        System.out.println("Month: " + month); // e.g., AUGUST

        // Get the day of the week from the current date
        String day = now.getDayOfWeek().toString();
        System.out.println("Day of the Week: " + day); // e.g., THURSDAY

        // Get the day of the year from the current date
        int dayOfYear = now.getDayOfYear();
        System.out.println("Day of the Year: " + dayOfYear); // e.g., 221

        // Create a LocalDate from a String
        LocalDate parsedDate = LocalDate.parse("2021-05-29");
        System.out.println("Parsed Date: " + parsedDate); // e.g., 2021-05-29

        // Format a date
        DateTimeFormatter formatter = DateTimeFormatter.ofLocalizedDate(FormatStyle.FULL);
        String formattedDate = parsedDate.format(formatter);
        System.out.println("Formatted Date: " + formattedDate); // e.g., Saturday, May 29, 2021
    }
}
