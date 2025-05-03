package encapsulation;

// Test encapsulation
public class Main {
    public static void main(String[] args) {
        Lion simba = new Lion("Simba", 1, "small");
        simba.displayDetails();
        simba.setName("Simba the Brave"); // Using setter to modify name
        System.out.println("Updated Name: " + simba.getName()); // Using getter to access name
    }
}