
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('students').del()
    .then(function () {
      // Inserts seed entries
      return knex('students').insert([
        { name: 'Stacee', points: 0 },
        { name: 'Hadley', points: 0 },
        { name: 'Grant', points: 0 },
        { name: 'Landon', points: 0 }
      ]);
    });
};
