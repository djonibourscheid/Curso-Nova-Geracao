public class TestaValor {
  public static void main(String[] args) {
    int valor1 = 5;
    int valor2 = 9;
    System.out.println("valor 2 = " +valor2);
    
    valor2 = valor1;
    System.out.println("valor 2 = " +valor2);
    
    valor1 = 22;
    System.out.println("valor 1 = " +valor1);
    System.out.println("valor 2 = " +valor2);
  }
}