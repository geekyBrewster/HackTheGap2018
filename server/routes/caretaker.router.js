var express = require('express');
var router = express.Router();
var pool = require('../modules/pool.js');

//** -- GET ROUTE -- Caretaker Info -- **//
router.get('/:id', function(req, res) {
  console.log('in server getting caretaker');
  console.log('with caretaker id', req.params.id);

  pool.connect(function(err, client, done, next) {
    if(err) {
      console.log("Error connecting: ", err);
      //next(err);
    }
    client.query("select * from caretakers where id = " + req.params.id + ";",
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

//** -- POST ROUTE - Add Caretaker Info -- **//
router.post('/', function(req, res) {
  console.log('in server adding a new caretaker', req.body);

  pool.connect(function(err, client, done, next) {
    if(err) {
      console.log("Error connecting: ", err);
      //next(err);
    }
    client.query("insert into caretakers values [$1, $2, $3, $4, $5, $6];",
    [item1, item2, item3, item4, item5, item6],
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

//** -- DELETE ROUTE - Caretaker -- **//
router.delete('/:id', function(req, res) {
  console.log('in server deleting caretaker entry');
  console.log('caretaker id: ', req.params.id);

  var id = req.params.id;
  pool.connect(function(err, client, done, next) {
    if(err) {
      console.log("Error connecting: ", err);
      //next(err);
    }

    client.query("DELETE from caretakers where id = $1", [id],
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
