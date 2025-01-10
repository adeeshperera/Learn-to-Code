// import (03)-Calling-Functions.Example.Greeting;

public class HelloWorld {
    public static void main(String[] args) {
        // Create an instance of Greeting
        Greeting greeting = new Greeting();

        // Call the hello() method of Greeting and print the result
        System.out.println(greeting.hello()); // System.out.println(new Greeting().hello());
    }
}
