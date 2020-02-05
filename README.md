# PSW_ISA
PSW/ISA projekat

# Prerequisites: 

Ensure you have this installed before proceeding further

- Java 8
- Node ^10.15
- npm ^6.4
- maven ^3.6
- Angular cli
---
# About
This project is done as a part of two courses at Faculty of technical sciences in Novi Sad, Serbia.
It is developed as a two-part application consisting of Angular-based frontend and Spring-boot based backend, hosted on Heroku.
# Getting started

## Development
For development purposes one can build frontend and backend separately. Instructions on how to achieve this are contained in the next two subsections.
### Running Frontend
The frontend can be run as a separate instance during development, which would enable changes in code to result in real-time changes in a browser. This can be achieved using following commands (which are to be excecuted from the root of the project).
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
The server side of the application can be built using maven as a server build tool. Make sure your port 8080 is not used, or change it *(port and other configurations for API server is in [./server/src/main/resources/application.properties](/server/src/main/resources/application.properties) file).*
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
npm build
```
### Build backend
