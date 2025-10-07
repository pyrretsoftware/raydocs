# How RLS works

The name "Ray load balancing system" is a bit misleading, because while you certainly can set up multiple servers in the classic "load balancer & server" configuration, where the load balancer machine's only job is to route requests and the server machine's job is to handle those requests, RLS is a much more flexible system that allows you to have a lot more different ways for ray servers to cooperate.

The main concept to understand with RLS is one called "helper servers". Every ray server with RLS enabled is configured with a list of its helpers servers. If two servers both have each other in their lists, they establish a connection with each other and become "helpers", like two servers that are friends. Depending on how both of them are configured, they can now help each other by running a project for the other. In ray terms, a process can be "outsourced" to a different server or "administered" on behalf of another server.&#x20;

When one server administers a project for the other, it behaves like the server that outsourced the project would be running it themselves. For example, you cannot access a project from a server that administers it for another server, you would have to access it through that server.

How does load balancing come into this? Well, a project can actually be ran on multiple servers at the same time, including itself! When this happens, ray will automatically load balance the traffic to the project between them using a weighted IP hash algorithm.

Don't understand it? I'm pretty bad at explaining stuff in english, but maybe this diagram could help:

<figure style="width: max-content;"><img src="./arch.avif" alt=""><figcaption style="text-align: center; margin-top: 0.25rem;">Diagram of how RLS helper servers works</figcaption></figure>
