const exampleUsers = [{
  id: 1,
  name: 'Kris Wood',
  dateCreated: '1/2/2021',
  location: 'Mount Albert, 1025',
  isCompany: false,
  ratings: [4, 4, 2, 5, 1, 6],
  email: 'kriswd0@gmail.com',
  auth0id: 'djkhfsdfhsdfnk'
},
{
  id: 2,
  name: 'Koko',
  location: 'Mount Albert, 1025',
  isCompany: false,
  ratings: [4, 4, 2, 5, 1, 6],
  email: 'kriswd0@gmail.com',
  auth0id: 'djkhfsdfhsdfnk'
}]

const exampleItem = [{
  id: 1,
  name: 'Apple',
  location: 'Grafton',
  user_id: 2,
  quantity: 5,
  img: './images/profile.jpg',
  description: 'here is some text',
  dateCreated: '12/4/2021',
  expiryDate: '12/2/2021',
  isClaimed: false
}]

const exampleOrder = [{
  id: 1,
  item_id: 1,
  user_id: 2,
  isDispatched: false,
  claimedBy_id: 1,
  datetimeCreated: '21/2/2021 11:23',
  agreedCollectionTime: 0 // references index in exampleItem.collectionTimes
}]

/// ITEMS
// GET getAllItems - selects all from items table
// POST addItem - creates new item in DB
// PATCH updateItem - edit and update item
// DELETE deleteItem - deletes item

/// ORDERS
// GET fetchOrders - gets all orders where user_id matches logged in user
// POST claimItem set isClaimed to true & creates new order in DB
// PATCH updateOrderStatus - change isDistpached (stretch)

/// USERS
// POST registerUser
// PATCH editProfile - in profile page
// GET fetchUser - for profile page
// DELETE closeAccount - deletes user account
