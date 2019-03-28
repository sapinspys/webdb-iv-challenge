exports.seed = function(knex, Promise) {
  return knex('ingredients').insert([
    { name: 'tomatoes' }, // 1
    { name: 'lettuce' }, // 2
    { name: 'onions' }, // 3
    { name: 'beef' }, // 4
  ]);
};