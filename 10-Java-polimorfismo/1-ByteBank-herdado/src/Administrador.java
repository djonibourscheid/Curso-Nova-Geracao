public class Administrador extends Funcionario implements Autenticavel {
  private AutenticavelUtils util;

  public Administrador() {
    this.util = new AutenticavelUtils();
  }

  // devido ao Autenticavel
  @Override
  public void setSenha(int senha) {
    this.util.setSenha(senha);
  }

  @Override
  public boolean autentica(int senha) {
    return this.util.autentica(senha);
  }

  // herdados de Funcionario
  @Override
  public double getBonificacao() {
    System.out.println("Chamando bonificação do Administrador");
    return 50;
  }
}