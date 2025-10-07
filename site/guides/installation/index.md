# Installation

This guide will walk you through how to install ray server onto a Linux or Windows machine.

## 1. Getting an installation package

If you want the latest stable release (recommended), navigate to [the releases page](https://github.com/pyrretsoftware/ray/releases) and find the release asset that matches your OS and processor architecture. If you want the latest unstable build, see the [Github actions page](https://github.com/pyrretsoftware/ray/actions).

Some of the architecture names can be a bit confusing, so see the list below if you need help picking the right installation package.

* **386** refers to the 32 bit version of the x86 architecture, found in older processors made by Intel. The name comes from the Intel 80386; the first 32 bit x86 processor.
* **amd64** refers to the 64 bit version of the x86 architecture (x86-64), found in most processors made by AMD and Intel. It's the most common architecture for PC's and servers.

The rest of the architecture names are pretty self explanatory.&#x20;

## 2. Unzip the installation package

Unzip the installation package you downloaded from the previous step and navigate to the extracted folder.

## 3. Running the setup wizard

Next, run `sudo ./rayinstall` on Linux or just `rayinstall` as an admin on Windows to begin the installation.

## 4. Finishing up

See the steps below depending on your platform.

::: details Linux with systemd
If you're on a Linux system with systemd (Ubuntu, Debian, Fedora, Arch, openSUSE, Manjaro, etc), you just need to enable rays as a systemd service with `sudo systemctl enable rays` . It's recommended that you now perform a reboot, but if you would like to avoid that you can start rays manually with `sudo systemctl start rays`
:::
::: details Linux without systemd
If your Linux distro **doesn't** use systemd, you'll have to register rays as a service/daemon manually if you want it to be automatically started. See the commands below for what to specify when doing that:

* Starting: `sudo rays daemon`&#x20;
* Stopping: `sudo rays stop`&#x20;
* Reloading: `sudo rays reload`&#x20;
:::
::: details Windows
Currently, ray server does not register itself as a Windows service automatically. You can try to do that manually, or you can add a batch script that launches rays to your autostart directory (shell:startup). For example:

```batch
rays daemon
```
:::

Rays is now installed! It's recommended that you perform a reboot after installation. If you would like to test rays, you can run `curl http://localhost/curl_test.txt`