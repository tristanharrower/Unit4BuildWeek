const db = require('../data/db-config');

async function attendPotluck(potluck) {
    const [newPotluck] = await db('attending-potlucks').insert(potluck,
        ['potluck_id',  'person_id', 'username', 'event_name', 'description',
         'event_date', 'event_time', 'location', 'role'] )
    return newPotluck 
  }

  
  async function findBy(filter) {
    const potluck = await db("attending-potlucks")
      .select('potluck_id',  'person_id', 'username', 'event_name', 'description',
      'event_date', 'event_time', 'location', 'role')
      .where(filter)

      return potluck;
  }

  function deleteBy(filter) {
    return db('attending-potlucks').where(filter).del()
  }

module.exports = {
    attendPotluck,
    findBy,
    deleteBy
}