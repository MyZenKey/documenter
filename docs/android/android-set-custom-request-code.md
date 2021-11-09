# Custom Request Code on Android

You can also set custom request code as follows:

```java
public class MyActivity extends AppCompatActivity {

    private int MY_REQUEST_CODE = 9;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.my_layout);
        findViewById(R.id.myZenKeyButton).setRequestCode(MY_REQUEST_CODE);
    }
} 
```