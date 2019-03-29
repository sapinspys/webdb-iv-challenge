exports.seed = function(knex, Promise) {
  return knex('ingredients').insert([
    { name: 'tomato slice' }, // 1
    { name: 'lettuce leaf' }, // 2
    { name: 'onion slice' }, // 3
    { name: 'pound of beef' }, // 4
  ]);
};