public class TesteContas {
	public static void main(String[] args) {
		// Conta conta = new Conta(1337, 23334);
		// conta.deposita(200.0);
		// System.out.println(conta.getSaldo());

		// conta.setAgencia(570);
		// System.out.println(conta.getAgencia());

		// System.out.println("O total de contas é: " + Conta.getTotal());
		// System.out.println();

		ContaCorrente cc = new ContaCorrente(132, 1111);
		ContaPoupanca cp = new ContaPoupanca(132, 5000);

		cc.deposita(100);
		cc.transfere(100, cp);

		System.out.println("O saldo da Conta Corrente é R$"+cc.getSaldo()+" (contando a tarifa de 20 centavos).");
		System.out.println("O saldo da Conta Poupança é R$"+cp.getSaldo());
	}
}
