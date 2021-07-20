exports.seed = knex =>
  knex('users').del()
    .then(() =>
      knex('users').insert([
        {
          id: 1,
          name: 'Keisuke Tanaka',
          dateCreated: '15/07 14:00',
          location: 'Glenfield, Auckland',
          isCompany: false,
          email: 'keisukyrocket@gmail.com',
          auth0Id: 'z2wRHxm1K1',
          companyName: null,
          phone: '0211996925',
          profilePic: '/images/profile/kris.jpg'
        },
        {
          id: 2,
          name: 'Suji cho',
          location: 'Henderon, Auckland',
          dateCreated: '15/07 14:40',
          isCompany: false,
          email: 'sujicho@gmail.com',
          auth0Id: 'lkfjgwh',
          companyName: null,
          phone: '0210346246',
          profilePic: '/images/profile/kris.jpg'
        },
        {
          id: 3,
          name: 'Josh Lake ',
          dateCreated: '20/07 14:40',
          location: 'Avondale, Auckland',
          isCompany: false,
          email: 'joshlake@gmail.com',
          auth0Id: 'ksjgjsds',
          companyName: null,
          phone: '0228467492',
          profilePic: '/images/profile/kris.jpg'
        },
        {
          id: 4,
          name: 'Eleanor Woodhouse',
          dateCreated: '1/07 08:40',
          location: 'Auckland',
          isCompany: false,
          email: 'eleanorwoodhouse@gmail.com',
          auth0Id: 'lkfjgwh',
          companyName: null,
          phone: '027886925',
          profilePic: '/images/profile/kris.jpg'
        },
        {
          id: 5,
          name: 'Ahmad Anwar',
          dateCreated: '3/07 10:00',
          location: 'Massey, Auckland',
          isCompany: false,
          email: 'ahmadanwar@gmail.com',
          auth0Id: 'lkfjgwh',
          companyName: null,
          phone: '0219584760',
          profilePic: '/images/profile/kris.jpg'
        },
        {
          id: 6,
          name: 'Carter Munro',
          dateCreated: '3/09 11:19',
          location: 'Mt.eden, Auckland',
          isCompany: false,
          email: 'cartermunro@gmail.com',
          auth0Id: 'fksapkv9',
          companyName: null,
          phone: '0278697271',
          profilePic: '/images/profile/kris.jpg'
        },
        {
          id: 7,
          name: 'Dylan Toomey',
          dateCreated: '1/06 09:40',
          location: 'Flatbush, Auckland',
          isCompany: false,
          email: 'dylantoomey@gmail.com',
          auth0Id: 'ghpefsdl',
          companyName: null,
          phone: '021639298',
          profilePic: '/images/profile/kris.jpg'
        },
        {
          id: 8,
          name: 'James Pearce',
          dateCreated: '9/07 06:40',
          location: 'Helensvile, Auckland',
          isCompany: true,
          email: 'Jpearce@gmail.com',
          auth0Id: 'jhghodcis',
          companyName: 'mustacheGrooming',
          phone: '022968473',
          profilePic: '/images/profile/kris.jpg'
        },
        {
          id: 10,
          name: 'Peter Van De Voorn',
          dateCreated: '12/06 10:40',
          location: 'Birkenhead, Auckland',
          isCompany: true,
          email: 'peter@gmail.com',
          auth0Id: 'lkfjgwh',
          companyName: 'freshCutLawn',
          phone: '0211286930',
          profilePic: '/images/profile/kris.jpg'
        },
        {
          id: 11,
          name: 'Ryan Boosher',
          dateCreated: '12/07 11:40',
          location: 'New Lynn, Auckland',
          isCompany: true,
          email: 'boosher@gmail.com',
          auth0Id: 'lkhsassh',
          companyName: 'BooshBargainBooze',
          phone: '0211996925',
          profilePic: '/images/profile/kris.jpg'
        }
      ]))
