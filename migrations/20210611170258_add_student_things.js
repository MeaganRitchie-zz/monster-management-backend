
exports.up = function (knex) {
  return knex.schema.table('students', t => {
    t.string('avatar')
    t.integer('points')
  })
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExits('students')
};
