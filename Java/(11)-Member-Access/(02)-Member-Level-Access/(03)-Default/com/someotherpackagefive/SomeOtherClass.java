// The default access modifier (when no access modifier is specified) allows access only within the same package
package com.someotherpackagefive;

import com.mypackagefive.MyClass;

public class SomeOtherClass {
    public void hasNoAccessToSayHelloAndName() {
        MyClass myClass = new MyClass();
        // Error: sayHello() has default access in MyClass
        // Error: name has default access in MyClass

        // System.out.println(myClass.sayHello()); // Compile-time error
        // System.out.println(myClass.name); // Compile-time error
    }
}
