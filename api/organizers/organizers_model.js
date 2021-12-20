const db = require('../data/db-config');


async function insertOrganizer(organizer) {
    // WITH POSTGRES WE CAN PASS A "RETURNING ARRAY" AS 2ND ARGUMENT TO knex.insert/update
    // AND OBTAIN WHATEVER COLUMNS WE NEED FROM THE NEWLY CREATED/UPDATED RECORD
    // UNLIKE SQLITE WHICH FORCES US DO DO A 2ND DB CALL
    const [newOrganizer] = await db('organizers').insert(organizer, ['organizer_id', 'username', 'password'])
    return newOrganizer // { user_id: 7, username: 'foo', password: 'xxxxxxx' }
  }

  async function getAllOrganizers() {
    return db('organizers')
  }

  
    function deleteById(organizer_id) {
    return db('organizers').where({organizer_id}).del()
  }

  


module.exports = {
    getAllOrganizers,
    insertOrganizer,
    deleteById
}