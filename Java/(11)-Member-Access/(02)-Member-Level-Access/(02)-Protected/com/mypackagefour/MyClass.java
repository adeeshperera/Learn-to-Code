// The protected access modifier allows access within the same package and subclasses (even if they are in different packages)
package com.mypackagefour;

public class MyClass {
    protected String name = "John"; // Protected variable

    protected String sayHello() { // Protected method
        return "hello";
    }
}
