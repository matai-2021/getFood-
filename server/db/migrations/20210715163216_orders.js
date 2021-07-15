exports.up = function (knex) {
  return knex.schema.createTable('orders', function (table) {
    table.increments('id')
    table.string('user_id')
    table.string('item_id')
    table.boolean('isDispatched')
    table.string('claimedBy_id')
    table.string('dateCreated')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('orders')
}
