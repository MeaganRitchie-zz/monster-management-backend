
exports.up = function (knex) {
  return knex.schema.table('students', t => {
    t.integer('user_id').references('id').inTable('users')
  })
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExits('students')
};