exports.seed = function(knex, Promise) {
  return knex('recipe_ingredients').insert([
    { recipe_id: 1, ingredient_id: 1 }, // 1
    { recipe_id: 1, ingredient_id: 2 }, // 2
    { recipe_id: 5, ingredient_id: 1 }, // 3
    { recipe_id: 5, ingredient_id: 3 }, // 5
    { recipe_id: 7, ingredient_id: 1 }, // 6
    { recipe_id: 7, ingredient_id: 2 }, // 7
    { recipe_id: 10, ingredient_id: 1 }, // 8
    { recipe_id: 10, ingredient_id: 2 }, // 9
    { recipe_id: 10, ingredient_id: 3 }, // 10
    { recipe_id: 10, ingredient_id: 4 }, // 11
  ]);
};