const express = require('express');
const helmet = require('helmet');

const dishes = require('./dishes/dishes-model.js');
const recipes = require('./dishes/recipes-model.js');

const server = express();

server.use(helmet());
server.use(express.json());

// list all dishes
server.get('/api/dishes', async (req, res) => {
  try {
    const allDishes = await dishes.getDishes();
    res.status(200).json(allDishes);
  } catch (error) {
    res.status(500).json(error);
  }
});

// create dishes
server.post('/api/dishes', async (req, res) => {
  try {
    const dish_id = await dishes.addDish(req.body);
    const dish = await dishes.getDish(dish_id);
    res.status(201).json(dish);
  } catch (error) {
    res.status(500).json(error);
  }
});

// list a dish by id
server.get('/api/dishes/:id', async (req, res) => {
  try {
    const dish = await dishes.getDish(req.params.id);
    res.status(200).json(dish);
  } catch (error) {
    res.status(500).json(error);
  }
});

// list all recipes
server.get('/api/recipes', async (req, res) => {
  try {
    const allRecipes = await recipes.getRecipes();
    res.status(200).json(allRecipes);
  } catch (error) {
    res.status(500).json(error);
  }
});

// create recipe
server.post('/api/recipes', async (req, res) => {
  try {
    const recipe_id = await recipes.addRecipe(req.body);
    const recipe = await recipes.getRecipes(recipe_id);
    res.status(201).json(recipe);
  } catch (error) {
    res.status(500).json(error);
  }
});

const port = process.env.PORT || 5000;
server.listen(port, () =>
  console.log(`\n** API running on http://localhost:${port} **\n`)
);
