const db = require("../data/dbConfig.js");

module.exports = {
  getDishes,
  addDish,
  getDish,
};

function getDishes() {
  return db("dishes");
}

function addDish(dish) {
  return db("roles")
    .insert(dish);
}

function getDish(id) {
  return db("dishes")
    .where({ id })
    .first();
}
