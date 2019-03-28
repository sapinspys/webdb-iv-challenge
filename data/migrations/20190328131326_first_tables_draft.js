
exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('dishes', tbl => {
      tbl.increments();

      tbl
        .string('name',128)
        .notNullable()
        .unique();
    })

    .createTable('recipes', tbl => {
      tbl.increments();

      tbl
        .string('name',128)
        .notNullable()
        .unique();

      tbl
        .integer('dish_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('dishes')
        // using RESTRICT, in your code, first delete all recipes for the dish, then delete the dish
        .onDelete('RESTRICT') 
        .onUpdate('CASCADE');
    })

    .createTable('ingredients', tbl => {
      tbl.increments();

      tbl
        .string('name',128)
        .notNullable();
    })

    .createTable('recipe_ingredients', tbl => {
      tbl.increments();

      tbl
        .integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
        .onDelete('RESTRICT') 
        .onUpdate('CASCADE');

      tbl
        .integer('ingredient_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('ingredients')
        .onDelete('RESTRICT') 
        .onUpdate('CASCADE');
    })
  
};

exports.down = function(knex, Promise) {
  // tables with FK must be removed before the referenced table is removed
  return knex.schema
    .dropTableIfExists('cohort_students')
    .dropTableIfExists('students')
    .dropTableIfExists('cohorts')
    .dropTableIfExists('tracks');
};