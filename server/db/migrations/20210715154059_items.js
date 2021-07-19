exports.up = function (knex) {
  return knex.schema.createTable('items', function (table) {
    table.increments('id')
    table.string('name')
    table.integer('user_id')// .references('users.id')
    table.string('dateCreated')
    table.string('expiryDate')
    table.string('location')
    table.integer('quantity')
    table.string('description')
    table.string('email')
    table.string('img')
    table.boolean('isClaimed')
    table.integer('claimedById')// .references('users.id') // is this reference link needed?
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('items')
}
