exports.seed = knex =>
  knex('users').del()
    .then(() =>
      knex('users').insert([
        {
          id: 1,
          name: 'Kris Wood',
          dateCreated: '15/07 14:00',
          location: 'Glenfield, Auckland',
          isCompany: true,
          email: 'krisWood@gmail.com',
          auth0Id: 'linkedin|q2wRHxm1K1',
          companyName: 'Woody Grill',
          phone: '0211996925',
          profilePic: '/images/profile/kris.jpg'
        },
        {
          id: 2,
          name: 'Koko Ono',
          dateCreated: '15/07 14:40',
          location: 'Avondale, Auckland',
          isCompany: false,
          email: 'kokoono@gmail.com',
          auth0Id: 'lkfjgwh',
          companyName: null,
          phone: '0211996925',
          profilePic: '/images/profile/kris.jpg'
        },
        {
          id: 2,
          name: 'Koko Ono',
          dateCreated: '15/07 14:40',
          location: 'Avondale, Auckland',
          isCompany: false,
          email: 'kokoono@gmail.com',
          auth0Id: 'lkfjgwh',
          companyName: null,
          phone: '0211996925',
          profilePic: '/images/profile/kris.jpg'
        },
        {
          id: 2,
          name: 'Koko Ono',
          dateCreated: '15/07 14:40',
          location: 'Avondale, Auckland',
          isCompany: false,
          email: 'kokoono@gmail.com',
          auth0Id: 'lkfjgwh',
          companyName: null,
          phone: '0211996925',
          profilePic: '/images/profile/kris.jpg'
        },
        {
          id: 2,
          name: 'Koko Ono',
          dateCreated: '15/07 14:40',
          location: 'Avondale, Auckland',
          isCompany: false,
          email: 'kokoono@gmail.com',
          auth0Id: 'lkfjgwh',
          companyName: null,
          phone: '0211996925',
          profilePic: '/images/profile/kris.jpg'
        },
        {
          id: 2,
          name: 'Koko Ono',
          dateCreated: '15/07 14:40',
          location: 'Avondale, Auckland',
          isCompany: false,
          email: 'kokoono@gmail.com',
          auth0Id: 'lkfjgwh',
          companyName: null,
          phone: '0211996925',
          profilePic: '/images/profile/kris.jpg'
        },
        {
          id: 2,
          name: 'Koko Ono',
          dateCreated: '15/07 14:40',
          location: 'Avondale, Auckland',
          isCompany: false,
          email: 'kokoono@gmail.com',
          auth0Id: 'lkfjgwh',
          companyName: null,
          phone: '0211996925',
          profilePic: '/images/profile/kris.jpg'
        },
        {
          id: 2,
          name: 'Koko Ono',
          dateCreated: '15/07 14:40',
          location: 'Avondale, Auckland',
          isCompany: false,
          email: 'kokoono@gmail.com',
          auth0Id: 'lkfjgwh',
          companyName: null,
          phone: '0211996925',
          profilePic: '/images/profile/kris.jpg'
        },
        {
          id: 2,
          name: 'Koko Ono',
          dateCreated: '15/07 14:40',
          location: 'Avondale, Auckland',
          isCompany: false,
          email: 'kokoono@gmail.com',
          auth0Id: 'lkfjgwh',
          companyName: null,
          phone: '0211996925',
          profilePic: '/images/profile/kris.jpg'
        },
        {
          id: 2,
          name: 'Koko Ono',
          dateCreated: '15/07 14:40',
          location: 'Avondale, Auckland',
          isCompany: false,
          email: 'kokoono@gmail.com',
          auth0Id: 'lkfjgwh',
          companyName: null,
          phone: '0211996925',
          profilePic: '/images/profile/kris.jpg'
        },
        {
          id: 2,
          name: 'Koko Ono',
          dateCreated: '15/07 14:40',
          location: 'Avondale, Auckland',
          isCompany: false,
          email: 'kokoono@gmail.com',
          auth0Id: 'lkfjgwh',
          companyName: null,
          phone: '0211996925',
          profilePic: '/images/profile/kris.jpg'
        },
        {
          id: 2,
          name: 'Koko Ono',
          dateCreated: '15/07 14:40',
          location: 'Avondale, Auckland',
          isCompany: false,
          email: 'kokoono@gmail.com',
          auth0Id: 'lkfjgwh',
          companyName: null,
          phone: '0211996925',
          profilePic: '/images/profile/kris.jpg'
        },
        
        
      ]))
