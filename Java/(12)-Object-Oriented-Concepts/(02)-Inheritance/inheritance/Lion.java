package inheritance;

// Lion class inherits from Mammal
public class Lion extends Mammal {
    private String name;
    private int age;
    private String size;

    public Lion(String name, int age, String size) {
        this.name = name;
        this.age = age;
        this.size = size;
    }

    public void roar() {
        System.out.println(name + " says: Roar!");
    }

    public void run() {
        System.out.println(name + " is running.");
    }

    public void sleep() {
        System.out.println(name + " is sleeping.");
    }

    public void displayDetails() {
        System.out.println("Name: " + name + ", Age: " + age + ", Size: " + size);
    }
}