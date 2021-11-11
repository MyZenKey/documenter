---
sidebar_position: 15
---

# Custom Redirect URI for ZenKey Button on Android

When using the `ZenKeyButton`, configure the custom Redirect URI as follows:

```java
public class MyActivity extends AppCompatActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.my_layout);
        ZenKeyButton zenKeyButton = findViewById(R.id.myZenKeyButton);
        zenKeyButton.setRedirectUri(
                new Uri.Builder()
                    .scheme("com.mydomain") 
                    .authority("authorize") 
                    .build());
    }
}
```