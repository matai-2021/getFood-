exports.up = function (knex) {
  return knex.schema.createTable('users', function (table) {
    table.increments('id')
    table.string('name')
    table.string('dateCreated')
    table.string('location')
    table.boolean('isCompany')
    table.string('email')
    table.string('auth0Id')
    table.string('companyName')
    table.string('phone')
    table.string('profilePic')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('users')
}
