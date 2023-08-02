package aula7;

/*
 * Transforme em for:
  int contador = 0;
  while(contador <= 10) {
      System.out.println(contador);
      contador++;
  }
 */
public class WhileToFor {
  public static void main(String[] args) {
    for (int contador = 0; contador <= 10; contador++) {
      System.out.println(contador);
    }
  }
}
