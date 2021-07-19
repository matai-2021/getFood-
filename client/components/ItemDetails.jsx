import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getItems } from '../redux/itemsSlice'
import { useParams } from 'react-router'
import { Link, useHistory } from 'react-router-dom'
// import { claimItem } from '../../server/db/items'

export default function ItemDetails () {
  const history = useHistory()
  const { id } = useParams()
  const dispatch = useDispatch()
  const items = useSelector(state => state.items)
  const singleItem = items.find(item => item.id === Number(id))

  useEffect(() => {
    dispatch(getItems())
  }, [])

  const handleClaim = () => {
    // const newClaimedById = 1
    // dispatch(claimItem(id, newClaimedById))
    history.push('/claim')
  }

  // another ver
  // function completeOrder () {
  //   const newStatus = 'complete'
  //   dispatch(updateOrderStatus(id, newStatus))
  // }

  // then in the Order.jsx, clientside
  // function cancelOrder () {
  //   // console.log('coming soon!') // release 3
  //   props.patchHelper({ id, newStatus: 'cancelled' })
  // }

  return (
    <>
      <section className='card-container'>
        <Link to={'/'}className='item-link'>Go back</Link>
        <img
          src={singleItem?.img}
          alt={singleItem?.name}
          style={{ width: '90%', height: '200px', backgroundColor: 'pink' }}
        />
        <article>
          <h1>{singleItem?.name}</h1>
          <h1>Pick up location: {singleItem?.location}</h1>
          <h1>Description: {singleItem?.description}</h1>
          <h1>Quantity: {singleItem?.quantity}</h1>
          <h1>Exp. Data: {singleItem?.expiryDate}</h1>
          <h1>Date Created: {singleItem?.dateCreated}</h1>
          <h1>Email: {singleItem?.email}</h1>
          <button onClick={handleClaim} className='btn-grad'>
            Claim
          </button>
        </article>
      </section>
    </>
  )
}
