package classes;

// Define a class named Lion
public class Lion {
    // Properties of the Lion class
    private String name;
    private int age;
    private String size;

    // Constructor to initialize properties
    public Lion(String name, int age, String size) {
        this.name = name;
        this.age = age;
        this.size = size;
    }

    // Method to make the lion run
    public void run() {
        System.out.println(name + " is running.");
    }

    // Method to make the lion sleep
    public void sleep() {
        System.out.println(name + " is sleeping.");
    }

    // Method to make the lion roar
    public void roar() {
        System.out.println(name + " roars loudly.");
    }

    // Method to display lion's details
    public void displayDetails() {
        System.out.println("Name: " + name + ", Age: " + age + ", Size: " + size);
    }
}
