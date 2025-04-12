// The private access modifier restricts access to members only within the same class
package com.mypackagesix;

public class MyClass {
    private String name = "John"; // Private variable

    private String sayHello() { // Private method
        return "hello";
    }

    // Public method to access private members within the same class
    public String canAccessSayHelloAndName() {
        return sayHello() + " " + name;
    }
}
