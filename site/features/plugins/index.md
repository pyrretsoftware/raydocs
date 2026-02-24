# Plugins

Plugins allow you to pass certain data from ray into your apps. There is currently only one plugin, **raystatus**, which passes information about running ray processes to create status pages. To receive data from a plugin, specify the PluginImplementation field:

```json
{
    "EnableRayUtil" : true,
    "Projects" : [
        {
            "Name" : "cool-node-project",
            "Src" : "https://github.com/axellse/cool-nodejs-project",
            "PluginImplementation" : "raystatus",
            "Domain" : "localhost"
        }
    ]
}
```

This project can now receive plugin data in json format on every request through the `x-rls-plugin-data` header. For an example of what you can make with **raystatus**, see [modernstatus.axell.me](https://modernstatus.axell.me).
