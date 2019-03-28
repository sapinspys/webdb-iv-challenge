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
  return db("dishes")
    .insert(dish);
}

function getDish(id) {
  return db("dishes")
    .where({ id })
    .first();

  // return db("dishes")
  //   .leftJoin("recipes", "dishes.id", "recipes.dish_id")
  //   .where({ id })
  //   .first();
}
