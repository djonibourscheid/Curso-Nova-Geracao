public class Cliente implements Autenticavel {
  private AutenticavelUtils util;

  public Cliente() {
    this.util = new AutenticavelUtils();
  }

  @Override
  public void setSenha(int senha) {
    this.util.setSenha(senha);
  }

  @Override
  public boolean autentica(int senha) {
    return this.util.autentica(senha);
  }
}
