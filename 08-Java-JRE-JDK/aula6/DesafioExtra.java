/*
 * O João gostaria de criar um programa sobre Imposto de Renda (IR) e verificou as regras de alíquota. Ele descobriu no site da receita:
  * De 1900.0 até 2800.0, o IR é de 7.5% e pode deduzir na declaração o valor de R$ 142
  * De 2800.01 até 3751.0, o IR é de 15% e pode deduzir R$ 350
  * De 3751.01 até 4664.00, o IR é de 22.5% e pode deduzir R$ 636
 */

public class DesafioExtra {
  public static void main(String[] args) {
    double salario = 2000;
    double porcentagemImpostoDeRenda;

    System.out.println("Seu salário é de: R$" + salario);

    if (salario >= 1900 && salario <= 2800) {
      porcentagemImpostoDeRenda = 7.5;
      System.out.println("Sua tarifa do imposto de renda é de: " + porcentagemImpostoDeRenda + "%");
      System.out.println("Pode ser deduzido R$142 na declaração do imposto de renda");

    } else if (salario > 2800 && salario <= 3751) {
      porcentagemImpostoDeRenda = 15;
      System.out.println("Sua tarifa do imposto de renda é de: " + porcentagemImpostoDeRenda + "%");
      System.out.println("Pode ser deduzido R$350 na declaração do imposto de renda");

    } else if (salario > 3751 && salario <= 4664) {
      porcentagemImpostoDeRenda = 22.5;
      System.out.println("Sua tarifa do imposto de renda é de: " + porcentagemImpostoDeRenda + "%");
      System.out.println("Pode ser deduzido R$636 na declaração do imposto de renda");

    } else {
      System.out.println("Seu salário é inferior à tarifa mínima do imposto de renda.");
    }
  }

}