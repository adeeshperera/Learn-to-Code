package polymorphism;

// Test polymorphism
public class Main {
    public static void main(String[] args) {
        LandAnimal cheetah = new Cheetah(); // Provides flexibility and uses polymorphism to handle various types of LandAnimal
        LandAnimal tortoise = new Tortoise();
        // Cheetah cheetah = new Cheetah();: Is specific to Cheetah and limits the reference to methods and properties of Cheetah only

        cheetah.run(); // Outputs: Cheetah runs very fast.
        tortoise.run(); // Outputs: Tortoise runs very slowly.
    }
}