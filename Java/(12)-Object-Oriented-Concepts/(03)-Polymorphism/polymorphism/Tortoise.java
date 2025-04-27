package polymorphism;

// Tortoise class implementing LandAnimal
public class Tortoise extends LandAnimal {
    @Override
    public void run() {
        System.out.println("Tortoise runs very slowly.");
    }
}