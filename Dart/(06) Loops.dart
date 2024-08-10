void main() {
  // For loop
  print('For loop:');
  for (int i = 0; i < 5; i++) {
    print('Iteration $i');
  }

  // While loop
  print('\nWhile loop:');
  int j = 0;
  while (j < 5) {
    print('Iteration $j');
    j++;
  }

  // Do-while loop
  print('\nDo-while loop:');
  int k = 0;
  do {
    print('Iteration $k');
    k++;
  } while (k < 5);

  // Loop with break
  print('\nLoop with break:');
  for (int i = 0; i < 10; i++) {
    if (i == 5) {
      break; // Exit the loop when i equals 5
    }
    print('Iteration $i');
  }

  // Loop with continue
  print('\nLoop with continue:');
  for (int i = 0; i < 5; i++) {
    if (i == 2) {
      continue; // Skip iteration when i equals 2
    }
    print('Iteration $i');
  }
}

