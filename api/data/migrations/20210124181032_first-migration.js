exports.up = async (knex) => {
  await knex.schema
    .createTable('user', (user) => {
      user.increments('user_id')
      user.string('username', 200).notNullable()
      user.string('password', 200).notNullable()
      user.timestamps(false, true)
    })
    
    await knex.schema
      .createTable('potlucks', (potlucks) => {
        potlucks.increments('potluck_id')
        potlucks.integer('user_id')
        .unsigned()
        .references('user_id')
        .inTable('user')
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
        foods.integer('user_id')
        .unsigned()
        .references('user_id')
        .inTable('user')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
        foods.string('food_wanted').notNullable()
      })
}

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists('user')
  await knex.schema.dropTableIfExists('potlucks')
  await knex.schema.dropTableIfExists('foods')
}
