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
        res.end('Will send all the leaders to you!');
    })
    .post((req, res) => {
        res.end('Will add the leader: ' + req.body.name + ' with details: ' + req.body.description);
    })
    .put((req, res) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /leaders');
    })
    .delete((req, res) => {
        res.end('Deleting all leaders');
    });
    
router.route('/:leaderId')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req,res) => {
        res.end('Will send details of the leader: ' + req.params.leaderId +' to you!');
    })
    .post((req, res) => {
        res.end('Will add the leader: ' + req.body.name + ', id: ' +req.params.leaderId + ' with details: ' + req.body.description);
    })
    .put((req, res) => {
        res.write('Updating the leader: ' + req.params.leaderId + '\n');
        res.end('Will update the leader: ' + req.body.name + 
            ' with details: ' + req.body.description);
    })
    .delete((req, res) => {
        res.end('Deleting leader: ' + req.params.leaderId);
    });
module.exports = router;