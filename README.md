# PSW_ISA

---
# About
This project is done as a part of two courses at Faculty of technical sciences in Novi Sad, Serbia.
It is developed as a two-part application consisting of Angular-based frontend and Spring-boot based backend, hosted on [Heroku](https://oettinger.herokuapp.com/).

#### Authors
- @saksofon997
- @coperope
- @mihajlo-perendija

# Getting started

## Prerequisites: 

Ensure you have this installed before proceeding further

- Java 8
- Node ^10.15
- npm ^6.4
- maven ^3.6
- Angular cli
- PostgreSQL ^10
---
In the following sections we provided a set of instructions on how to run the application during development (as two separate instances: fronted & backend) or production (as an independent, deployment-ready instance).
## Create the database
In order for the application to run, it will need a database. The default database name is set as `project-database`, running on port `5432`. 
The database can be created:
- via CLI using psql commands:
```
# Run from postresql root /bin folder
createdb project-database
```
- via UI using provided PgAdmin.

Please refer to the [Postresql documentation](https://www.postgresql.org/docs/10/tutorial-createdb.html) for detailed instructions.

## Development
For development purposes one can build frontend and backend separately. Instructions on how to achieve this are contained in the next two subsections.
### Running Frontend
The frontend can be run as a separate instance during development, which would enable changes in code to result in real-time changes in a browser. This can be achieved using following commands:
- **Note** *commands are to be excecuted from the root of the project.*
```
# Navigate to the frontend
cd client

# Install the required dependencies using npm
npm install

# Run the frontend instance
npm start
```
Now you should be able to access http://localhost:4200
#### Note
- *All requests to the server side of the application are relative. The frontend is using a proxy that defaults to http://localhost:8080. In order to change this behaviour modify the **target** property in **proxy.conf.json** file.*

### Building backend (Spring boot Java) & starting the API and WebUI server
The server side of the application can be built using maven as a server build tool. Make sure your port 8080 is not used, or change it *(port and other configurations for API server are in [./server/src/main/resources/application.properties](/server/src/main/resources/application.properties) file).*
```
# Navigate to the backend
cd server

# Make sure you are in the directory where pom.xml file is located
mvn clean install

# Previous command resulted in a jar file created in server/target/
# Now excecute it
java -jar ./target/ClinicalSystem.jar
```
The server side should now be accesible at http://localhost:8080

## Production

### Build frontend
When build (using maven), the backend is adjusted to pick up the frontend code from `server\src\main\resources\static`.
To be able to access all the code together at http://localhost:8080, we need to build the frontend.
The following commands will automatically put the generated frontend code to `server/src/main/resources/static`.
```
# Navigate to the frontend
cd client

# Install the required dependencies using npm
npm install

# Build the frontend code -> default location is server/src/main/resources/static
npm run-script build
```
### Build backend
After frontend is built we can excecute the same commands used during development to access the application as a whole.
Please refer to the *[Building backend](https://github.com/saksofon997/PSW_ISA/blob/master/README.md#building-backend-spring-boot-java--starting-the-api-and-webui-server)* section under **Development**.

### DevOps (micro) flow
Jenkins server has been set up to activate tests, triger a build and deploy the project on every pull request to this repository.
The link where one can access administration of Jenkins server is dynamically created, and current one is [this link](http://8b37064a.ngrok.io). For credentials, please contact the project contributors.
