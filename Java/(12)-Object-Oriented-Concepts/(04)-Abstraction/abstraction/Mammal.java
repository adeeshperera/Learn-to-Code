package abstraction;

// Define a class Mammal that extends Animal
public class Mammal extends Animal {
    @Override
    public void makeSound() {
        System.out.println("Some mammal sound.");
    }

    public void breathe() {
        System.out.println("Breathing air.");
    }
}