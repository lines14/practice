public class Counter {
    public static Integer num = 1;

    public static void count() {
        System.out.println(num++);
        count();
    }

    public static void main(String[] args) {
        if (num < 10000) {
            count();
        }
    }
}