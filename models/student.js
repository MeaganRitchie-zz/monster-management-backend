const { Model } = require('objection');
const database = require('../db');
Model.knex(database);

class Student extends Model {
  static tableName = 'students';
}

module.exports = Student;