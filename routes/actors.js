var express = require('express');
var router = express.Router();
var model = require('../models/index');

/* GET actor listing. */
router.get('/', function(req, res, next) {

});


/* POST actor. */
router.post('/', function(req, res, next) {
    const {
        title,
        description
    } = req.body;
    model.Actor.create({
            title: title,
            description: description
        })
        .then(actor => res.status(201).json({
            error: false,
            data: actor,
            message: 'New actor has been created.'
        }))
        .catch(error => res.json({
            error: true,
            data: [],
            error: error
        }));
});


/* update actor. */
router.put('/:id', function(req, res, next) {

    const actor_id = req.params.id;

    const { title, description } = req.body;

    model.Actor.update({
            title: title,
            description: description
        }, {
            where: {
                id: actor_id
            }
        })
        .then(actor => res.json({
            error: false,
            message: 'actor has been updated.'
        }))
        .catch(error => res.json({
            error: true,
            error: error
        }));
});


/* GET actor listing. */
router.get('/', function(req, res, next) {
    model.Actor.findAll({})
        .then(actors => res.json({
            error: false,
            data: actors
        }))
        .catch(error => res.json({
            error: true,
            data: [],
            error: error
        }));
});

/* Delete Actor. */
router.delete('/:id', function(req, res, next) {
    const actor_id = req.params.id;

    model.Actor.destroy({
            where: {
                id: actor_id
            }
        })
        .then(status => res.json({
            error: false,
            message: 'actor has been deleted.'
        }))
        .catch(error => res.json({
            error: true,
            error: error
        }));
});

module.exports = router;