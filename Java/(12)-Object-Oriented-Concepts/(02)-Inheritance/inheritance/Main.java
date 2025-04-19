package inheritance;

// Main class to test the Lion class with inheritance
public class Main {
    public static void main(String[] args) {
        Lion simba = new Lion("Simba", 1, "small");
        simba.displayDetails();
        simba.breath(); // Inherited method
        simba.roar();
    }
}