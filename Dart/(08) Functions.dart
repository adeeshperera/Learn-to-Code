// Function to calculate the factorial of a number
int factorial(int n) {
  if (n == 0) {
    return 1; // Base case: factorial of 0 is 1
  } else {
    return n * factorial(n - 1); // Recursive case: n! = n * (n-1)!
  }
}

// Function to check if a number is prime
bool isPrime(int n) {
  if (n <= 1) {
    return false; // 0 and 1 are not prime numbers
  }
  for (int i = 2; i <= n / 2; i++) {
    if (n % i == 0) {
      return false; // If n is divisible by any number other than 1 and itself, it's not prime
    }
  }
  return true; // If no divisor found, n is prime
}

// Function to reverse a string
String reverseString(String str) {
  String reversed = '';
  for (int i = str.length - 1; i >= 0; i--) {
    reversed += str[i]; // Appending characters from the end to the beginning
  }
  return reversed;
}

void main() {
  // Test the factorial function
  int n = 5;
  print('Factorial of $n: ${factorial(n)}'); // Output: Factorial of 5: 120

  // Test the isPrime function
  int num = 17;
  print('$num is prime: ${isPrime(num)}'); // Output: 17 is prime: true

  // Test the reverseString function
  String str = 'hello';
  print('Reverse of "$str": ${reverseString(str)}'); // Output: Reverse of "hello": olleh
}

