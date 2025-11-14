import java.util.Scanner;

public class task2 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Prompt for the number of terms
        System.out.print("Enter the number of terms (N): ");
        int n = scanner.nextInt();

        // Handle edge cases
        if (n <= 0) {
            System.out.println("Please enter a positive integer.");
            return;
        }

        // Print the Fibonacci series
        System.out.print("Fibonacci series up to " + n + " terms: ");
        int a = 0, b = 1;
        for (int i = 1; i <= n; i++) {
            System.out.print(a + " ");
            int next = a + b;
            a = b;
            b = next;
        }
        System.out.println();

        scanner.close();
    }
}