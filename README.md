# KINDeed: Med Tracker for Caretakers

(Hack the Gap 2018 - Hackathon project)

This medication tracker can be used by caretakers to track the Prescriptions used by their loved ones and send text message reminders to those loved ones.

## Built With

- PostgreSQL, Express, Node.js, Angular 1.6
- Passport for user authentication
- Twilio for text message notifications

## Getting Started

In a terminal window, navigate to the project folder once saved on your computer.
- Run `npm install`
- `npm start`
- Set up SQL server on local computer using code below:

```sql
CREATE DATABASE "medtracker";

CREATE TABLE "users" (
  "id" serial primary key,
  "username" varchar(80) not null UNIQUE,
  "password" varchar(240) not null
);
```
- Register a new log in order to enter site

- Create a config.js file and place it in the Server folder. This file will contain your Twilio account credentials and phone numbers to use w/ the text message service.

### Prerequisites

Link to software that is required to install the app (e.g. node).

- [Node.js](https://nodejs.org/en/)
- [AngularJS](https://angularjs.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [Express](http://expressjs.com/)
- [Twilio](https://www.twilio.com/)

### Installing

Steps to get the development environment running.

```sql
CREATE DATABASE "medtracker";

CREATE TABLE "users" (
  "id" serial primary key,
  "username" varchar(80) not null UNIQUE,
  "password" varchar(240) not null
);
```
+ dbSetup.sql file for additional tables and mock data

### Completed Features

- [x] Allow caretaker to add medications
- [x] Caretaker can send medication reminders to their loved ones using Twilio

### Next Steps

- [ ] Send text messages at pre-scheduled times
- [ ] View medication schedule on a calendar
- [ ] Send message reminders on a save schedule
- [ ] Incorporate IoT and SmartTV integration for reminder messages

## Authors

* Katie Whalen
* Amanda Kirchner
* Stephanie Freund
* Amelie Collins
* Anna Katherine Baker
* Jackie Torborg

## Acknowledgments

* Thanks to Beth for helping out the group on the non-coding side
* Prime Academy for the SEAN stack app shell
