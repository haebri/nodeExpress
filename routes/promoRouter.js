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
        res.end('Will send all the promotions to you!');
    })
    .post((req, res) => {
        res.end('Will add the promotion: ' + req.body.name + ' with details: ' + req.body.description);
    })
    .put((req, res) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /promotions');
    })
    .delete((req, res) => {
        res.end('Deleting all promotions');
    });
router.route('/:promotionId')
    .get((req,res) => {
        res.end('Will send details of the promotion: ' + req.params.promotionId +' to you!');
    })
    .post((req, res) => {
        res.end('Will add the promotion: ' + req.body.name + ', id: ' + req.params.promotionId + ' with details: ' + req.body.description);
    })
    .put((req, res) => {
        res.write('Updating the promotion: ' + req.params.promotionId + '\n');
        res.end('Will update the promotion: ' + req.body.name + 
            ' with details: ' + req.body.description);
    })
    .delete((req, res) => {
        res.end('Deleting promotion: ' + req.params.promotionId);
    });
module.exports = router;