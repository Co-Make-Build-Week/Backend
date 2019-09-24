const db = require('../database/db-config.js')

module.exports = {
    setVoted,
    find,
    findByUserAndIssue,
    upvote,
    downvote
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
    return db('userVoted').where({'user_id': userid, 'issue_id': issueid}).select('voted_id').first();
}

function upvote(voted_id){
    return db('userVoted').where({voted_id}).update('upvoted', true)
}

function downvote(voted_id){
    return db('userVoted').where({voted_id}).update('upvoted', false)
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