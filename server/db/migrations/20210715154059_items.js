exports.up = function (knex) {
  return knex.schema.createTable('items', function (table) {
    table.increments('id')
    table.string('name')
    table.string('user_id')
    table.string('dateCreated')
    table.string('expiryDate')
    table.string('location')
    table.integer('quantity')
    table.string('description')
    table.string('email')
    table.boolean('isClaimed')
    table.string('img')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('items')
}
