import java.io.File;

public class FileExampleOnAntherObj {
    public static void main(String[] args) {
        // Create a File object representing the file named "sample.txt"
        File file = new File("sample.txt");

        // Call the exists() method on the file object to check if the file exists
        if (file.exists()) {
            System.out.println("The file exists");
        } else {
            System.out.println("The file does not exist");
        }
    }
}
