exports.seed = function(knex, Promise) {
  return knex('dishes').insert([
    { name: 'Full Stack Web' }, // 1
    { name: 'Data Science' }, // 2
    { name: 'Android' }, // 3
    { name: 'iOS' }, // 4
  ]);
};