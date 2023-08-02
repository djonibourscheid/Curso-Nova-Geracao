public class Conta {
  private double saldo;
  private int agencia;
  private int numero;
  private Cliente titular;

  private static int totalDeContas;

  public Conta(int agencia, int numero) {
    totalDeContas++;

    if (agencia <= 0 && numero <= 0) {
      return;
    }

    this.agencia = agencia;
    this.numero = numero;
  }

  // Getters
  public static int getTotalDeContas() {
    return Conta.totalDeContas;
  }

  public double getSaldo() {
    return this.saldo;
  }

  public int getAgencia() {
    return this.agencia;
  }

  public int getNumero() {
    return this.numero;
  }

  public Cliente getTitular() {
    return this.titular;
  }

  // Setters
  public boolean setAgencia(int valor) {
    if (valor >= 0) {
      this.agencia = valor;
      return true;
    }
    System.out.println("Valor inválido, tente novamente.");
    return false;
  }

  public boolean setNumero(int valor) {
    if (valor >= 0) {
      this.numero = valor;
      return true;
    }
    System.out.println("Valor inválido, tente novamente.");
    return false;
  }

  public boolean setTitular(Cliente valor) {
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

  public boolean transferir(double valor, Conta destino) {
    if (this.saldo >= valor) {
      this.saldo -= valor;
      destino.saldo += valor;

      System.out
          .println("O valor de R$" + valor + " foi transferido com sucesso para a conta de " + destino.titular.getNome()
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