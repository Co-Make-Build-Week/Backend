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
  const test = await db('userVoted').insert({user_id: issue.user_id, issue_id: issue.id, upvoted: 1})
  return findById(id)
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