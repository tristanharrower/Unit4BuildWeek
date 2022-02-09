
exports.up = async function(knex) {
    return knex.schema.table('messages', table => {
        table.string('attendee_username', 128)
      })
  };
  
  exports.down = async function(knex) {
    return knex.schema.table('messages', table => {
        table.dropColumn('messages');
      })
  };
