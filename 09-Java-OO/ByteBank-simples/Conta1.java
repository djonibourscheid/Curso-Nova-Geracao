public class Conta1 {
  double saldo;
  int agencia;
  int numero;
  String titular;

  public void depositar(double valor) {
    this.saldo += valor;
    System.out.println("O valor de R$" + valor + " foi depositado. Agora a conta tem R$" + this.saldo);
    System.out.println();
  }


  public boolean sacar(double valor) {
    if (this.saldo >= valor) {
      this.saldo -= valor;
      System.out
          .println("O valor de R$" + valor + " foi sacado da sua conta. Agora o saldo da conta é R$" + this.saldo);
      System.out.println();
      return true;
    }

    System.out.println("A conta não tem saldo suficiente para este saque. Saldo da conta é R$" + this.saldo);
    System.out.println();
    return false;
  }


  public boolean transferir(double valor, Conta1 destino) {
    if (this.saldo >= valor) {
      this.saldo -= valor;
      destino.saldo += valor;

      System.out.println("O valor de R$" + valor + " foi transferido com sucesso para a conta de " + destino.titular
          + ". O valor da sua conta agora é R$" + this.saldo);
      System.out.println();
      return true;
    }

    System.out.println(
        "O valor da sua conta é de R$" + this.saldo + ". Não foi possivel completar a transação por falta de saldo.");
    System.out.println();

    return false;
  }
}