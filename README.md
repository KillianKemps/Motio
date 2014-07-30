MotivateMe
==========

How to develop for MotivateMe:

- Clone the git repository
- Install Vagrant and VirtualBox if you haven't before
- Go in the git directory and issue 'vagrant up'
- Then for setting up mongoDB do the following commands:
    'vagrant ssh'
    'curl https://raw.githubusercontent.com/creationix/nvm/v0.11.0/install.sh | bash'
    'exit'
    'vagrant ssh'
    'nvm install 0.10'
    'npm cache clear'
    'npm install -g karma --save-dev'
    'npm install -g karma-cli --save-dev'

- To start mongoDB
    'sudo /etc/init.d/mongod start'
- And then Node
    'cd /vagrant'
    'node server.js'
- For testing
    'karma start'

Or

- Download and install VirtualBox
- Download Ubuntu Server 14.04
- Create a new Virtual Machine with Ubuntu and install it
- Once installed, in the VirtualBox VM window->Devices->Install Guest Additions
- In Terminal of Ubuntu: 
	'cd /media/YOUR_USERNAME/VBOXADDITIONS_VERSION_OF_VIRTUALBOX'
	'./VBoxLinuxAdditions.run'
- In VirtualBox configure a shared folder wherever you want
- Reboot the Ubuntu VM
- In Terminal of Ubuntu:
	'sudo usermod -a -G vboxsf YOUR_USERNAME'
	Now you can access the shared folder from Ubuntu with '/media/NAME_OF_YOUR_VM'
- You can git clone the repository and then issue in the terminal
	'sudo apt-get install nodejs npm'
	'node server.js'