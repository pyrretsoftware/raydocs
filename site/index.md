---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "ray"
  text: "Easily self host your stuff"
  tagline: The all-in-one declarative system for self hosting
  image:
    src: /public/ray-screenshot.png
    alt: VitePress
  actions:
    - theme: brand
      text: Get started
      link: /guides/installation/
    - theme: alt
      text: Github repository
      link: https://github.com/pyrretsoftware/ray

features:
  - icon: 🧰
    title: Configs and git repos
    details: Declarative software deployment, simply declare what needs to get done in config files, and ray takes care of the rest. 
  - icon: 🗑️
    title: Disposable architecture
    details: Ray creates and builds everything from configs as it's ran, with no dependance on anything else. You could copy one config to a completely different machine and get the same result!
  - icon: 🛬
    title: Reverse proxy
    details: Includes ray router, a modern zero-config reverse proxy that can generate and maintain certificates automatically via Lets Encrypt.
  - icon: ⚖️
    title: Load balancer
    details: Includes RLS, a veristaile system for orchestration and load balancing between ray servers.
  - icon: 📺
    title: Deployment channels
    details: Easily configure and use deployment channels tied to branches for development and testing.
  - icon: 📌
    title: And a lot more
    details: Rayutil, plugins, extensions, comlines, monitoring, autofix, rayc,  automatic git updates, middleware, etc...
---

