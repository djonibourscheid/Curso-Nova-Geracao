public class TestaMetodo {
  public static void main(String[] args) {
    Conta contaDjoni = new Conta();
    contaDjoni.titular = "Djoni Bourscheid";

    System.out.println("O valor da sua conta é de R$" + contaDjoni.saldo);

    contaDjoni.depositar(50);

    contaDjoni.sacar(40);
    contaDjoni.sacar(50);

    contaDjoni.depositar(90);

    Conta contaJose = new Conta();
    contaJose.titular = "José Alfredo Nunes";

    contaDjoni.transferir(50, contaJose);
    contaDjoni.transferir(100, contaJose);
  }

}