var express = require('express');
var router = express.Router();
var pool = require('../modules/pool.js');

//** -- GET ROUTE -- Single Pilltaker -- **//
router.get('/:id', function(req, res) {
  console.log('in server getting pilltaker');
  console.log('with pilltaker id', req.params.id);

  pool.connect(function(err, client, done, next) {
    if(err) {
      console.log("Error connecting: ", err);
      //next(err);
    }
    client.query('SELECT * FROM "pilltaker" WHERE "id" = $1', [req.params.id],
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

//** -- GET ROUTE -- ALL Pilltakers -- **//
router.get('/all/:id', function(req, res) {
  console.log('in server getting all pilltakers');
  console.log('with caretaker id', req.params.id);

  pool.connect(function(err, client, done, next) {
    if(err) {
      console.log("Error connecting: ", err);
      //next(err);
    }
    client.query("select * from pilltakers where caretakerID = $1;", [req.params.id],
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

//** -- POST ROUTE - Add Pilltaker Info -- **//
router.post('/', function(req, res) {
  console.log('in server adding a new pilltaker', req.body);

  var dbQuery = 'insert into pilltakers ("firstName", "lastName", ' +
  '"dob", "phone", "notes", "caretakerID") values [$1, $2, $3, $4, $5, $6];';

  firstName = req.body.firstName;
  lastName = req.body.lastName;
  dob = req.body.dob;
  phone = req.body.phone;
  notes = req.body.notes;
  caretakerID = req.body.caretakerID;

  pool.connect(function(err, client, done, next) {
    if(err) {
      console.log("Error connecting: ", err);
      //next(err);
    }
    client.query(dbQuery,[firstName, lastName, dob, phone, notes, caretakerID],
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

//** -- DELETE ROUTE - Pilltaker -- **//
router.delete('/:id', function(req, res) {
  console.log('in server deleting pilltaker entry');
  console.log('pilltaker id: ', req.params.id);

  pool.connect(function(err, client, done, next) {
    if(err) {
      console.log("Error connecting: ", err);
      //next(err);
    }

    client.query("DELETE from pilltakers where id = $1", [req.params.id],
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
