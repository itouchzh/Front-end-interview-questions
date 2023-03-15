package com.hello;

public class Hello {
    private int age;
    private String name = "paul";

    public Hello(int age, String name) {
        this.age = age;
        this.name = name;
    }

    public void out() {
        System.out.println(this.age + this.name);
    }

    public static void main(String[] args) {
        System.out.println();
        Hello hello = new Hello(23, "77");
        hello.out();
    }

}
