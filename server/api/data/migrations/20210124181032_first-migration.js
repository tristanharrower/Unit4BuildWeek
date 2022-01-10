exports.up = async (knex) => {
  await knex.schema
    .createTable('organizers', (organizers) => {
      organizers.increments('organizer_id')
      organizers.string('username', 200).notNullable()
      organizers.string('password', 200).notNullable()
      organizers.timestamps(false, true)
    })

    await knex.schema
    .createTable('guests', (guests) => {
      guests.increments('guest_id')
      guests.string('username', 200).notNullable()
      guests.string('password', 200).notNullable()
      guests.timestamps(false, true)
    })
    await knex.schema
      .createTable('potlucks', (potlucks) => {
        potlucks.increments('potluck_id')
        potlucks.integer('organizer_id')
        .unsigned()
        .references('organizer_id')
        .inTable('organizers')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
        potlucks.integer('guest_id')
        .unsigned()
        .references('guest_id')
        .inTable('guests')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
        potlucks.string('event_name', 128).notNullable()
        potlucks.string('description', 256)
        potlucks.string('event_date').notNullable()
        potlucks.string('event_time').notNullable()
        potlucks.string('location').notNullable()
      })

      await knex.schema 
      .createTable('foods', (foods) => {
        foods.increments('food_id')
        foods.integer('potluck_id')
        .unsigned()
        .notNullable()
        .references('potluck_id')
        .inTable('potlucks')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
        foods.integer('organizer_id')
        .unsigned()
        .references('organizer_id')
        .inTable('organizers')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
        foods.integer('guest_id')
        .unsigned()
        .references('guest_id')
        .inTable('guests')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
        foods.string('food_wanted').notNullable()
      })
}

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists('organizers')
  await knex.schema.dropTableIfExists('guests')
  await knex.schema.dropTableIfExists('potlucks')
  await knex.schema.dropTableIfExists('foods')

}
