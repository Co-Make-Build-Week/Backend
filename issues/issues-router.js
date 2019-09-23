const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Issues = require('./issues-model')
// const secrets = require('../config/secrets')

// route possibly to be protected by middleware requiring user to be logged in. 
router.get('/', (req, res) => {
    Issues.find()
    .then(response => {
        res.status(200).json(response)
    })
    .catch(error => {
        res.status(500).json({message: "Error getting issues"})
    })
})

// create a new issue
router.post('/', (req, res) => {

})

// edit issue by id
router.put('/:id', (req, res) => {

})

// delete issue by id
router.delete('/:id', (req, res) => {

})


router.put('/:id', (req, res) => {

})

router.put('/:id', (req, res) => {

})



module.exports = router;