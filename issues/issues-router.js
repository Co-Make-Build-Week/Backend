const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const restricted = require('../api/restricted-middleware');
const otherMiddle = require('../api/other-middleware');

const Issues = require('./issues-model');
const Voted = require('./vote-model');
// const secrets = require('../config/secrets')

// returns list of all issues
// all query strings are optional. Example with all:
// /api/issues?sortby=created_at&sortdir=asc&limit=20&category=sidewalks&userid=3
router.get('/', restricted, (req, res) => {
    const sortby = req.query.sortby || 'upvotes';
    const sortdir = req.query.sortdir || 'desc';
    const limit = req.query.limit || 1000;
    const category = req.query.category || 'all';
    const userid = req.query.userid || 'all';
    Issues.find(sortby, sortdir, limit, category, userid)
    .then(response => {
        res.status(200).json(response)
    })
    .catch(error => {
        res.status(500).json({message: "Error getting issues"})
    })
})

// create a new issue
router.post('/', restricted, (req, res) => {
    let issue = req.body;
    issue.user_id = req.user.userid;
    Issues.add(issue)
    .then(response => {
        // Voted.setVoted(issue.user_id)
        res.status(201).json(response)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

// get issue by id
router.get('/:id', restricted, otherMiddle.validateIssueId, (req, res) => {
    res.status(200).json(res.issue);
})

// edit issue by id
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
    const issueId = Number(req.params.id);
    const userId = Number(req.user.userid);
    console.log('issueId, userId', typeof issueId, typeof userId);
    Voted.findByUserAndIssue(userId, issueId)
    .then(response => {
        console.log('response', response)
        if (response && response.upvoted == false){
            Voted.upvote(response.user_id, response.issue_id) // should return row
            .then(response => {
              res.status(200).json({message: "Upvoted"}).end()
          })
        } else if (response && response.upvoted == true) {
            res.status(404).json({message: 'User has already upvoted this issue.'}).end()
        } else {
            console.log(userId, issueId)
            Voted.insertRow(userId, issueId)
            .then(response => {
              res.status(200).json({message: 'upvoted'}).end();
            })
        }
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

router.put('/:id/downvote', restricted, (req, res) => {
    const issueId = req.params.id;
    const userId = req.user.userid;
    console.log(issueId, userId);
    Voted.findByUserAndIssue(userId, issueId)
    .then(response => {
        console.log(response)
        if (response && response.upvoted == true){
          Voted.downvote(response.user_id, response.issue_id)
          .then(response => {
            res.status(200).json({message: "downvoted"}).end()
          })
          // return response; // should return row
        } else if (response && response.upvoted == false) {
            return res.status(404).json({message: 'User has already downvoted this issue.'}).end()
        } else {
            res.status(404).json({message: "Must upvote first"}).end();
        }
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

// delete issue by id
router.delete('/:id', restricted, otherMiddle.permissionCheck, (req, res) => {
    const issueId = req.params.id
    Issues.remove(issueId)
    .then(response => {
        res.status(200).json({message: `Deleted issue ${issueId}`})
    })
    .catch(err => {
        res.status(500).json({message: `Error deleting issue ${issueId}`})
    })
})

router.get('/votes/uservotedtable', (req, res) => {
    Voted.find()
    .then(response => {
        res.status(200).json(response)
    })
    .catch(error => {
        res.status(500).json(error)
    })
})



module.exports = router;