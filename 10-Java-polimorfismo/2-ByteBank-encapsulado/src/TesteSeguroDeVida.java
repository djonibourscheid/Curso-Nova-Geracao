/**
 * TesteSeguroDeVida
 */
public class TesteSeguroDeVida {
  public static void main(String[] args) {
    ContaCorrente cc = new ContaCorrente(123, 345);
    cc.deposita(1000);

    SeguroDeVida seguro = new SeguroDeVida();

    CalculadoraDeImposto calc = new CalculadoraDeImposto();
    calc.registra(seguro);
    calc.registra(cc);
    System.out.println(calc.getTotalImposto());
  }
}