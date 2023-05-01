import java.util.List;
import java.util.ArrayList;

class ZigzagConversion {
    public static String convert(String s, int numRows) {
        boolean isReverse = false;
        String result = "";
        List<String> rows = new ArrayList<String>();
        for(int i = 1; s.length() > 0; i++) {
            // System.out.println(String.format("i: %s", i));
            int cutLength = numRows*2-2 > 0 ? numRows*2-2 : 1;
            char[] cur = s.length() >= cutLength ? s.substring(0,cutLength).toCharArray() : s.toCharArray();
            for(int j = 0, rowNumber = 0; j < cur.length; j++) {
                System.out.println(String.format("s: %s\ncutLength: %s\nisReverse: %s\nj: %s\nrowNumber: %s\ncur.length: %s",
                                                s, cutLength, isReverse, j, rowNumber, cur.length));
                if(rows.size() < numRows) {
                    rows.add("" + cur[j]);
                } else {
                    rows.set(rowNumber, rows.get(rowNumber)+cur[j]);
                }
                rowNumber = isReverse ? rowNumber-1 : rowNumber+1;
                isReverse = (rowNumber == numRows-1 || rowNumber == 0) ? !isReverse : isReverse;
            }
            s = s.length() > cutLength ? s.substring(cutLength) : "";
        }
        for(String row: rows) {
            result = result + row;
        }
        return result;
    }

    public static void main(String args[]){
        // PAHNAPLSIIGYIR
        System.out.println(String.format("PAYPALISHIRING -->  %s", convert("PAYPALISHIRING", 3)));
        System.out.println(String.format("A -->  %s", convert("A", 1)));
        System.out.println(String.format("AB -->  %s", convert("AB", 1)));
    }
}