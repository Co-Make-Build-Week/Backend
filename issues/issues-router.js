const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const restricted = require('../api/restricted-middleware');

const Issues = require('./issues-model')
// const secrets = require('../config/secrets')

// route possibly to be protected by middleware requiring user to be logged in. 
router.get('/', restricted, (req, res) => {
    // console.log(req.user)
    Issues.find()
    .then(response => {
        res.status(200).json(response)
    })
    .catch(error => {
        res.status(500).json({message: "Error getting issues"})
    })
})

// create a new issue. Also must go through middleware first. 
router.post('/', restricted, (req, res) => {
    let issue = req.body;
    console.log(req.user, issue)
    issue.user_id = req.user.userid;
    console.log(issue)
    Issues.add(issue)
    .then(response => {
        res.status(201).json(response)
    })
    .catch(err => {
        res.status(500).json(err)
    })
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