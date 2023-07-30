public class Multiplo3 {
  public static void main(String[] args) {
    System.out.println("Os múltiplos de 3, de 1 a 100 são:");
    // Imprima os múltiplos de 3
    for (int i = 1; i <= 100; i++) {
      if (i % 3 == 0) {
        System.out.println(i);
      }
    }
  }
}
