## Steps:

*   create new project 

*   create `.dockerignore`

*   create `Dockerfile`

        from node:18-alpine

        WORKDIR /

        copy . .

        RUN npm i

        cmd ["npm", "start"]

        EXPOSE 3000


*   Create a image file:

        sudo docker build -t test-image .


*   List docker images

        sudo docker image ls


*   Crate a docker container form image `test-image`

        sudo docker run -dp 3000:3000 test-image


*   List of running containers

        sudo docker container ls


*   Stop running container

        sudo docker container stop kind_ishizaka


*   Start Stopped Container

        sudo docker container start kind_ishizaka
