const db = require('../data/db-config');

async function attendPotluck(potluck) {
    const [newPotluck] = await db('attending-potlucks').insert(potluck,
        ['potluck_id',  'person_id', 'username', 'role'] )
    return newPotluck 
  }

  
  async function getAll() {
    const potluck = await db("attending-potlucks")
    .join('potlucks', 'attending-potlucks.potluck_id', '=', 'potlucks.potluck_id')
    .select('potlucks.potluck_id',  'attending-potlucks.person_id', 'attending-potlucks.username',
       'potlucks.event_name', 'potlucks.description','potlucks.event_date', 
       'potlucks.event_time', 'potlucks.location', 'attending-potlucks.role')

      return potluck;
  }

  async function findById(id) {
    
    const potluck = await db("attending-potlucks")
    .join('potlucks', 'attending-potlucks.potluck_id', '=', 'potlucks.potluck_id')
      .select('potlucks.potluck_id',  'attending-potlucks.person_id', 'attending-potlucks.username',
       'potlucks.event_name', 'potlucks.description','potlucks.event_date', 
       'potlucks.event_time', 'potlucks.location', 'attending-potlucks.role')
       .where('attending-potlucks.person_id', id)
      

      return potluck;
  }

  function deleteBy(filter) {
    return db('attending-potlucks').where(filter).del()
  }

module.exports = {
    attendPotluck,
    getAll,
    findById,
    deleteBy
}