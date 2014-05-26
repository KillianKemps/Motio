#!/usr/bin/env bash

apt-get update
apt-get install -y nodejs npm 
cd /vagrant
#echo "---npm install"
#npm install
#echo "---bower install"
#bower install
echo "---Running Server on 192.168.42.42"
node server.js
