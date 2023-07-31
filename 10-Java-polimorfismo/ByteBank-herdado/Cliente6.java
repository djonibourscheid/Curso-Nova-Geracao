
public class Cliente6 implements Autenticavel {

	private AutenticacaoUtil autenticador;
	
	public Cliente6() {
		this.autenticador = new AutenticacaoUtil();
	}
	
	
	@Override
	public void setSenha(int senha) {
		this.autenticador.setSenha(senha);
	}

	@Override
	public boolean autentica(int senha) {
		return this.autenticador.autentica(senha);
	}
	
}
