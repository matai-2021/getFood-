exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      return knex('table_name').insert([
        {
          id: 1,
          name: 'name',
          dateCreated: 'dateCreated',
          location: 'location',
          isCompany: 'isCompany',
          email: 'email',
          auth0Id: 'auth0Id'
        }
      ])
    })
}
