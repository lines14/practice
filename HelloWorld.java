public class HelloWorld {
    public static void main(String[] args) {
        logger();
    }

    public static void logger() {
        System.out.println(getGreet());
    }

    public static String getGreet() {
        return "Hello";
    }
}