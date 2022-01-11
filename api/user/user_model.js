const db = require('../data/db-config');


async function findBy(filter) {
    const org = await db("person")
      .select("person_id", "username","password")
      .where(filter)

      return org;
  }

function deleteById(person_id) {
    return db('person').where({person_id}).del()
  }


module.exports = {
    findBy,
    deleteById
    
}