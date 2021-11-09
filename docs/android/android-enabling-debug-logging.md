# Enabling Debug Logging on Android

ZenKey's SDK offers a logging mechanism to help with integration and debugging.
The default setting has logs disabled. To activate logs, do the following: enable the logs in your application class if you have one, or in class before starting a request.

```java
public class MyClass {

    public void myMethod(){
        ZenKey.logs(true); 
    }
}
```