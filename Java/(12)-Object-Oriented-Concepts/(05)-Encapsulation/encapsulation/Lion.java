package encapsulation;

// Define a class Lion with encapsulation
public class Lion {
    // Private properties to restrict access
    private String name;
    private int age;
    private String size;

    // Constructor to initialize properties
    public Lion(String name, int age, String size) {
        this.name = name;
        this.age = age;
        this.size = size;
    }

    // Public method to access name (getter)
    public String getName() {
        return name;
    }

    // Public method to modify name (setter)
    public void setName(String name) {
        this.name = name;
    }

    // Method to display details
    public void displayDetails() {
        System.out.println("Name: " + name + ", Age: " + age + ", Size: " + size);
    }
}
