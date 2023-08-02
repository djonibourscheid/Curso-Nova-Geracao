public class TestaCriaConta {
  public static void main(String[] args) {
    Conta primeiraConta = new Conta();
    primeiraConta.saldo += 200;
    System.out.println("Saldo da primeira conta: R$" + primeiraConta.saldo);

    Conta segundaConta = new Conta();
    segundaConta.titular = "Djoni";
    segundaConta.saldo = 50;
    System.out.println("A conta de " + segundaConta.titular + " tem R$" + segundaConta.saldo);
  }
}
