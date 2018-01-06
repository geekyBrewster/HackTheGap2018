# Caring with Kindness: Med Tracker

Hack the Gap 2018 - Hackathon project

## Built With

- SQL / PostgreSQL, Express, Node.js
- Passport for user authentication

## Getting Started

In a terminal window, navigate to the project folder once saved on your computer.
- Run `npm install`
- `npm start`
- Set up SQL server on local computer, such as PostgreSQL through Postico

```sql
CREATE DATABASE "medtracker";

CREATE TABLE "users" (
  "id" serial primary key,
  "username" varchar(80) not null UNIQUE,
  "password" varchar(240) not null
);

INSERT INTO users (username, password)
VALUES ('admin', '1234');
```

### Prerequisites

Link to software that is required to install the app (e.g. node).

- [Node.js](https://nodejs.org/en/)
- [PostgreSQL](https://www.postgresql.org/)
- [Express](http://expressjs.com/)


### Installing

Steps to get the development environment running.

```sql
CREATE DATABASE "medtracker";

CREATE TABLE "users" (
  "id" serial primary key,
  "username" varchar(80) not null UNIQUE,
  "password" varchar(240) not null
);

INSERT INTO users (username, password)
VALUES ('admin', '1234');
```

## Screen Shot

Include one or two screen shots of your project here (optional). Remove if unused.

## Documentation

Link to a read-only version of your scope document or other relevant documentation here (optional). Remove if unused.

### Completed Features

High level list of items completed.

- [x] Feature a
- [x] Feature b

### Next Steps

Features that you would like to add at some point in the future.

- [ ] Feature c

## Deployment

Add additional notes about how to deploy this on a live system

## Authors

* Name of author(s)


## Acknowledgments

* Chris Black, Kris Szafranski & Prime Academy for the app shell
