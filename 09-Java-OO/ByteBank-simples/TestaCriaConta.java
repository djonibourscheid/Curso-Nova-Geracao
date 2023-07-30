public class TestaCriaConta {
  public static void main(String[] args) {
    Conta1 primeiraConta = new Conta1();
    primeiraConta.saldo += 200;
    System.out.println("Saldo da primeira conta: R$" + primeiraConta.saldo);

    Conta1 segundaConta = new Conta1();
    segundaConta.titular = "Djoni";
    segundaConta.saldo = 50;
    System.out.println("A conta de " + segundaConta.titular + " tem R$" + segundaConta.saldo);
  }
}
