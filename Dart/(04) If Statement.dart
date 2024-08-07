void main() {
  // Example of if..else statement in Dart
  
  // Declaring a variable
  int number = 10;

  // Checking if the number is greater than 0
  if (number > 0) {
    // If the condition is true, execute this block
    print('$number is positive');
  } else {
    // If the condition is false, execute this block
    print('$number is not positive');
  }

  // Example of if..else if..else statement
  
  // Declaring another variable
  int score = 85;

  // Checking multiple conditions
  if (score >= 90) {
    // If score is greater than or equal to 90
    print('Grade: A');
  } else if (score >= 80) {
    // If score is between 80 and 89
    print('Grade: B');
  } else if (score >= 70) {
    // If score is between 70 and 79
    print('Grade: C');
  } else {
    // If score is less than 70
    print('Grade: D');
  }

  // Example of nested if..else statement
  
  // Declaring another variable
  int x = 20;

  // Checking nested conditions
  if (x > 0) {
    // Outer if statement
    if (x % 2 == 0) {
      // Inner if statement
      print('$x is positive and even');
    } else {
      // Inner else statement
      print('$x is positive and odd');
    }
  } else if (x < 0) {
    // Outer else if statement
    print('$x is negative');
  } else {
    // Outer else statement
    print('$x is zero');
  }
}

