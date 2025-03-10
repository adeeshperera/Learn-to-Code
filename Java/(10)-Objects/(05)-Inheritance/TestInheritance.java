import Animals.Lion;

// This is where we test the inheritance functionality
public class TestInheritance {
    public static void main(String[] args) {
        // Create an instance of Lion
        Lion lion = new Lion();

        // Access the inherited method from Mammal
        boolean hasHairOrFur = lion.hasHairOrFur(); // This will be true, as inherited from Mammal
        System.out.println(hasHairOrFur); // Output: true

        // Call the method specific to Lion
        lion.roar(); // Outputs "roar"
    }
}
