public class TestaGetSet {
  public static void main(String[] args) {
    Cliente3 jose = new Cliente3();
    jose.setNome("José");

    Conta3 contaJose = new Conta3(120, 532);
    contaJose.depositar(50);
    contaJose.setTitular(jose);

    System.out.println("Agencia: " + contaJose.getAgencia() + ", Número: " + contaJose.getNumero());

    System.out.println("O titular  da conta é: " + contaJose.getTitular().getNome() + ", o saldo da conta é R$"
        + contaJose.getSaldo());

    System.out.println("O total de contas é " + Conta3.getTotalDeContas());
  }
}
