const db = require('../database/db-config.js')

module.exports = {
  find,
  add,
  findBy,
  findById,
  remove
}

//may not be necessary
function find() {
  return db('issues')
}

async function add(issue) {
  const [id] = await db('issues').insert(issue, 'id')
  return findById(id).then(async response => {
    await db('userVoted').insert({user_id: response.user_id, issue_id: response.id, upvoted: 1})
    return findById(response.id)
  })
}

function findBy(filter) {
  return db('issues').where(filter)
}

function findById(id) {
  return db('issues')
  .where({ id })
  .first();
}

function remove(id) {
  return db('issues').where({id}).del();
}