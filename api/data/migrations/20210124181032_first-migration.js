exports.up = async (knex) => {
  await knex.schema
    .createTable('organizers', (organizers) => {
      organizers.increments('organizer_id')
      organizers.string('username', 200).notNullable()
      organizers.string('password', 200).notNullable()
      organizers.timestamps(false, true)
    })
}

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists('organizers')
}
