# Editing your ray config

Finally, you'l need to add your project to your ray config. With `rayc` installed, you can do `rayc config` to edit your config. For this example, im hosting my node project on github:

::: danger
It is not recommended you directly modify your ray config (`/usr/bin/ray-env/rayconfig.json`), because json errors will bring down your server. Doing it via comlines (like using `rayc`) prevents this from happening by not allowing invalid json. 
:::

```json
{
    "EnableRayUtil" : true,
    "Projects" : [
        {
            "Name" : "cool-node-project",
            "Src" : "https://github.com/axellse/cool-nodejs-project",
            "Domain" : "localhost"
        }
    ]
}
```

_Name_ is simply a unique name for your project, _Src_ is a link to your project's git repository and _Domain_ tells **ray router** (ray's reverse proxy) what host your project should be accessible at.&#x20;

Save your changes and then run `rayc reload` to apply your changes.