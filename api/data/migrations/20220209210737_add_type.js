
exports.up = function(knex) {
    return knex.schema.table('messages', table => {
        table.string('type', 128)
      })
};

exports.down = function(knex) {
    return knex.schema.table('messages', table => {
        table.dropColumn('type');
      })
};
