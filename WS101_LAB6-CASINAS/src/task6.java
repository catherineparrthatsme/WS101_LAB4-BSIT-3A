import java.util.ArrayList;
import java.util.Scanner;

public class task6 {
    public static void main(String[] args) {
        // Setup: Create an ArrayList of Product objects
        ArrayList<Product> products = new ArrayList<>();
        products.add(new Product("Apple", 2.50));
        products.add(new Product("Banana", 1.20));
        products.add(new Product("Car", 50000.00));
        products.add(new Product("Book", 15.99));
        products.add(new Product("Laptop", 1200.00));

        // Activity: Use streams to filter and count
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter price threshold (e.g., 50.00): ");
        double threshold = scanner.nextDouble();

        long count = products.stream()
                .filter(product -> product.getPrice() > threshold)
                .count();

        System.out.println("Number of products with price > " + threshold + ": " + count);

        scanner.close();
    }
}

// Product class
class Product {
    private String name;
    private double price;

    public Product(String name, double price) {
        this.name = name;
        this.price = price;
    }

    public double getPrice() {
        return price;
    }

    // Optional: Getter for name if needed elsewhere
    public String getName() {
        return name;
    }
}