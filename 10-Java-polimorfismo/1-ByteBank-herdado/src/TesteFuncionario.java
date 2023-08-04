public class TesteFuncionario {
  public static void main(String[] args) {
    Funcionario djoni = new Gerente();
    djoni.setNome("Djoni Bourscheid");
    djoni.setCpf("000.000.000-00");
    djoni.setSalario(2500.8);

    System.out.println(djoni.getNome());
    System.out.println(djoni.getBonificacao());
  }
}