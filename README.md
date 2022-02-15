# Feedback V2 application

> Web application to provide feedback

This project is hosted [here](https://feedback-v2-greg.herokuapp.com/)

## Features

- Frontend coded in React
- Backend coded in Nodejs using express and mongoose
- Rating from other users are displayed real-time using socketio
- Supports half-star reviews

## Usage

### ES Modules in Node

We use ECMAScript Modules in the backend in this project. Be sure to have at least Node v14.6+ or you will need to add the "--experimental-modules" flag.

### Env Variables

Create a .env file in then root and add the following

```
NODE_ENV = development
PORT = 5000
MONGO_URI = your mongodb uri
```

### Install Dependencies (frontend & backend)

```
npm install
cd client
npm install
```

### Run

```
# Run frontend (port :3000) & backend (port :5000)
npm run dev

# Run frontend only
npm run client

# Run backend only
npm run server
```

## Build & Deploy

```
# Create frontend prod build
cd client
npm run build
```

There is a Heroku postbuild script, so if you push to Heroku, no need to build manually for deployment to Heroku

### Seed Database

You can use the following commands to seed the database with some sample reviews as well as delete all data

```
# Import data
npm run data:import

# Delete data
npm run data:delete
```
