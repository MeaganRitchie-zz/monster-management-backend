const { Model } = require('objection')
const database = require('../db')
const Student = require('./student')
Model.knex(database)

class User extends Model {
  static tableName = 'users'

  static relationMappings = {
    students: {
      relation: Model.HasManyRelation,
      modelClass: Student,
      join: {
        from: 'users.id',
        to: 'students.user_id'
      }
    }
  };
}



module.exports = { User }