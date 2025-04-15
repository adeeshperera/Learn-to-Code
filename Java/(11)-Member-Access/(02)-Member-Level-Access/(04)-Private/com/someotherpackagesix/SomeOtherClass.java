// The private access modifier restricts access to members only within the same class
package com.someotherpackagesix;

import com.mypackagesix.MyClass;

public class SomeOtherClass {
    public void hasNoAccessToSayHelloAndName() {
        MyClass myClass = new MyClass();
        // Error: sayHello() has private access in MyClass
        // Error: name has private access in MyClass

        // System.out.println(myClass.sayHello()); // Compile-time error
        // System.out.println(myClass.name); // Compile-time error
    }
}
