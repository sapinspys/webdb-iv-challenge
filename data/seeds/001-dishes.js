exports.seed = function(knex, Promise) {
  return knex('dishes').insert([
    { name: 'Tacos' }, // 1
    { name: 'Pizza' }, // 2
    { name: 'Sandwich' }, // 3
    { name: 'Burger' }, // 4
  ]);
};