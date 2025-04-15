package classes;

// Create instances of Lion
public class Main {
    public static void main(String[] args) {
        // Create a Lion named Simba
        Lion simba = new Lion("Simba", 1, "small");
        simba.displayDetails();
        simba.run();
        simba.roar();

        // Create a Lion named Mufasa
        Lion mufasa = new Lion("Mufasa", 12, "big");
        mufasa.displayDetails();
        mufasa.sleep();
        mufasa.roar();
    }
}
