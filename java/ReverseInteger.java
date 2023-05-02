class ReverseInteger {
    public static int reverse(int x) {
        int result = 0;
        if(x < 0) {
            String s = (new StringBuilder(String.valueOf(x))).reverse().toString();
            result = Integer.valueOf("-" + s.substring(0, s.length()-1));
            return result;
        } else {
            result = Integer.valueOf(((new StringBuilder(String.valueOf(x))).reverse().toString()));
            return result;
        }
    }

    public static void main(String args[]){
        System.out.println(String.format("1212 -->  %s", reverse(1212)));
        System.out.println(String.format("-221 -->  %s", reverse(-221)));
        System.out.println(String.format("1000 -->  %s", reverse(1000)));
        System.out.println(String.format("-10 -->  %s", reverse(-10)));
        // System.out.println(String.format("1534236469 -->  %s", reverse(1534236469)));
    }
}