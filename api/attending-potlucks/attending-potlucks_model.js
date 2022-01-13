const db = require('../data/db-config');

async function attendPotluck(potluck) {
    const [newPotluck] = await db('attending-potlucks').insert(potluck,
        ['potluck_id',  'person_id', 'username', 'event_name', 'description',
         'event_date', 'event_time', 'location', 'role'] )
    return newPotluck 
  }

module.exports = {
    attendPotluck
}