const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const restricted = require('../api/restricted-middleware');
const otherMiddle = require('../api/other-middleware');

const Issues = require('./issues-model');
const Voted = require('./vote-model');
// const secrets = require('../config/secrets')

// returns list of all issues
// todo: add url queries to sort, filter, limit
router.get('/', restricted, (req, res) => {
    // const category = req.que
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


router.put('/:id/upvote', restricted, async (req, res) => {
    const issueId = req.params.id;
    const userId = req.user.userid;
    console.log(issueId, userId);
    await Voted.findByUserAndIssue(userId, issueId)
    .then(async response => {
        console.log(response)
        if (response){
            return response; // should return row
        } else {
            await Voted.insertRow(userId, issueId)
            res.status(201).json('upvoted').end();
        }
    })
    .then(row => {
        return Voted.upvote(row.user_id, row.issue_id)
    })
    .then(response => {
        res.status(201).json(response)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

router.put('/:id/downvote', restricted, async (req, res) => {
    const issueId = req.params.id;
    const userId = req.user.userid;
    console.log(issueId, userId);
    await Voted.findByUserAndIssue(userId, issueId)
    .then(async response => {
        console.log(response)
        if (response){
            return response; // should return row
        } else {
            res.status(404).json({message: "Must upvote first"}).end();
        }
    })
    .then(row => {
        return Voted.downvote(row.user_id, row.issue_id)
    })
    .then(response => {
        res.status(201).json(response)
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