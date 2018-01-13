-- Create Database --
CREATE DATABASE "medtracker";

-- Create table for users - authentication and profile info --
CREATE TABLE "users" (
  "id" serial primary key,
  "username" varchar(80) not null UNIQUE,
  "password" varchar(240) not null,
  "phone" int,
  "firstname" varchar(100),
  "lastname" varchar(100)
);

-- Create table for Loved Ones --
 CREATE TABLE "pilltakers" (
 	"id" serial primary key,
 	"firstName" varchar(150),
 	"lastName" varchar(150),
 	"dob" varchar(100),
 	"phone" int,
 	"notes" varchar(500),
 	"caretakerID" int references users(id)
 );

-- Create table for medications and reminders --
CREATE TABLE "medications" (
    "id" serial primary key,
    "medName" varchar(150),
    "frequency" int,
    "frequencyUnits" varchar(150),
    "dosage" int,
    "dosageUnits" varchar(150),
    "sideEffects" varchar(500),
    "instructions" varchar(500),
    "description" varchar(500),
    "imageURL" varchar(150),
    "notes" varchar(1000),
    "reminder1" varchar(500),
    "reminderTime1" varchar(250),
    "reminder2" varchar(500),
    "reminderTime2" varchar(250),
    "reminder3" varchar(500),
    "reminderTime3" varchar(250),
    "pilltakerID" int references pilltakers(id)
 );

 -- Add Mock Data --
--** Register TWO new users BEFORE adding mock data below **--

INSERT INTO pilltakers ("firstName", "lastName", "dob", "phone", "notes", "caretakerID")
VALUES ('Bob', 'Fett', 'Oct. 31, 1960', '6125551234', 'Doesn''t like to take his meds', 1);

INSERT INTO pilltakers ("firstName", "lastName", "dob", "phone", "notes", "caretakerID")
VALUES ('Sasha', 'Johnson', 'Mar. 3, 1951', '9525550987', 'Needs to take most meds with food', 1);

INSERT INTO pilltakers ("firstName", "lastName", "dob", "phone", "notes", "caretakerID")
VALUES ('William', 'DaFoe', 'June 13, 1958', '5075557987', 'Forgets to read the med labels', 2);

INSERT INTO medications ("medName", "frequency", "frequencyUnits", "dosage","dosageUnits", "sideEffects",
  "instructions", "description", "imageURL", "notes", "reminder1", "reminderTime1", "reminder2",
  "reminderTime2", "reminder3", "reminderTime3", "pilltakerID")
VALUES ("Warfarin", "2", "day", "10","mg", "Extra bleeding, drowsiness",
  "instructions", "description", "imageURL", "notes", "reminder1", "reminderTime1", "reminder2",
  "reminderTime2", "reminder3", "reminderTime3", "pilltakerID");
