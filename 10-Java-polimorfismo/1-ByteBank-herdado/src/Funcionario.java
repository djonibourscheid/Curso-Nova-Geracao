/*
 * Abstract faz o funcionario se tomar um conceito, não se pode criar
 * um objeto do tipo funcionário, apenas coisas que extendem o funcionario.

 * Abstract no metodo significa que ele não tem corpo, serve para ter
 * referencia nos filhos
 */

public abstract class Funcionario {
  private String nome;
  private String cpf;
  private double salario;

  public abstract double getBonificacao();

  public String getNome() {
    return nome;
  }

  public void setNome(String nome) {
    this.nome = nome;
  }

  public String getCpf() {
    return cpf;
  }

  public void setCpf(String cpf) {
    this.cpf = cpf;
  }

  public double getSalario() {
    return salario;
  }

  public void setSalario(double salario) {
    this.salario = salario;
  }
}