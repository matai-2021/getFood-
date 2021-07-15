exports.seed = knex =>
  knex('items').insert([
    {
      id: 1,
      name: 'Apple',
      user_id: '2',
      dateCreated: '13/07 13:00',
      expiryDate: '3/08 13:00',
      location: 'Waterview, Auckland',
      quantity: '6',
      description: 'good shape',
      email: 'vegelover@gmail.com',
      isClaimed: 'false',
      img: 'img'

    },
    {
      id: 2,
      name: 'Potato',
      user_id: '3',
      dateCreated: '13/08 13:00',
      expiryDate: '3/09 10:00',
      location: 'Avondale, Auckland',
      quantity: '9',
      description: 'a bit bruised',
      email: 'eatwell@gmail.com',
      isClaimed: 'false',
      img: 'img'
    }
  ])
