public class TesteReferencia {
  public static void main(String[] args) {
    Gerente g1 = new Gerente();
    g1.setNome("Julio");
    g1.setSalario(5000);

    EditorVideo ev1 = new EditorVideo();
    ev1.setNome("José");
    ev1.setSalario(1500);

    Designer d1 = new Designer();
    d1.setNome("Carlos");
    d1.setSalario(2500);

    ControleBonificacao controle = new ControleBonificacao();
    controle.registraBonificacao(g1);
    controle.registraBonificacao(ev1);
    controle.registraBonificacao(d1);

    System.out.println("Soma das bonificações: R$" + controle.getSoma());
  }
}
