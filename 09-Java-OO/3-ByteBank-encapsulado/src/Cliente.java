public class Cliente {
  private String nome;
  private String cpf;
  private String profissao;

  // Setters
  public boolean setNome(String newNome) {
    if (newNome != "") {
      this.nome = newNome;
      return true;
    }

    System.out.println("Nome informado é inválido. Tente novamente.");
    return false;
  }

  public boolean setCPF(String newCPF) {
    if (newCPF != "") {
      this.cpf = newCPF;
      return true;
    }

    System.out.println("CPF informado é inválido. Tente novamente.");
    return false;
  }

  public boolean setProfissao(String newProfissao) {
    if (newProfissao != "") {
      this.profissao = newProfissao;
      return true;
    }

    System.out.println("Profissão informado é inválido. Tente novamente.");
    return false;
  }

  // Getters
  public String getNome() {
    return this.nome;
  }

  public String getCPF() {
    return this.cpf;
  }

  public String getProfissao() {
    return this.profissao;
  }
}