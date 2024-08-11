// Define a class representing a Person
class Person {
  // Properties
  String name;
  int age;

  // Constructor
  Person(this.name, this.age);

  // Method to greet
  void greet() {
    print('Hello, my name is $name and I am $age years old.');
  }
}

// Define a subclass of Person called Student
class Student extends Person {
  // Additional property
  String school;

  // Constructor
  Student(String name, int age, this.school) : super(name, age);

  // Override the greet method to include school
  @override
  void greet() {
    print('Hello, my name is $name, I am $age years old, and I study at $school.');
  }

  // Method specific to students
  void study() {
    print('$name is studying at $school.');
  }
}

void main() {
  // Create an instance of Person
  var person = Person('Alice', 30);
  
  // Use methods of Person
  person.greet(); // Output: Hello, my name is Alice and I am 30 years old.

  // Create an instance of Student
  var student = Student('Bob', 20, 'XYZ University');

  // Use methods of Student
  student.greet(); // Output: Hello, my name is Bob, I am 20 years old, and I study at XYZ University.
  student.study(); // Output: Bob is studying at XYZ University.
}

