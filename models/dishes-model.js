const db = require('../data/dbConfig.js')

module.exports = {
  find,
  findById,
}

function find() {
  return db('dishes');
}

function findById(id) {
  return db('dishes')
    .where({ id })
    .first();
}