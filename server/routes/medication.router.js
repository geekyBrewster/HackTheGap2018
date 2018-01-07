var express = require('express');
var router = express.Router();
var pool = require('../modules/pool.js');

//** -- GET ROUTE -- All Medications for PatientID -- **//
router.get('/all/:id', function(req, res) {
  console.log('in server getting medications for patientID: ', req.params.id);

  pool.connect(function(err, client, done, next) {
    if(err) {
      console.log("Error connecting: ", err);
      //next(err);
    }
    client.query("select * from medications where 'pilltakerID'=$1;", [req.params.id],
        function (err, result) {
          done();
          if(err) {
            console.log("Error inserting data: ", err);
            //next(err);
          } else {
            console.log('RESULT ROWS', result.rows);
            res.send(result.rows);
          }
        });
  });
});

//** -- GET ROUTE - Single Medication -- **//
router.get('/:id', function(req, res) {
  console.log('in server getting caretaker');
  console.log('with patient id', req.query.pilltakerID, ' and medication id: ', req.query.medicationID);

  var pilltakerID = parseInt(req.query.pilltakerID);
  var medicationID = parseInt(req.query.medicationID);

  pool.connect(function(err, client, done, next) {
    if(err) {
      console.log("Error connecting: ", err);
      //next(err);
    }
    client.query("select * from medications where 'pilltakerID'=$1 and 'id'=$2;", [pilltakerID, medicationID],
        function (err, result) {
          done();
          if(err) {
            console.log("Error inserting data: ", err);
            //next(err);
          } else {
            console.log('RESULT ROWS', result.rows);
            res.send(result.rows);
          }
        });
  });
});

//** -- POST ROUTE -- **//
router.post('/', function(req, res) {
  console.log('in server making a new medication', req.body);

  var dbQuery = 'insert into medications ("medName", "frequency", "frequencyUnits", ' +
  '"dosage", "dosageUnits", "sideEffects", "instructions", "description", "imageURL", ' +
  '"notes", "reminder1", "reminderTime1", "reminder2", "reminderTime2", "reminder3", "reminderTime3", "pilltakerID") ' +
  'values [$1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17]';

  var medName = req.body.medName;
  var frequency = req.body.frequency;
  var frequencyUnits = req.body.frequencyUnits;
  var dosage = req.body.dosage;
  var dosageUnits = req.body.dosageUnits;
  var sideEffects = req.body.sideEffects;
  var instructions = req.body.instructions;
  var description = req.body.description;
  var imageURL = req.body.imageURL;
  var notes = req.body.notes;
  var reminder1 = req.body.reminder1;
  var reminderTime1 = req.body.reminderTime1;
  var reminder2 = req.body.reminder2;
  var reminderTime2 = req.body.reminderTime2;
  var reminder3 = req.body.reminder3;
  var reminderTime3  = req.body.reminderTime3;
  var pilltakerID = req.body.pilltakerID;

  pool.connect(function(err, client, done, next) {
    if(err) {
      console.log("Error connecting: ", err);
      //next(err);
    }
    client.query(dbQuery, [medName, frequency, frequencyUnits, dosage, dosageUnits,
    sideEffects, instructions, description, imageURL, notes, reminder1, reminderTime1,
    reminder2, reminderTime2, reminder3, reminderTime3, pilltakerID],
        function (err, result) {
          done();
          if(err) {
            console.log("Error inserting data: ", err);
            //next(err);
          } else {
            console.log('RESULT ROWS', result.rows);
            res.send(result.rows);
          }
    });
  });
});

//** -- DELETE ROUTE -- **//
router.delete('/:id', function(req, res) {
  console.log('in server deleting medication entry');
  console.log('medication id: ', req.params.id);

  pool.connect(function(err, client, done, next) {
    if(err) {
      console.log("Error connecting: ", err);
      //next(err);
    }

    client.query("DELETE from medications where id = $1", [req.params.id],
        function (err, result) {
          done();
          if(err) {
            console.log("Error deleting data: ", err);
            //next(err);
          } else {
            console.log('delete SUCCESS');
            res.sendStatus(200);
          }
    });
  });
});

//** -- PUT ROUTE -- **//

module.exports = router;
