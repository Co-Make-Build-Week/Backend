exports.up = function(knex) {
  return knex.schema
  .createTable('users', users => {
    users.increments();
    users
      .string('username', 255)
      .notNullable()
      .unique();
    users.string('password', 255).notNullable();
  })

  .createTable('issues', tbl => {
    tbl.increments();
    tbl.integer('upvotes').notNullable().defaultTo(1);
    tbl.timestamps(false, true); // should create two columns: created_at, updated_at
    tbl.string('title', 255).notNullable();
    tbl.string('issueLocation', 255);
    tbl.text('details');
    tbl.text('imageURL');
    tbl.integer('user_id').unsigned().notNullable().references('id').inTable('users').onDelete('CASCADE').onUpdate('CASCADE');
    tbl.string('category').notNullable();
  })

  .createTable('userVoted', tbl => {
    tbl.increments();
    tbl.integer('user_id').unsigned().notNullable().references('id').inTable('users').onDelete('CASCADE').onUpdate('CASCADE');
    tbl.integer('issue_id').unsigned().notNullable().references('id').inTable('issues').onDelete('CASCADE').onUpdate('CASCADE');
    // tbl.unique(['user_id', 'issue_id'])
    tbl.boolean('upvoted')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('userVoted')
    .dropTableIfExists('issues')
    .dropTableIfExists('users')
};
