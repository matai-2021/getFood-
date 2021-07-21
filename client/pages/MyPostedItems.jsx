import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getItems, deleteItem } from '../redux/itemsSlice'
import { Link, useHistory } from 'react-router-dom'
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react'

// Components
import MySingleItem from '../components/MySingleItem'

const loading = <img src='./images/loading-buffering1.gif'/>

function MyPostedItems () {
  const dispatch = useDispatch()
  const { user: auth0userdata } = useAuth0()
  const users = useSelector(state => state.users)

  const sessionUser = users.find(user => user.auth0Id === auth0userdata?.sub)
  const items = useSelector(state => state.items.filter(item => item.userId === sessionUser.id))

  useEffect(() => {
    dispatch(getItems())
  }, [])

  const handleDelete = (itemId) => {
    dispatch(deleteItem({ id: itemId }))
    history.push('/delete')
  }

  const history = useHistory()

  return (
    <section className='items-wrapper'>
      <div className='item-heading-container'>
        <h1 className='item-heading'>My Items</h1>
        <Link to='/itemnew' className='btn-grad'>Add New Item</Link>
      </div>
      {items.length ? items.map(item => (
        <React.Fragment key={item.id} >
          <MySingleItem
            id={item.id}
            name={item.name}
            description={item.description}
            expiryDate={item.expiryDate}
            quantity={item.quantity}
            email={item.email}
            img={item.img}
            handleDelete={handleDelete}
          />
        </React.Fragment>
      )).reverse() : <h1>No Items Found</h1>}
    </section>
  )
}

export default withAuthenticationRequired(MyPostedItems, {
  displayName: 'Loading',
  // Show a message while the user waits to be redirected to the login page.
  onRedirecting: () => (loading)
})
