public class TestaBanco {
  public static void main(String[] args) {
    Cliente djoni = new Cliente();
    djoni.nome = "Djoni Bourscheid";
    djoni.cpf = "000.000.000-00";
    djoni.profissao = "Estudante";

    Conta2 contaDoDjoni = new Conta2();
    contaDoDjoni.depositar(500);
    contaDoDjoni.titular = djoni;
    System.out.println("O títular da conta é: "+contaDoDjoni.titular.nome+", sua profissão é: "+contaDoDjoni.titular.profissao);
  }
}
