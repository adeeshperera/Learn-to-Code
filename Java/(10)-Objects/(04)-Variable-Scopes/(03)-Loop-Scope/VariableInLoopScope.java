public class VariableInLoopScope {
    private void printZeroToTen() {
        for (int i = 0; i < 10; i++) {
            // i is visible within this loop
            int j = i + 1;
            // j is also visible within this loop
            System.out.println(i);
            System.out.println(j);
        }
        // i is not visible here
        // System.out.println(i); // Uncommenting this line will cause a compilation error
        // j is not visible here
        // System.out.println(j); // Uncommenting this line will cause a compilation error
    }
}
