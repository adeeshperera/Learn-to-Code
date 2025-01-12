public class ArrayExamples {
    public static void main(String[] args) {
        // Declare and initialize an array of integers
        int[] myArray = { 1, 4, 3, 2 };

        // Accessing elements from the array
        int first = myArray[0]; // first = 1
        int second = myArray[1]; // second = 4
        int third = myArray[2]; // third = 3
        int fourth = myArray[3]; // fourth = 2

        // Print the values
        System.out.println("First element: " + first); // Output: 1
        System.out.println("Second element: " + second); // Output: 4
        System.out.println("Third element: " + third); // Output: 3
        System.out.println("Fourth element: " + fourth); // Output: 2

        // Declare an array of a certain size (10 elements)
        int[] sizedArray = new int[10];

        // The elements will be initialized to their default value (0 for integers)
        // Accessing the first element (default value)
        int defaultValue = sizedArray[0]; // defaultValue = 0

        // Print the default value
        System.out.println("Default value of first element in sizedArray: " + defaultValue); // Output: 0

        // Get the number of elements in the array
        int length = sizedArray.length; // length = 10

        // Print the length of the array
        System.out.println("Length of sizedArray: " + length); // Output: 10

        // Assign a new value to an element in the array
        sizedArray[2] = 7; // Assign value 7 to index 2

        // Retrieve the updated value
        int updatedValue = sizedArray[2]; // updatedValue = 7

        // Print the updated value
        System.out.println("Updated value at index 2: " + updatedValue); // Output: 7

        // Add two elements in the array together
        int sum = myArray[0] + myArray[1]; // sum = 1 + 4 = 5

        // Print the sum
        System.out.println("Sum of first two elements: " + sum); // Output: 5
    }
}
