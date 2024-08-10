void main() {
  // List Example
  List<String> fruits = ['Apple', 'Banana', 'Orange']; // Creating a list of strings
  fruits.add('Grapes'); // Adding an element to the list
  print('List of fruits: $fruits');

  // Set Example
  Set<int> numbers = {1, 2, 3, 4, 5}; // Creating a set of integers
  numbers.add(6); // Adding an element to the set
  numbers.add(3); // Sets do not allow duplicate elements, so this will not be added
  print('Set of numbers: $numbers');

  // Map Example
  Map<String, int> ages = {
    'Alice': 30,
    'Bob': 25,
    'Charlie': 35,
  }; // Creating a map with string keys and integer values
  ages['David'] = 40; // Adding a key-value pair to the map
  print('Ages: $ages');

  // Accessing elements from collections
  print('First fruit: ${fruits[0]}'); // Accessing elements by index in a list
  print('Number of elements in the set: ${numbers.length}'); // Getting the size of a set
  print('Age of Bob: ${ages['Bob']}'); // Accessing value by key in a map

  // Iterating over collections
  print('Fruits:');
  for (String fruit in fruits) {
    print(fruit); // Iterating through elements of a list
  }

  print('Numbers:');
  numbers.forEach((number) => print(number)); // Iterating through elements of a set using forEach

  print('Ages:');
  ages.forEach((name, age) => print('$name is $age years old')); // Iterating through key-value pairs of a map using forEach
}

