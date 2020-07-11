# udagram

***Credits***
Udacity Cloud Developer Nanodegree Program

Udagram is a simple cloud application developed alongside the Udacity Cloud Engineering Nanodegree. It allows users to register and log into a web client, post photos to the feed, and process photos using an image filtering microservice.

The project is split into three parts:
1. [The Simple Frontend](https://github.com/udacity/cloud-developer/tree/master/course-02/exercises/udacity-c2-frontend)
A basic Ionic client web application which consumes the RestAPI Backend. [Covered in the course]
2. [The RestAPI Backend](https://github.com/udacity/cloud-developer/tree/master/course-02/exercises/udacity-c2-restapi), a Node-Express server which can be deployed to a cloud service. [Covered in the course]
3. [The Image Filtering Microservice](https://github.com/udacity/cloud-developer/tree/master/course-02/project/image-filter-starter-code), the final project for the course. It is a Node-Express application which runs a simple script to process images. [My assignment]

## Tasks

### Setup Node Environment

You'll need to create a new node server. Open a new terminal within the project directory and run:

1. Initialize a new project: `npm i`
2. run the development server with `npm run dev`

### Create a new endpoint in the server.ts file

The starter code has a task for you to complete an endpoint in `./src/server.ts` which uses query parameter to download an image from a public URL, filter the image, and return the result.

We've included a few helper functions to handle some of these concepts and we're importing it for you at the top of the `./src/server.ts`  file.

```typescript
import {filterImageFromURL, deleteLocalFiles} from './util/util';
```

### Deploying your system

Follow the process described in the course to `eb init` a new application and `eb create` a new environment to deploy your image-filter service! Don't forget you can use `eb deploy` to push changes.

# What I learnt 

# What I did: rubric

-------------

# What I learnt 

In this project it is add a new entrypint to this nodejs tyscript server and deploy it in Beanstalk.

![Arquitecture](https://github.com/mblazleon/udagram/blob/master/arq.png)

# What I did: rubric

Engineering Process and Quality

- [x] ***The project demonstrates an understanding of a good cloud git process***: All project code is stored in a GitHub repository and this link has been submitted for review. There are at least two branches - one for development (dev, development) and one master. Master should contain the most up-to-date, stable code at the time of submission.

- [x] ***The project demonstrates an ability to use typescript and Nodejs***: Any variables use typescript typing wherever possible, variable and function names are clear, endpoints are logically named. Good coding practices are followed.

Development Server

- [x] ***The project demonstrates the ability to develop using the NodeJS framework***: Starting the server with npm run dev runs a local instance of the server with no errors

- [x] ***The project demonstrates an understanding of RESTFUL design***: The stubbed @TODO1 endpoint in src/server.ts is completed and accepts valid requests including:
http://localhost:{{PORT}}/filteredimage?image_url=https://cdn.fileinfo.com/img/ss/lg/jpeg_43.jpg

![todo1_local](https://github.com/mblazleon/udagram/blob/dev/todo1_local.png)

- [x] ***The project demonstrates an understanding of HTTP status codes***: Successful responses have a 200 code, at least one error code for caught errors (i.e. 422)

Elastic Beanstalk Deployment

- [x] ***The project demonstrates an understanding of AWS Elastic Beanstalk’s CLI and Console Dashboard***: The project was deployed using the AWS Elastic Beanstalk CLI eb init, eb create, and eb deploy commands. A screenshot of the elastic beanstalk application dashboard is included in a deployment_screenshot directory.

![eb](https://github.com/mblazleon/udagram/blob/dev/eb.png)

- [x] ***The project demonstrates the ability to create functional cloud deployments***: An endpoint URL for a running elastic beanstalk deployment (EB_URL) has been submitted along with the project submission. This endpoint responds to valid GET requests including:
http://{{EB_URL}}/filteredimage?image_url=https://cdn.fileinfo.com/img/ss/lg/jpeg_43.jpg

This is the url:

http://udagram-rblazleon-dev-dev2.us-west-2.elasticbeanstalk.com/filteredimage?image_url=https://cdn.fileinfo.com/img/ss/lg/jpeg_43.jpg

![todo1_eb](https://github.com/mblazleon/udagram/blob/dev/todo1_eb.png)



# Optional

Is is created a dockerfile and run the service in a docker image in local.
