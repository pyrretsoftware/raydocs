# rayutil

rayutil is an optional feature of ray to have a small JS bundle be inserted alongside your page content (don't worry, it's not fetched remotely). Rayutil provides a few different methods and utilities for working with ray in the browser. To enable it, use [`EnableRayUtil`](https://ray.pyrret.com/reference/rayconfig/#enablerayutil-bool) in your ray config:

```json
{
    "EnableRayUtil": true
}
```

<figure style="width: max-content;"><img src="./rayutil.png" alt=""><figcaption style="text-align: center; margin-top: 0.25rem;">Example of rayutil notification</figcaption></figure>