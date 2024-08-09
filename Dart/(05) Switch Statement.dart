void main() {
  String fruit = 'apple'; // Declare a variable 'fruit' and assign it a value 'apple'

  // Switch statement to check the value of 'fruit'
  switch (fruit) {
    case 'apple': // If 'fruit' is 'apple'
      print('Apple is a delicious fruit.'); // Print a message
      break; // Exit the switch statement

    case 'banana': // If 'fruit' is 'banana'
      print('Banana is a tasty fruit.'); // Print a message
      break; // Exit the switch statement

    case 'orange': // If 'fruit' is 'orange'
      print('Orange is a juicy fruit.'); // Print a message
      break; // Exit the switch statement

    default: // If 'fruit' doesn't match any case
      print('Unknown fruit.'); // Print a message
      break; // Exit the switch statement
  }
}
