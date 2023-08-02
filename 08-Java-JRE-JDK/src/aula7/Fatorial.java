package aula7;

public class Fatorial {
  public static void main(String[] args) {
    System.out.println("Os fatoriais de 1 a 10:");

    int fatorial = 1;

    for (int i = 1; i <= 10; i++) {
      fatorial = fatorial * i;

      System.out.println("O fatorial de " + i + " é: " + fatorial);
    }

  }
}