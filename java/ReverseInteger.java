class ReverseInteger {
    public static int reverse(int x) {
        long upper = 2147483647L, lower = -2147483648L, converted = 0L;
        if(x < 0) {
            String s = (new StringBuilder(String.valueOf(x))).reverse().toString();
            converted = Long.valueOf("-" + s.substring(0, s.length()-1));
            return converted < lower ? 0 : (int)converted;
        } else {
            converted = Long.valueOf(((new StringBuilder(String.valueOf(x))).reverse().toString()));
            return converted > upper ? 0 : (int)converted;
        }
    }

    public static void main(String args[]){
        System.out.println(String.format("1212 -->  %s", reverse(1212)));
        System.out.println(String.format("-221 -->  %s", reverse(-221)));
        System.out.println(String.format("1000 -->  %s", reverse(1000)));
        System.out.println(String.format("-10 -->  %s", reverse(-10)));
        System.out.println(String.format("1534236469 -->  %s", reverse(1534236469)));
    }
}