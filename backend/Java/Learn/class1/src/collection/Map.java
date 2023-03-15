package collection;

import java.util.HashMap;

public class Map {
    @SuppressWarnings({"all"})
    public static void main(String[] args) {
        // 哈希表
        HashMap hashMap = new HashMap();
        hashMap.put("No1", "北京");
        
        System.out.println(hashMap.get("No1"));

    }
    

}
