// Define a class to demonstrate primitive types in Java
public class PrimitiveTypes {

    public static void main(String[] args) {
        // int
        // Whole numbers default to type integer
        Object oInt = 5;
        String classnameInt = oInt.getClass().getName(); // = Integer (java.lang.Integer)
        int minInt = Integer.MIN_VALUE; // = -2147483648
        int maxInt = Integer.MAX_VALUE; // = 2147483647

        // long
        // Use long for numbers larger or smaller than int max/min
        Object oLong = 5L; // Use L or l to force a number to be a long
        String classnameLong = oLong.getClass().getName(); // = Long (java.lang.Long)
        long minLong = Long.MIN_VALUE; // = -9223372036854775808
        long maxLong = Long.MAX_VALUE; // = 9223372036854775807

        // double
        // Decimal numbers default to type double
        Object oDouble = 5.2;
        String classnameDouble = oDouble.getClass().getName(); // = Double
        double minDouble = Double.MIN_VALUE; // = 4.9E-324
        double maxDouble = Double.MAX_VALUE; // = 1.7976931348623157E308

        // float
        // Float has a smaller range than double, use F or f to force float
        Object oFloat = 5f;
        String classnameFloat = oFloat.getClass().getName(); // = Float
        float minFloat = Float.MIN_VALUE; // = 1.4E-45
        float maxFloat = Float.MAX_VALUE; // = 3.4028235E38

        // boolean
        // Boolean type can only be true or false
        Object oBoolean = true;
        String classnameBoolean = oBoolean.getClass().getName(); // = Boolean
        boolean bool = true;

        // byte
        // Byte is a small integer type
        byte b = 1;
        Object oByte = b;
        String classnameByte = oByte.getClass().getName(); // = Byte
        int minByte = Byte.MIN_VALUE; // = -128
        int maxByte = Byte.MAX_VALUE; // = 127

        // short
        // Short is an integer with a smaller range than int
        short s = 1;
        Object oShort = s;
        String classnameShort = oShort.getClass().getName(); // = Short
        int minShort = Short.MIN_VALUE; // = -32768
        int maxShort = Short.MAX_VALUE; // = 32767

        // char
        // Char represents a single Unicode character
        char c = 'a';
        Object oChar = c;
        String classnameChar = oChar.getClass().getName(); // = Character

        // You can also assign a char to an int to get its ASCII value
        int asciiValue = 'a'; // = 97
        Object oAscii = asciiValue;
        String classnameAscii = oAscii.getClass().getName(); // = Integer

        // Print out results for demonstration
        System.out.println("int: " + classnameInt + ", min: " + minInt + ", max: " + maxInt);
        System.out.println("long: " + classnameLong + ", min: " + minLong + ", max: " + maxLong);
        System.out.println("double: " + classnameDouble + ", min: " + minDouble + ", max: " + maxDouble);
        System.out.println("float: " + classnameFloat + ", min: " + minFloat + ", max: " + maxFloat);
        System.out.println("boolean: " + classnameBoolean + ", value: " + bool);
        System.out.println("byte: " + classnameByte + ", min: " + minByte + ", max: " + maxByte);
        System.out.println("short: " + classnameShort + ", min: " + minShort + ", max: " + maxShort);
        System.out.println("char: " + classnameChar);
        System.out.println("ASCII value of 'a': " + asciiValue + ", class name: " + classnameAscii);
    }
}
