public class Gerente extends FuncionarioAutenticavel {
  @Override
  public double getBonificacao() {
    System.out.println("Chamando bonificação do Gerente");
    return super.getSalario();
  }
}