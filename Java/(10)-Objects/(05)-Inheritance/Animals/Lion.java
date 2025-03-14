package Animals;

// This class extends Mammal, meaning it inherits its public and protected members
public class Lion extends Mammal {
    // This method is specific to Lion and not available in Mammal
    public void roar() {
        System.out.println("roar");
    }
}
