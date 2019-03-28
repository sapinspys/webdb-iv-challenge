const db = require("../data/dbConfig.js");

module.exports = {
  getRecipes,
  addRecipe,
  getRecipe,
  getRecipesByDish,
};

function getRecipes() {
  return db("recipes");
}

function addRecipe(recipe) {
  return db("recipes")
    .insert(recipe);
}

function getRecipe(id) {
  return db("recipes")
    .where({ id })
    .first();
}

function getRecipesByDish(id) {
  return db("recipes")
    .where({ dish_id: id })
}