var express = require('express');
var router = express.Router();
var pool = require('../modules/pool.js');

//** -- GET ROUTE -- Caretaker Info -- **//
router.get('/caretaker/:id', function(req, res) {
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

//** -- GET ROUTE -- Single Pilltaker -- **//
// router.get('/case/:id', function(req, res) {
//   console.log('in server getting pilltaker');
//   console.log('with pilltaker id', req.query.pilltaker_id, ' and caretaker_id: ', req.query.caretaker_id);
//
//   var pilltakerID = parseInt(req.query.pilltaker_id);
//   var caretakerID = parseInt(req.query.caretaker_id);
//
//   pool.connect(function(err, client, done, next) {
//     if(err) {
//       console.log("Error connecting: ", err);
//       //next(err);
//     }
//     client.query('SELECT * FROM "pilltaker" JOIN "caretaker" ON "pilltaker"."caretaker_id" = "caretaker"."id" ' +
//     'JOIN "job_site" ON "job_site"."id" = "goal"."jobsite_id" WHERE "pilltaker_id" = $1 AND "caretaker"."id" = $2', [pilltaker_id, caretaker_id],
//         function (err, result) {
//           done();
//           if(err) {
//             console.log("Error inserting data: ", err);
//             //next(err);
//           } else {
//             console.log('RESULT ROWS', result.rows);
//             res.send(result.rows);
//           }
//         });
//   });
// });

//** -- GET ROUTE -- ALL Pilltakers -- **//
// router.get('/case/all/:id', function(req, res) {
//   console.log('in server getting all pilltakers');
//   console.log('with caretaker id', req.params.id);
//
//   pool.connect(function(err, client, done, next) {
//     if(err) {
//       console.log("Error connecting: ", err);
//       //next(err);
//     }
//     client.query("select * from pilltakers where caretaker_id = $1;", [req.params.id],
//         function (err, result) {
//           done();
//           if(err) {
//             console.log("Error inserting data: ", err);
//             //next(err);
//           } else {
//             console.log('RESULT ROWS', result.rows);
//             res.send(result.rows);
//           }
//         });
//   });
// });

//** -- POST ROUTE - Add Caretaker Info -- **//
router.post('/caretaker', function(req, res) {
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

//** -- POST ROUTE - Add Pilltaker Info -- **//
router.post('/case', function(req, res) {
  console.log('in server adding a new pilltaker', req.body);

  pool.connect(function(err, client, done, next) {
    if(err) {
      console.log("Error connecting: ", err);
      //next(err);
    }
    client.query("insert into pilltakers values [$1, $2, $3, $4, $5, $6];",
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
router.delete('/caretaker/:id', function(req, res) {
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

//** -- DELETE ROUTE - Pilltaker -- **//
router.delete('/case/:id', function(req, res) {
  console.log('in server deleting pilltaker entry');
  console.log('pilltaker id: ', req.params.id);

  var id = req.params.id;
  pool.connect(function(err, client, done, next) {
    if(err) {
      console.log("Error connecting: ", err);
      //next(err);
    }

    client.query("DELETE from pilltakers where id = $1", [id],
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
