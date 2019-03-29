exports.seed = function(knex, Promise) {
  return knex('recipe_ingredients').insert([
    { recipe_id: 1, ingredient_id: 1, quantity: 2 }, // 1
    { recipe_id: 1, ingredient_id: 2, quantity: 1 }, // 2
    { recipe_id: 5, ingredient_id: 1, quantity: 5 }, // 3
    { recipe_id: 5, ingredient_id: 3, quantity: 3 }, // 5
    { recipe_id: 7, ingredient_id: 1, quantity: 3 }, // 6
    { recipe_id: 7, ingredient_id: 2, quantity: 2 }, // 7
    { recipe_id: 10, ingredient_id: 1, quantity: 2 }, // 8
    { recipe_id: 10, ingredient_id: 2, quantity: 2 }, // 9
    { recipe_id: 10, ingredient_id: 3, quantity: 2 }, // 10
    { recipe_id: 10, ingredient_id: 4, quantity: 1 }, // 11
  ]);
};