const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();

router.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res) => {
        res.end('Will send all the dishes to you!');
    })
    .post((req, res) => {
        res.end('Will add the dish: ' + req.body.name + ' with details: ' + req.body.description);
    })
    .put((req, res) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /dishes');
    })
    .delete((req, res) => {
        res.end('Deleting all dishes');
    });

router.route('/:dishId')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req,res) => {
        res.end('Will send details of the dish: ' + req.params.dishId +' to you!');
    })
    .post((req, res) => {
        res.end('Will add the dish: ' + req.body.name + ', id: ' +req.params.dishId + ' with details: ' + req.body.description);
    })
    .put((req, res) => {
        res.write('Updating the dish: ' + req.params.dishId + '\n');
        res.end('Will update the dish: ' + req.body.name + 
            ' with details: ' + req.body.description);
    })
    .delete((req, res) => {
        res.end('Deleting dish: ' + req.params.dishId);
    });
module.exports = router;