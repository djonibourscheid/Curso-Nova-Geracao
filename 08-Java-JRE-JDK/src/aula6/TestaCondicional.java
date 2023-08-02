package aula6;

public class TestaCondicional {
  public static void main(String[] args) {
    System.out.println("Teste de condicionais");

    int idade = 17;
    int quantidadeDePessoas = 3;

    if (idade >= 18) {
      System.out.println("Maior de 18 anos anos");
    } else {
      if (quantidadeDePessoas >= 2) {
        System.out.println("Você não é de maior, mas está acompanhado. Pode entrar.");
      } else {
        System.out.println("Menor de 18 anos");
      }
    }
  }
}
