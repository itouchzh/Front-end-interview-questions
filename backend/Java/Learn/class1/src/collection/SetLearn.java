package collection;

import java.util.HashSet;
import java.util.Set;

@SuppressWarnings({ "all" })
public class SetLearn {
    public static void main(String[] args) {
        Set set = new HashSet();
        set.add("paul");
        
        for (Object obj : set) {
            System.out.println(obj);
        }
    }
}
