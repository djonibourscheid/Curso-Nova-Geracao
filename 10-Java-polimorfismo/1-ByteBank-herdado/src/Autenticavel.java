/**
 * Para implementar a interface FuncionarioAutenticavel
 * precisa usar o implements na classe desejada e implementar
 * os metodos que tem nesta interface
 */

public abstract interface Autenticavel {
  public abstract void setSenha(int senha);

  public abstract boolean autentica(int senha);
}
