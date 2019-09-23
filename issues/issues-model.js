const db = require('../database/db-config.js')

module.exports = {
  find,
  add,
  findBy,
  findById
}

//may not be necessary
function find() {
  return db('issues')
}

async function add(user) {
  const [id] = await db('issues').insert(issue, 'id')
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