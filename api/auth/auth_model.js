const db = require('../data/db-config');


async function insert(organizer) {
    const [newOrganizer] = await db('organizers').insert(organizer, ['organizer_id', 'username', 'password'])
    return newOrganizer 
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
    insert,
    deleteById,
    findBy
}