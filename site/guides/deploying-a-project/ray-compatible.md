# Making your app ray-compatible

The only thing you need to change in your app for it to be compatible with ray is the port it uses. Ray will automatically expose the `ray-port` environment variable to your app, so you simply need to have your application use that port.

For the example in this guide, im doing an express app:
```javascript
const express = require('express')
const app = express()
const port = process.env["ray-port"] //it's that simple

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

```

::: tip
The ray-port environment variable is also available under the name "RAY\_PORT". &#x20;
:::

You can also have your app use a unix domain socket instead of a port (named pipes on windows). Ray will expose the `RAY_SOCK_PATH` environment variable, and your app will need to create a socket (really just a file) at that path and begin listening on it.