import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getItems, claimItem } from '../redux/itemsSlice'
import { useParams } from 'react-router'
import { Link, useHistory } from 'react-router-dom'
import { getUsers } from '../redux/usersSlice'
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react'

function ItemDetails () {
  const history = useHistory()
  const { id } = useParams()
  const dispatch = useDispatch()
  const items = useSelector(state => state.items)
  const singleItem = items.find(item => item.id === Number(id))
  const { user: auth0userdata } = useAuth0()
  const users = useSelector(state => state.users)
  const sessionUser = users.find(user => user.auth0Id === auth0userdata?.sub)

  useEffect(() => {
    dispatch(getItems())
    dispatch(getUsers())
  }, [])

  const handleClaim = (itemId) => {
    const claimedById = sessionUser?.id
    dispatch(claimItem({ id: itemId, isClaimed: true, claimedById: claimedById }))
    history.push('/claimMsg')
  }

  return (
    <div className='item-details-container'>
      <div className="item-heading-container">
        <h1 className='item-heading'>Item Details</h1>
      </div>
      <section className='card-container'>
        <Link to={'/'}className='link-button'>Go back</Link>
        <img className='card-img'
          src={singleItem?.img}
          alt={singleItem?.name}
        />
        <article className='card-text-container'>
          <h1 className='item-title'>{singleItem?.name}</h1>
          <h1 className='page-paragraph'>Pick up location: {singleItem?.location}</h1>
          <h1 className='page-paragraph'>Description: {singleItem?.description}</h1>
          <h1 className='page-paragraph'>Quantity: {singleItem?.quantity}</h1>
          <h1 className='page-paragraph'>Exp. Date: {singleItem?.expiryDate}</h1>
          <h1 className='page-paragraph'>Date Created: {singleItem?.dateCreated}</h1>
          <h1 className='page-paragraph'>Email: {singleItem?.email}</h1>
          <button onClick={() => handleClaim(singleItem?.id) } className='item-details-btn card-btn'>
            Claim
          </button>
        </article>
      </section>
    </div>
  )
}

export default withAuthenticationRequired(ItemDetails, {
  // Show a message while the user waits to be redirected to the login page.
  onRedirecting: () => ('Authenticating user...')
})
