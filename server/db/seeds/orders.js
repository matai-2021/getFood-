exports.seed = knex =>
  knex('orders').insert([
    {
      id: 1,
      user_id: 2,
      item_id: 1,
      isDispatched: 'false',
      claimedBy_id: 1,
      dateCreated: '2/06'
    },
    {
      id: 2,
      user_id: 1,
      item_id: 3,
      isDispatched: 'true',
      claimedBy_id: 1,
      dateCreated: '2/08'
    }
  ])
