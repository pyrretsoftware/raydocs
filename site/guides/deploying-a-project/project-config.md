# Creating your project config

Your project config is a file that lives in the root of your project's git repository that tells ray **how** to deploy your project. The most important part of your project config is called your project's **pipeline**, which is a series of instructions or commands that specifies steps to build and deploy your project.

Create a file in the root of your projects git repository called `ray.config.json`. For this example, im going to build and deploy a simple node app:

```json
{
  "Version" : "v1",
  "Pipeline" : [
    {
      "Tool" : "npm",
      "Command" : ["install"],
      "Type" : "build"
    }, 
    {
      "Tool" : "node",
      "Command" : ["index.js"],
      "Type" : "deploy"
    }
  ]
}
```
Here, ray will look for an executable file called "npm" in your system's PATH, then execute it with the argument "install". The type tells ray if the command is just part of the build process or if it is the command that actually starts your application. In this case, the first pipeline step will be identical to running `npm install`, but note that this wont always be the case, since nothing is ever being passed to the shell (for example, piping and command chaining wont work).

::: tip
In the example above, we use the node and npm tools that need to be installed, but there are also some built-in tools. For example, the "rayserve" tool will automatically statically serve a directory of your application!
:::

You can also specify some options for each pipeline step:
```json
{
  "Version" : "v1",
  "Pipeline" : [
    {
      "Tool" : "npm",
      "Command" : ["install"],
      "Type" : "build"
    }, 
    {
      "Tool" : "node",
      "Command" : ["index.js"],
      "Type" : "deploy",
      "Options" : {
        "Dir" : "./output", //directory to run the command in
        "EnvVar" : { //enviroument variables, DO NOT USE THIS FOR SECRETS (we'll take a look at secrets later in the guide)
            "some_flag_ig" : "true"
        },
        "IfAvailable" : true //if this is enabled, ray will check if the tool exists, if not, it does not treat it as an error and moves on. This is useful for supporting multiple operating systems/platforms or adding fallbacks if some tools are not available on the system.
      }
    }
  ]
}
```

Save and commit this file to your repo, then you can move on to the next step.