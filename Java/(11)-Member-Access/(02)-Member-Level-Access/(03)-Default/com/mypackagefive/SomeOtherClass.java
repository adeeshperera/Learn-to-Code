// The default access modifier (when no access modifier is specified) allows access only within the same package
package com.mypackagefive;

public class SomeOtherClass {
    public static void main(String args[]) {
        MyClass myClass = new MyClass();
        // Accessing default method and variable within the same package
        System.out.println(myClass.sayHello()); // Output: hello
        System.out.println(myClass.name); // Output: John
    }
}
