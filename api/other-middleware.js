const db = require('../database/db-config');
const Issues = require('../issues/issues-model');
const Users = require('../users/users-model');

module.exports = {
    validateIssueId,
    permissionCheck,
    uniqueUsername,
    validateUserId
}

function uniqueUsername(req, res, next){
    const username = req.body.username;
    Users.findBy({username})
    .then(response => {
        if (response.length > 0) {
            res.status(400).json({message: 'A user with that email already exists'})
        } else {
            next();
        }
    })
    .catch(error => {
        res.status(500).json({message: 'Error checking username for uniqueness'})
    })
}

function validateUserId(req, res, next){
    Users.findById(req.params.id)
    .then(response => {
        if(response){
            res.user = response;
            next()
        } else {
            res.status(404).json({message: "No user found with that ID"})
        }
    })
    .catch(err => {
      res.status(500).json({message: "Error looking up user ID"})
    })
}

function validateIssueId(req, res, next){
    let issueId = req.params.id;
    Issues.findById(issueId)
    .then(response => {
        if(response){
            res.issue = response;
            next();
        } else {
            res.status(500).json({message: 'No issue found with that ID'}).end();
        }
    })
    .catch(error => {
        res.status(500).json({message: 'Unexpected error looking up issue with that ID'}).end();
    })
}

// to check issue.user_id matches logged in user id, req.user.userid.
// note: can only be used after restricted-middleware
async function permissionCheck(req, res, next){
    const issueId = req.params.id;
    const userId = req.user.userid;
    const {user_id} = await db('issues').where('id', issueId).select('user_id').first();
    if (user_id === userId){
        next();
    } else {
        res.status(500).json({message: "Another user created this post. Cannot edit or delete."}).end();
    }
}

