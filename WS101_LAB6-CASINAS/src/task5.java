public class task5 {
    // Fields
    private double length;
    private double width;

    // Constructor
    public task5(double length, double width) {
        this.length = length;
        this.width = width;
    }

    // Method to calculate area
    public double calculateArea() {
        return length * width;
    }

    // Getters (optional, for demonstration)
    public double getLength() {
        return length;
    }

    public double getWidth() {
        return width;
    }

    // Main method to demonstrate
    public static void main(String[] args) {
        // Create Rectangle objects
        task5 rect1 = new task5(5.0, 3.0);
        task5 rect2 = new task5(10.0, 7.5);

        // Calculate and print areas
        System.out.println("Rectangle 1 - Length: " + rect1.getLength() + ", Width: " + rect1.getWidth() + ", Area: " + rect1.calculateArea());
        System.out.println("Rectangle 2 - Length: " + rect2.getLength() + ", Width: " + rect2.getWidth() + ", Area: " + rect2.calculateArea());
    }
}
