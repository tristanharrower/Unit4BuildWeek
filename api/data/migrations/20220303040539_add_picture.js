
exports.up = function(knex) {
    return knex.schema.table('potlucks', table => {
        table.string('picture', 128)
      })
};

exports.down = function(knex) {
    return knex.schema.table('messages', table => {
        table.dropColumn('picture');
      })
};
