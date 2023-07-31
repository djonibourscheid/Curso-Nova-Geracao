public class Conta3 {
  private double saldo;
  private int agencia;
  private int numero;
  private Cliente3 titular;

  // Getters
  public double getSaldo() {
    return this.saldo;
  }

  public int getAgencia() {
    return this.agencia;
  }

  public int getNumero() {
    return this.numero;
  }

  public Cliente3 getTitular() {
    return this.titular;
  }

  // Setters
  public boolean setAgencia(int valor) {
    if (valor != 0) {
      this.agencia = valor;
      return true;
    }
    System.out.println("Valor inválido, tente novamente.");
    return false;
  }

  public boolean setNumero(int valor) {
    if (valor != 0) {
      this.numero = valor;
      return true;
    }
    System.out.println("Valor inválido, tente novamente.");
    return false;
  }

  public boolean setTitular(Cliente3 valor) {
    if (valor != null) {
      this.titular = valor;
      return true;
    }
    System.out.println("Valor inválido, tente novamente.");
    return false;
  }

  // Metodos
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

  public boolean transferir(double valor, Conta3 destino) {
    if (this.saldo >= valor) {
      this.saldo -= valor;
      destino.saldo += valor;

      System.out
          .println("O valor de R$" + valor + " foi transferido com sucesso para a conta de " + destino.titular.nome
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