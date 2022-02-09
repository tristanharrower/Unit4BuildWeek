
exports.up = async function(knex) {
  await knex.schema
  .createTable('messages', (message) => {
    message.increments('message_id')
    message.integer('organizer_id', 200)
      .unsigned()
      .references('person_id')
      .inTable('person')
      .onDelete('CASCADE')
      .onUpdate('CASCADE').notNullable()
    message.integer('attendee_id', 200)
        .unsigned()
        .references('person_id')
        .inTable('person')
        .onDelete('CASCADE')
        .onUpdate('CASCADE').notNullable()
    message.integer('potluck_id', 200)
      .unsigned()
      .notNullable()
      .references('potluck_id')
      .inTable('potlucks')
      .onDelete('CASCADE')
      .onUpdate('CASCADE').notNullable()
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('messages')
};
