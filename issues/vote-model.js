const db = require('../database/db-config.js')
const Issues = require('../issues/issues-model.js')

module.exports = {
    setVoted,
    find,
    findByUserAndIssue,
    upvote,
    downvote,
    insertRow
}

function setVoted(id) {
    // console.log('getvoted')
    return db('userVoted').insert({user_id: 1, issue_id: 1, upvoted: 1})
}

// function toggle(id) {
//     console.log('toggle')
//     getVoted({id})
//     .then(res => {
//         return db('userVoted').where('issue_id', id).update('upvoted', !res)
//     })
//     .catch(err => {
//         res.send(err)
//     })
// }

function find() {
  return db('userVoted')
}

function findByUserAndIssue(userid, issueid){
    return db('userVoted').where({'user_id': userid, 'issue_id': issueid}).first();
}

async function upvote(user_id, issue_id){
    let issue = await Issues.findById(issue_id)
    const incrementUp = issue.upvotes + 1
    await db('userVoted').where({'user_id': user_id, 'issue_id': issue_id}).update({'upvoted': true})
    await db('issues').where({'id': issue_id}).update({'upvotes': incrementUp})
}

async function downvote(user_id, issue_id){
    let issue = await Issues.findById(issue_id)
    const incrementDown = issue.upvotes - 1
    await db('userVoted').where({'user_id': user_id, 'issue_id': issue_id}).update('upvoted', false)
    await db('issues').where({'id': issue_id}).update({'upvotes': incrementDown})
}

async function insertRow(userid, issueid){
    let issue = await Issues.findById(issueid)
    const incrementUp = issue.upvotes + 1
    await db('userVoted').insert({'user_id': userid, 'issue_id': issueid, upvoted: true})
    await db('issues').where({'id': issueid}).update({'upvotes': incrementUp})
}

// function findById(id) {
//     return db('userVoted')
//     .where({ id })
//     .first();
// }


// function findBy(filter) {
//   return db('userVoted').where(filter)
// }





// function remove(id) {
//   return db('issues').where({id}).del();
// }

// copies of upvote/downvote
// function upvote(user_id, issue_id){
//   return db('userVoted').where({'user_id': user_id, 'issue_id': issue_id}).update('upvoted', true)
// }

// function downvote(user_id, issue_id){
//   return db('userVoted').where({'user_id': user_id, 'issue_id': issue_id}).update('upvoted', false)
// }
