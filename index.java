import java.util.*;
public class index {
    public static void main(String[] args) {
        int k=2;
        int n=2;
        int[] arr = {1,2};
        int count=0;
        ArrayList<Integer> al = new ArrayList<>();
        ArrayList<Integer> al1 = new ArrayList<>();
        
        for(int i=0;i<n;i++){
            al.add(arr[i]);
        }
        for(int i=0;i<k;i++){
            al.addAll(al1);
        }
        for(int i : al1){
            System.out.println(i);
        }
            
    }      
}
