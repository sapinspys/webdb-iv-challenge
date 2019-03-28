const express = require('express');
const helmet = require('helmet');

const dishes = require('./models/dishes-model.js');
const recipes = require('./models/recipes-model.js');

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
    if (req.body.name) {
      const dish_id = await dishes.addDish(req.body);
      res.status(201).json(dish_id[0]);
    } else {
      res.status(400).json({ error: "Please add a dish name." }) 
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

// list a dish by id
server.get('/api/dishes/:id', async (req, res) => {
  try {
    const dish = await dishes.getDish(req.params.id);
    if (dish) {
      res.status(200).json(dish);
    } else {
      res.status(404).json({ error: "Dish not found." })
    }
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
    if (req.body.name && req.body.dish_id) {
      const recipe_id = await recipes.addRecipe(req.body);
      res.status(201).json(recipe_id[0]);
    } else {
      res.status(400).json({ error: "Please add a recipe and dish ID name." }) 
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

// list a recipe by id
server.get('/api/recipes/:id', async (req, res) => {
  try {
    const recipe = await recipes.getRecipe(req.params.id);
    if (recipe) {
      res.status(200).json(recipe);
    } else {
      res.status(404).json({ error: "Recipe not found." })
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

const port = process.env.PORT || 5000;
server.listen(port, () =>
  console.log(`\n** API running on http://localhost:${port} **\n`)
);
