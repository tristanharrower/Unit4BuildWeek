const db = require('../data/db-config');

async function findById(id) {
    const rows = await db('organizers as o')
    .select('o.organizer_id', '0.username','o.password')
    .where('o.organizer_id', id)

    return rows;
}

async function add(organizer) {
    return db('organizers')
      .insert(organizer)
      .then((some) => { // eslint-disable-line
        return some
      })
  }

  async function getAllOrganizers() {
    return db('organizers')
  }

  


module.exports = {
    add,
    findById,
    getAllOrganizers
}