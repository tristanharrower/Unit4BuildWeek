const db = require('../data/db-config');


async function insertFood(food) {
    const [newFood] = await db('foods').insert(food, ['food_id', 'potluck_id', 'food_wanted'])
    return newFood 
  }

async function getAllFoods() {
    return db('foods')
  }

  module.exports = {
      getAllFoods,
      insertFood
  }