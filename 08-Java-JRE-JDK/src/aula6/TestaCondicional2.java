package aula6;

public class TestaCondicional2 {
  public static void main(String[] args) {
    System.out.println("Teste de condicionais");

    int idade = 17;
    // int quantidadeDePessoas = 3;
    boolean acompanhado = true;

    // if (idade >= 18 || quantidadeDePessoas >= 2) {
    if (idade >= 18 || acompanhado) {
      System.out.println("Seja bem-vindo.");
    } else {
      System.out.println("Você não pode entrar.");
    }
  }
}
