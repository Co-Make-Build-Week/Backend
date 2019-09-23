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

}

function validateUserId(req, res, next){

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
    // console.log('user_id: ', user_id, 'userId', userId)
    if (user_id === userId){
        next();
    } else {
        res.status(500).json({message: "Another user created this post. Cannot edit or delete."}).end();
    }
}

