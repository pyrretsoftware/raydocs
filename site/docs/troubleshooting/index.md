# Troubleshooting
This page helps you troubleshoot why something isnt working.

### Fatal ray error

Indicated by:

* &#x20;A "ray server has exited" message if you have setup monitoring with Discord/Slack.
* A "Rays did not indicate success in reloading processes" message if the error occurs while reloading
* Rays not answering any requests.

To troubleshoot a fatal error, read the crash.txt file in ray-env. On Linux, for example:

```bash
cat /usr/bin/ray-env/crash.txt
```

This will tell you a crash reason. See [common issues](fatal-errors.md).

### Process error

Indicated by:

* A "Process x, deployment y has errored!" message if you have setup monitoring with Discord/Slack.
* A ray error page when accessing a project.

To troubleshoot a process build error, read the build log which is easiest done with the `rayc logs -build` command.

If the build succeeded, the error occurred after build. You can use `rayc logs`. If you cant find the issue there, check `journalctl -u rays` against [Common nonfatal errors](nonfatal-errors.md). 
