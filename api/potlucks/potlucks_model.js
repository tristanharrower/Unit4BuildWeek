const db = require('../data/db-config');

async function insertPotluck(potluck) {
  
    const [newPotluck] = await db('potlucks').insert(potluck,
        ['potluck_id',  'person_id', 'event_name', 'description',
         'event_date', 'event_time', 'location', 'role'] )
    return newPotluck 
  }

  async function findBy(filter) {
    const potluck = await db("potlucks")
      .select('potluck_id',  'person_id', 'event_name', 'description',
      'event_date', 'event_time', 'location', 'role')
      .where(filter)

      return potluck;
  }

  async function attendPotluck(potluck) {
    const [newPotluck] = await db('attending-potlucks').insert(potluck,
        ['potluck_id',  'person_id', 'username', 'event_name', 'description',
         'event_date', 'event_time', 'location', 'role'] )
    return newPotluck 
  }

  function deleteById(potluck_id) {
    return db('potlucks').where({potluck_id}).del()
  }

  function update(id, changes) {
    return db('potlucks')
      .where({ potluck_id:id })
      .update(changes, '*');
  }

  module.exports = {
      insertPotluck,
      attendPotluck,
      findBy, 
      deleteById,
      update
  }
