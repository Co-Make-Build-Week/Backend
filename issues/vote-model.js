const db = require('../database/db-config.js')

module.exports = {
    getVoted,
    toggle
}

function getVoted(id) {
    console.log('getvoted')
    return db('userVoted')
}

function toggle(id) {
    console.log('toggle')
    getVoted({id})
    .then(res => {
        return db('userVoted').where('issue_id', id).update('upvoted', !res)
    })
    .catch(err => {
        res.send(err)
    })
}

//may not be necessary
// function find() {
//   return db('userVoted')
// }


// function findBy(filter) {
//   return db('userVoted').where(filter)
// }

// function findById(id) {
//   return db('issues')
//   .where({ id })
//   .first();
// }

// function remove(id) {
//   return db('issues').where({id}).del();
// }