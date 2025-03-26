package com.someotherpackage; // Package declaration

import com.mypackage.MyClass; // Import statement to access MyClass from another package

public class SomeOtherClass {
    public static void main(String[] args) {
        // Creating an instance of MyClass and calling its method
        System.out.println(new MyClass().sayHello()); // Output: hello
    }
}
