#!bin/bash
set -e

# pull the docker image from the dockerhub
docker pull s0uvik/simple-node-application

# run the docker image as a container
docker run -d -p 8080:8080 s0uvik/simple-node-application
