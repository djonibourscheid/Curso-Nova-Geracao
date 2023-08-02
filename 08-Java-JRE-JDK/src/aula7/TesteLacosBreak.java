package aula7;

public class TesteLacosBreak {
  public static void main(String[] args) {
    for (int i = 0; i < 11; i++) {
      for (int j = 0; j < 11; j++) {
        if (j == i) {
          break;
        }

        System.out.print("*");
      }

      System.out.println();
    }
  }
}
