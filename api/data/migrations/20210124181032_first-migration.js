exports.up = async (knex) => {
  await knex.schema
    .createTable('organizers', (organizers) => {
      organizers.increments('organizer_id')
      organizers.string('username', 200).notNullable()
      organizers.string('password', 200).notNullable()
      organizers.timestamps(false, true)
    })

    await knex.schema
      .createTable('potlucks', (potlucks) => {
        potlucks.increments('potluck_id')
        potlucks.integer('organizer_id')
        .unsigned()
        .notNullable()
        .references('organizer_id')
        .inTable('organizers')
        .onDelete('RESTRICT')
        .onUpdate('RESTRICT')
        potlucks.string('event_name', 128).notNullable()
        potlucks.string('description', 256)
        potlucks.string('event_date').notNullable()
        potlucks.string('event_time').notNullable()
        potlucks.string('location').notNullable()
      })
}

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists('organizers')
  await knex.schema.dropTableIfExists('potlucks')
}
