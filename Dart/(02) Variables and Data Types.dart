// Dart program to demonstrate variables and data types

void main() {
  // Dart is a statically typed language, meaning variables can hold values of specific types
  
  // Variables can be declared using the var keyword followed by the variable name and optionally, the value
  var name = 'John'; // String variable holding a name
  
  // You can also explicitly declare the data type
  String city = 'New York'; // String variable holding a city name
  
  // Dart supports a variety of data types
  
  // 1. Numbers: Dart supports both integers and floating-point numbers
  
  int age = 30; // Integer variable holding an age
  double salary = 50000.50; // Double variable holding a salary
  
  // 2. Strings: A sequence of characters
  
  String message = 'Hello, World!'; // String variable holding a message
  
  // 3. Booleans: Represents true or false values
  
  bool isStudent = true; // Boolean variable indicating whether a person is a student or not
  
  // 4. Lists: An ordered collection of objects
  
  List<int> numbers = [1, 2, 3, 4, 5]; // List variable holding integers
  
  // 5. Maps: A collection of key-value pairs
  
  Map<String, int> scores = {'Math': 90, 'Science': 85, 'English': 88}; // Map variable holding subject scores
  
  // 6. Runes: Represents a Unicode character
  
  Rune runeSymbol = '\u{1F60A}'.runes.first; // Rune variable holding a smiley emoji
  
  // 7. Symbols: Represents an operator or identifier declared in a Dart program
  
  Symbol symbol = #mySymbol; // Symbol variable
  
  // 8. Dynamic: A type that represents any type of value
  
  dynamic dynamicVar = 'Dynamic variable'; // Dynamic variable that can hold any type of value
  
  // 9. Null: A special type with only one value: null
  
  var nullVar = null; // Variable holding a null value
  
  // Displaying the values
  
  print('Name: $name');
  print('City: $city');
  print('Age: $age');
  print('Salary: $salary');
  print('Message: $message');
  print('Is Student? $isStudent');
  print('Numbers: $numbers');
  print('Scores: $scores');
  print('Rune Symbol: $runeSymbol');
  print('Symbol: $symbol');
  print('Dynamic Variable: $dynamicVar');
  print('Null Variable: $nullVar');
}

