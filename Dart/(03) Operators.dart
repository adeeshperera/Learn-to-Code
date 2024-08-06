void main() {
  // Arithmetic Operators
  int a = 10;
  int b = 5;

  print("Arithmetic Operators:");
  print("Addition: ${a + b}"); // Addition
  print("Subtraction: ${a - b}"); // Subtraction
  print("Multiplication: ${a * b}"); // Multiplication
  print("Division: ${a / b}"); // Division
  print("Modulus: ${a % b}"); // Modulus
  print("Increment: ${a++}"); // Increment
  print("Decrement: ${b--}"); // Decrement
  print("");

  // Relational Operators
  double x = 10.5;
  double y = 5.5;

  print("Relational Operators:");
  print("$a > $b: ${a > b}"); // Greater than
  print("$a < $b: ${a < b}"); // Less than
  print("$a >= $b: ${a >= b}"); // Greater than or equal to
  print("$a <= $b: ${a <= b}"); // Less than or equal to
  print("$a == $b: ${a == b}"); // Equal to
  print("$a != $b: ${a != b}"); // Not equal to
  print("");

  // Logical Operators
  bool p = true;
  bool q = false;

  print("Logical Operators:");
  print("$p && $q: ${p && q}"); // Logical AND
  print("$p || $q: ${p || q}"); // Logical OR
  print("!$p: ${!p}"); // Logical NOT
  print("");

  // Assignment Operators
  int result = 0;
  print("Assignment Operators:");
  result += a; // Add AND
  print("result += $a: $result");
  result -= b; // Subtract AND
  print("result -= $b: $result");
  result *= a; // Multiply AND
  print("result *= $a: $result");
  result /= b; // Divide AND
  print("result /= $b: $result");
  result %= a; // Modulus AND
  print("result %= $a: $result");
  print("");

  // Bitwise Operators
  int m = 5; // 101
  int n = 3; // 011

  print("Bitwise Operators:");
  print("$m & $n: ${m & n}"); // Bitwise AND
  print("$m | $n: ${m | n}"); // Bitwise OR
  print("$m ^ $n: ${m ^ n}"); // Bitwise XOR
  print("~$m: ${~m}"); // Bitwise NOT
  print("$m << 1: ${m << 1}"); // Left shift
  print("$n >> 1: ${n >> 1}"); // Right shift
}

