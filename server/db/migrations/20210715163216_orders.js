exports.up = function (knex) {
  return knex.schema.createTable('orders', function (table) {
    table.increments('id')
    table.integer('user_id')// .references(users.id)
    table.boolean('isDispatched')
    table.integer('item_id')// .references('items.id')
    table.integer('claimedById')
    table.string('dateCreated')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('orders')
}
