package collection;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Iterator;

@SuppressWarnings({"all"})
public class Learnier {
    public static void main(String[] args) {
        Collection col = new ArrayList();
        col.add(new Book("三国演义", "罗贯中"));
        // 遍历ArrayList() 迭代器
        Iterator iterator = col.iterator();
        while (iterator.hasNext()) {
            Object obj = iterator.next();
            System.out.println(obj);
        }
        // 通过for循环来遍历
        for(Object object : col){
            System.out.println(object);
        }
    }
    
}

class Book{
    private String name;
    private String authon;
    public Book(String name, String authon) {
        this.name = name;
        this.authon = authon;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getAuthon() {
        return authon;
    }
    public void setAuthon(String authon) {
        this.authon = authon;
    }
    @Override
    public String toString() {
        return "Book [authon=" + authon + ", name=" + name + "]";
    }
    
}
