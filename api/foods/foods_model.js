const db = require('../data/db-config');

async function insertFood(food) {
    const [newFood] = await db('foods').insert(food, ['food_id', 'potluck_id', 'person_id', 'food_wanted'])
    return newFood 
  }

  async function findBy(filter) {
    const potluck = await db("foods")
      .select('food_id', 'potluck_id', 'person_id', 'food_wanted')
      .where(filter)

      return potluck;
  }
  function update(id, changes) {
    return db('foods')
      .where({ food_id:id })
      .update(changes, '*');
  }

  function deleteById(food_id) {
    return db('foods').where({food_id}).del()
  }

  module.exports = {
      insertFood,
      findBy,
      update,
      deleteById
  }