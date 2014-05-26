MotivateMe
==========

How to develop for MotivateMe:

- Download and install VirtualBox
- Download Ubuntu Server 14.04
- Create a new Virtual Machine with Ubuntu and install it
- Once installed, in the VirtualBox VM window->Devices->Install Guest Additions
- In Terminal of Ubuntu: 
	"cd /media/YOUR_USERNAME/VBOXADDITIONS_VERSION_OF_VIRTUALBOX"
	"./VBoxLinuxAdditions.run"
- In VirtualBox configure a shared folder wherever you want
- Reboot the Ubuntu VM
- In Terminal of Ubuntu:
	"sudo usermod -a -G vboxsf YOUR_USERNAME"
	Now you can access the shared folder from Ubuntu with "/media/NAME_OF_YOUR_VM"
- You can git clone the repository and then issue in the terminal
	"node server.js"