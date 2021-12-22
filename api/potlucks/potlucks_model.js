const db = require('../data/db-config');

async function insertPotluck(potluck) {
  
    const [newPotluck] = await db('potlucks').insert(potluck,
        ['potluck_id',  'organizer_id', 'event_name', 'description',
         'event_date', 'event_time', 'location'] )
    return newPotluck 
  }

  async function getAllPotlucks() {
    return db('potlucks')
  }

  module.exports = {
      insertPotluck,
      getAllPotlucks
  }
