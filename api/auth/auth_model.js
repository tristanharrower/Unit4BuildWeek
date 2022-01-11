const db = require('../data/db-config');


async function insertOrganizer(organizer) {
    const [newOrganizer] = await db('organizers').insert(organizer, ['organizer_id', 'username', 'password'])
    return newOrganizer 
  }

  async function insertGuest(guest){
    const [newGuest] = await db('guests').insert(guest, ['guest_id', 'username', 'password'])
    return newGuest 
  }

  function deleteById(organizer_id) {
    return db('organizers').where({organizer_id}).del()
  }

  async function findBy(filter) {
    const org = await db("organizers")
      .select("organizer_id", "username","password")
      .where(filter)

      return org;
  }

module.exports = {
    insertOrganizer,
    insertGuest,
    deleteById,
    findBy
}