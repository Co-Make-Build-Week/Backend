const db = require('../database/db-config.js')

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

function upvote(user_id, issue_id){
    return db('userVoted').where({'user_id': user_id, 'issue_id': issue_id}).update('upvoted', true)
}

function downvote(user_id, issue_id){
    return db('userVoted').where({'user_id': user_id, 'issue_id': issue_id}).update('upvoted', false)
}

function insertRow(userid, issueid){
    return db('userVoted').insert({'user_id': userid, 'issue_id': issueid, upvoted: true})
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