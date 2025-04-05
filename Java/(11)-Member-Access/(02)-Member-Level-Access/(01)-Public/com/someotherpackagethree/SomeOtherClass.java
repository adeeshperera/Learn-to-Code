// The public access modifier allows members to be accessed from any other class, even in different packages
package com.someotherpackagethree;

import com.mypackagethree.MyClass;

public class SomeOtherClass {
    public static void main(String args[]) {
        MyClass myClass = new MyClass();
        // Accessing public method and variable from MyClass
        System.out.println(myClass.sayHello()); // Output: hello
        System.out.println(myClass.name); // Output: John
    }
}
