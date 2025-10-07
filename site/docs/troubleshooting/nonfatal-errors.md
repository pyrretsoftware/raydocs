# Common non-fatal errors
This page lists common non-fatal errors.

## Authenticating when using private repos

When using private repos with ray, you might run into the following issue:

```
git cloning error: exit status 128
```

This means that git was not able to access the repository due to no or invalid credentials. When you're using private repos,  you'll need to make sure you're authenticated with git on your server. Remember that rays runs as root, so you need to make sure you are authenticating git as the root user. For example, when authenticating with GitHub, you need to run `sudo gh auth login` instead of `gh auth login` as to run as root.

If you want automatic updates to your project as the origin git repository changes, you'll also need to specify Git authentication with the `GitAuth` config option like so:

```json
"GitAuth" : {
    "Username" : "",
    "Password" : ""
}
```

This will use HTTP basic authentication when connecting to your git server. Some git providers require tokens instead of a password in the password field, like GitHub, where you need to use a [Personal Access Token](https://docs.github.com/en/rest/authentication/authenticating-to-the-rest-api?apiVersion=2022-11-28#authenticating-with-a-personal-access-token).