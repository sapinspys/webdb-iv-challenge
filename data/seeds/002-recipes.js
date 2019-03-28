exports.seed = function(knex, Promise) {
  return knex('recipes').insert([
    { name: 'seaside', dish_id: 1 }, // 1
    { name: 'tex-mex', dish_id: 1 }, // 2
    { name: 'california', dish_id: 1 }, // 3
    { name: 'meat-lovers', dish_id: 2 }, // 4
    { name: 'vegetarian', dish_id: 2 }, // 5
    { name: 'hawaiian', dish_id: 2 }, // 6
    { name: 'blt', dish_id: 3 }, // 7
    { name: 'meatball marinara', dish_id: 3 }, // 8
    { name: 'italian', dish_id: 3 }, // 9
    { name: 'classic', dish_id: 4 }, // 10
    { name: 'brisket', dish_id: 4 }, // 11
    { name: 'black bean', dish_id: 4 }, // 12
  ]);
};