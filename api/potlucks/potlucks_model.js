const db = require('../data/db-config');

async function insertPotluck(potluck) {
  
    const [newPotluck] = await db('potlucks').insert(potluck,
        ['potluck_id',  'person_id', 'event_name', 'description',
         'event_date', 'event_time', 'location'] )
    return newPotluck 
  }

  async function findBy(filter) {
    const potluck = await db("potlucks")
      .select('potluck_id',  'person_id', 'event_name', 'description',
      'event_date', 'event_time', 'location')
      .where(filter)

      return potluck;
  }
  function deleteById(potluck_id) {
    return db('potlucks').where({potluck_id}).del()
  }

  module.exports = {
      insertPotluck,
      findBy, 
      deleteById
  }
