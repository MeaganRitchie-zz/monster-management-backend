
exports.up = function (knex) {
  return knex.schema.createTable('students', t => {
    t.increments()
    t.string('name')
  })
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExits('students')
};
