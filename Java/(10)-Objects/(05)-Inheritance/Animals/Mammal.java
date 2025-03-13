package Animals;

// This is the parent class
public class Mammal {
    // Private field; not accessible directly by subclasses
    private boolean hairOrFur = true;

    // Public method to access the private field
    public boolean hasHairOrFur() {
        return hairOrFur;
    }
}
