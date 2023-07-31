public class TestaMetodo {
  public static void main(String[] args) {
    Conta1 contaDjoni = new Conta1();
    contaDjoni.titular = "Djoni Bourscheid";

    System.out.println("O valor da sua conta é de R$" + contaDjoni.saldo);

    contaDjoni.depositar(50);

    contaDjoni.sacar(40);
    contaDjoni.sacar(50);

    contaDjoni.depositar(90);

    Conta1 contaJose = new Conta1();
    contaJose.titular = "José Alfredo Nunes";

    contaDjoni.transferir(50, contaJose);
    contaDjoni.transferir(100, contaJose);
  }
}