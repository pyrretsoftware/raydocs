# Middleware
Ray supports compatible middleware, simply specify a destination with the `Middleware` field and ray router will route there. Your middleware should then forward the request to your app, which is given in the `x-middleware-dest` header.
```json
{
    "EnableRayUtil" : true,
    "Projects" : [
        {
            "Name" : "cool-node-project",
            "Src" : "https://github.com/axellse/cool-nodejs-project",
            "Middleware" : "localhost:3001",
            "Domain" : "localhost"
        }
    ]
}
```