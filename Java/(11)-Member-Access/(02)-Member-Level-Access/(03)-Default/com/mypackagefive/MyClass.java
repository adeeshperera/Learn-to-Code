// The default access modifier (when no access modifier is specified) allows access only within the same package
package com.mypackagefive;

public class MyClass {
    String name = "John"; // Default (package-private) variable

    String sayHello() { // Default (package-private) method
        return "hello";
    }
}
