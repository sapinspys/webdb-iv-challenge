exports.seed = function(knex, Promise) {
  return knex('recipes').insert([
    { name: 'seaside', dish_id: 1, instructions: "google it" }, // 1
    { name: 'tex-mex', dish_id: 1, instructions: "google it" }, // 2
    { name: 'california', dish_id: 1, instructions: "google it" }, // 3
    { name: 'meat-lovers', dish_id: 2, instructions: "google it" }, // 4
    { name: 'vegetarian', dish_id: 2, instructions: "google it" }, // 5
    { name: 'hawaiian', dish_id: 2, instructions: "google it" }, // 6
    { name: 'blt', dish_id: 3, instructions: "google it" }, // 7
    { name: 'meatball marinara', dish_id: 3, instructions: "google it" }, // 8
    { name: 'italian', dish_id: 3, instructions: "google it" }, // 9
    { name: 'classic', dish_id: 4, instructions: "google it" }, // 10
    { name: 'brisket', dish_id: 4, instructions: "google it" }, // 11
    { name: 'black bean', dish_id: 4, instructions: "google it" }, // 12
  ]);
};