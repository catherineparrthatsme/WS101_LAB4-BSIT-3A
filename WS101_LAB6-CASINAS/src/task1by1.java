import java.util.Scanner;

void main(){
    Scanner sc = new Scanner(System.in);
    IO.print("Enter your name: ");
    String name = sc.nextLine();

    IO.print("Enter your age: ");
    int age = sc.nextInt();

    IO.println("Hello,  " + name + ", you are " + age + " years old!");
}
