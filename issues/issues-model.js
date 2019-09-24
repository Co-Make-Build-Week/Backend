const db = require('../database/db-config.js')

module.exports = {
  find,
  add,
  findBy,
  findById,
  remove,
  edit,
  findByUserId
}

//may not be necessary
function find(sortby, sortdir, limit, category, userid) {
  if (category === 'all' && userid === 'all'){
    return db('issues').orderBy(`${sortby}`, `${sortdir}`).limit(limit)
  } else if (userid === 'all'){
    return db('issues').orderBy(`${sortby}`, `${sortdir}`).limit(limit).where({category})
  } else if (category === 'all'){
    return db('issues').orderBy(`${sortby}`, `${sortdir}`).limit(limit).where({'user_id': userid})
  } else {
    return db('issues').orderBy(`${sortby}`, `${sortdir}`).limit(limit).where({'category': category, 'user_id': userid})
  }
}

async function add(issue) {
  const [id] = await db('issues').insert(issue, 'id')
  return findById(id).then(async response => {
    await db('userVoted').insert({user_id: response.user_id, issue_id: response.id, upvoted: 1})
    return findById(response.id)
  })
}

async function edit(id, issue) {
  await db('issues').where({id}).update(issue)
  return findById(id);
}

function findBy(filter) {
  return db('issues').where(filter)
}

function findByUserId(userId){
  return db('issues').where({'user_id': userId})
}

function findById(id) {
  return db('issues')
  .where({ id })
  .first();
}

function remove(id) {
  return db('issues').where({id}).del();
}