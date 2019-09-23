const db = require('../database/db-config');

module.exports = {
    validateIssueId,
    permissionCheck
}

function validateIssueId(id){

}

// to check issue.user_id matches logged in user id, req.user.userid
async function permissionCheck(req, res, next){
    const issueId = req.params.id;
    const userId = req.user.userid;
    const {user_id} = await db('issues').where('id', issueId).select('user_id').first();
    // console.log('user_id: ', user_id, 'userId', userId)
    if (user_id === userId){
        next();
    } else {
        res.status(500).json({message: "Another user created this post. Cannot edit."})
    }
}

