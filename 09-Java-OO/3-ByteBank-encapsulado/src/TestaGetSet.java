public class TestaGetSet {
  public static void main(String[] args) {
    Cliente jose = new Cliente();
    jose.setNome("José");

    Conta contaJose = new Conta(120, 532);
    contaJose.depositar(50);
    contaJose.setTitular(jose);

    System.out.println("Agencia: " + contaJose.getAgencia() + ", Número: " + contaJose.getNumero());

    System.out.println("O titular  da conta é: " + contaJose.getTitular().getNome() + ", o saldo da conta é R$"
        + contaJose.getSaldo());

    System.out.println("O total de contas é " + Conta.getTotalDeContas());
  }
}
