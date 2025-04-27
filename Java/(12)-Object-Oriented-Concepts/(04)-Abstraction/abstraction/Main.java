package abstraction;

// Test abstraction
public class Main {
    public static void main(String[] args) {
        Mammal mammal = new Mammal();
        mammal.makeSound(); // Outputs: Some mammal sound.
        mammal.breathe(); // Outputs: Breathing air.
    }
}