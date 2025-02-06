import java.io.File; // Import the File class from the java.io package

public class FileExample {
    public static void main(String[] args) {
        // Create a new File object representing 'sample.txt' in the current directory
        File file = new File("sample.txt");

        // Print the absolute path of the file
        System.out.println("File path: " + file.getAbsolutePath());
    }
}
