
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('students').del()
    .then(function () {
      // Inserts seed entries
      return knex('students').insert([
        { name: 'Ashley', points: 0 },
        { name: 'Cody', points: 0 },
        { name: 'Damon', points: 0 },
        { name: 'Jesse', points: 0 },
        { name: 'Anika', points: 0 },
        { name: 'Haley', points: 0 },
        { name: 'Jo', points: 0 },
        { name: 'David', points: 0 },
        { name: 'Ahmed', points: 0 },
        { name: 'Steven', points: 0 },
        { name: 'Matt', points: 0 },
        { name: 'Paige', points: 0 },
        { name: 'Eric', points: 0 },
        { name: 'Josh', points: 0 }
      ]);
    });
};
