# TLS (HTTPS)
You can configure tls (https) for your projects in two ways, either you supply your own certificates, or ray router can automatically issue and renew a certificate from [Lets Encrypt](https://letsencrypt.org/). For example:

```json
{
    "Projects" : {}, //...
    "TLS" : {
        "Provider" : "letsencrypt"
    }
}
```

For automatic certificates, set the provider to "letsencrypt", for your own certificates, set the provider to "custom", and supply the certificate and private key in PEM format like so:

```json
{
    "Projects" : {}, //...
    "TLS" : {
        "Provider" : "custom",
        "Certificate" : "-----BEGIN CERTIFICATE-----\n      certificate goes here   \n-----END CERTIFICATE-----\n",
        "PrivateKey" : "-----BEGIN RSA PRIVATE KEY-----\n   private key goes here   \n-----END RSA PRIVATE KEY-----\n"
    }
}
```