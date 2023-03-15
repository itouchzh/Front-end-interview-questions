@Contraller
public class HelloSpringboot {
    
    @RequestMapping("/hello")
    @ResponseBody
    public String name() {
        return "Hello Spring"
    }
}
