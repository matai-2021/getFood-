import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getItems, deleteItem, claimItem } from '../redux/itemsSlice'
import { getUsers } from '../redux/usersSlice'
import { Link, useHistory } from 'react-router-dom'
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react'

// Components
import MySingleItem from '../components/MySingleItem'

const loading = <img src='./images/loading-buffering1.gif'/>

function ItemDetails () {
  const dispatch = useDispatch()
  const { user: auth0userdata } = useAuth0()
  const users = useSelector(state => state.users)
  const sessionUser = users.find(user => user.auth0Id === auth0userdata?.sub)
  const items = useSelector(state => state.items.filter(item => item.isClaimed))

  useEffect(() => {
    dispatch(getItems())
    dispatch(getUsers())
  }, [auth0userdata])

  const handleDelete = (itemId) => {
    dispatch(deleteItem({ id: itemId }))
    history.push('/deleteMsg')
  }

  const handleUnClaim = (itemId) => {
    const claimedById = sessionUser?.id
    dispatch(claimItem({ id: itemId, isClaimed: false, claimedById: claimedById }))
    history.push('/unclaimMsg')
  }

  const history = useHistory()

  return (
    <section className='items-wrapper'>
      <div className='item-heading-container'>
        <h1 className='item-heading'>My Claims</h1>
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
            handleUnClaim={handleUnClaim}
          />
        </React.Fragment>
      )) : <h1 className='fontparagraph'>No Items Found</h1>}
    </section>
  )
}

export default withAuthenticationRequired(ItemDetails, {
  displayName: 'Loading',
  onRedirecting: () => (loading)
})
