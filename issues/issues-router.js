const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const restricted = require('../api/restricted-middleware');
const otherMiddle = require('../api/other-middleware');

const Issues = require('./issues-model');
const Voted = require('./vote-model');
// const secrets = require('../config/secrets')

// route possibly to be protected by middleware requiring user to be logged in. 
router.get('/', restricted, (req, res) => {
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
    issue.user_id = req.user.userid;
    Issues.add(issue)
    .then(response => {
        res.status(201).json(response)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

// get issue by id
// todo: write 'validateID' middleware
router.get('/:id', restricted, (req, res) => {
    let issueId = req.params.id;
    Issues.findById(issueId)
    .then(response => {
        if(response){
            res.status(200).json(response);
        } else {
            res.status(500).json({message: 'No issue found with that ID'})
        }
    })
    .catch(error => {
        res.status(500).json({message: 'Error looking up issue with that ID'})
    })
})

// edit issue by id
// todo: write middleware to check user that's logged in id matches issue to edit user_id

router.put('/:id', restricted, otherMiddle.permissionCheck, async (req, res) => {
    let issueId = req.params.id;
    let issueUpdate = req.body;
    await Issues.findById(issueId)
    .then(response => {
        const merged = {...response, ...issueUpdate}
        return merged;
    })
    .then(merged => {
        console.log(merged)
        return Issues.edit(issueId, merged)
    })
    .then(response => {
        res.status(201).json(response)
    })
    .catch(err => {
        res.status(500).json({message: 'Error looking up issue with that ID'})
    })
})


router.put('/:id/upvote', restricted, (req, res) => {
    Voted.getVoted(req.params.id)
    .then(response => {
        res.status(200).json(response)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

router.put('/:id/downvote', restricted, (req, res) => {
    

})

// delete issue by id
router.delete('/:id', restricted, (req, res) => {
    const issueId = req.params.id
    Issues.remove(issueId)
    .then(response => {
        res.status(200).json({message: `Deleted issue ${issueId}`})
    })
    .catch(err => {
        res.status(500).json({message: `Error deleting issue ${issueId}`})
    })
})



module.exports = router;