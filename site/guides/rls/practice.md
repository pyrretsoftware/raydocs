# Using RLS

Now that we have some theory on how RLS works, let's get on to actually using it. To add a helper server, see the example below:

```json
{
    "Projects" : {}, //...
    "RLSConfig" : {
        "Enabled" : true,
        "Helpers" : [
            {
                "Name" : "other-server", //name used as identifer
                "Host" : "192.168.1.207", //can be a private/public ip or a hostname/domain that resolves to an ip
                "Weight" : 1.4 //explained below
            }
        ]
    },
}
```

In the example above, pay attention to the Weight field. It's used to specify how many more requests the server should receive relative to the local server. It's useful when some servers are more powerful and can handle more requests than others. It's relative to the local server, where the local server has a weight of 1. &#x20;

Now, to specify what servers to deploy a project on, see the example below:

```json
{
    "Projects": [
        {
            "Name" : "example project",
            "Domain" : "example.com",
            "DeployOn" : ["local", "other-server"], //local means the current server
            "Src" : "https://git-provider.com/user/project"
        }
    ],
}
```

Like explained before, ray will now load balance traffic to "example project" between the local server and "other-server".&#x20;