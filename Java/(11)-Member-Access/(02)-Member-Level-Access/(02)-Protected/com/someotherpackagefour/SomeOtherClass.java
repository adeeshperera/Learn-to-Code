// The protected access modifier allows access within the same package and subclasses (even if they are in different packages)
package com.someotherpackagefour;

import com.mypackagefour.MyClass;

public class SomeOtherClass {
    public void hasNoAccessToSayHelloAndName() {
        MyClass myClass = new MyClass();
        // Error: sayHello() has protected access in MyClass
        // Error: name has protected access in MyClass

        // System.out.println(myClass.sayHello()); // Compile-time error
        // System.out.println(myClass.name); // Compile-time error
    }
}
