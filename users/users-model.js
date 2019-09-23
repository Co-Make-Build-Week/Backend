const db = require('../database/db-config.js')

module.exports = {
  find,
  add,
  findBy,
  findById
}

//may not be necessary
function find() {

}

async function add(user) {
  const [id] = await db('users').insert(user)
  return findById(id)
}

function findBy(filter) {
  return db('users').where(filter)
}

function findById(id) {
  
}