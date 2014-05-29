#!/usr/bin/env bash


#Install MongoDB
apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 7F0CEB10
echo 'deb http://downloads-distro.mongodb.org/repo/ubuntu-upstart dist 10gen' | sudo tee /etc/apt/sources.list.d/mongodb.list
apt-get update
apt-get install -y nodejs npm mongodb-org

cd /vagrant
#echo "---npm install"
#npm install
#echo "---bower install"
#bower install

#Start MongoDB
echo "---Configuring MongoDB"
mongo
use motivatemedb
db.usercollection.insert({ "username" : "testuser1", "email" : "testuser1@testdomain.com" })
echo "---MongoDB responding..."
db.usercollection.find().pretty()
exit
echo "---Running MongoDB"
sudo /etc/init.d/mongod start
echo "---Running Server on 192.168.42.42"
node server.js
