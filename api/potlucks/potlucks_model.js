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

  async function findBy(filter) {
    const potluck = await db("potlucks")
      .select('potluck_id',  'organizer_id', 'event_name', 'description',
      'event_date', 'event_time', 'location')
      .where(filter)

      return potluck;
  }

  module.exports = {
      insertPotluck,
      getAllPotlucks,
      findBy
  }
