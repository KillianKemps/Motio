Motio
==========

How to develop for Motio:

- Clone the git repository
- Install Vagrant and VirtualBox if you haven't before
- Go in the git directory and issue 'vagrant up'
- Then for setting up mongoDB, Node and Karma do the following commands:
    ```
    vagrant ssh
    curl https://raw.githubusercontent.com/creationix/nvm/v0.11.0/install.sh | bash
    exit
    vagrant ssh
    nvm install 0.10
    npm cache clear
    npm install -g karma --save-dev
    npm install -g karma-cli --save-dev
    ```

- To start Node
    ```
    cd /vagrant
    node server.js
    ```
- For testing
    ```
    karma start
    ```