exports.up = function(knex) {
  return knex.schema
  .createTable('users', users => {
    users.increments();

    users
      .string('username', 255)
      .notNullable()
      .unique();
    users.string('password', 255).notNullable();
    users.string('location').notNullable();
  })
  .createTable('issues', tbl => {
    tbl.increments();

    tbl.integer('upvotes').notNullable().defaultTo(1);
    tbl.timestamps(false, true); // should create two columns: created_at, updated_at
    tbl.string('title', 255).notNullable();
    tbl.string('location', 255);
    tbl.text('details');
    tbl.string('imageURL');
    tbl.integer('user_id').unsigned().notNullable().references('id').inTable('users')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('issues')
    .dropTableIfExists('users');
};
