import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getItems, claimItem } from '../redux/itemsSlice'
import { useParams } from 'react-router'
import { Link, useHistory } from 'react-router-dom'

export default function ItemDetails () {
  const history = useHistory()
  const { id } = useParams()
  const dispatch = useDispatch()
  const items = useSelector(state => state.items)
  const singleItem = items.find(item => item.id === Number(id))

  useEffect(() => {
    dispatch(getItems())
  }, [])

  const handleClaim = (itemId) => {
    const claimedById = 1
    dispatch(claimItem({ id: itemId, isClaimed: true, claimedById: claimedById }))
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
          <button onClick={() => handleClaim(singleItem?.id) } className='btn-grad'>
            Claim
          </button>
        </article>
      </section>
    </>
  )
}
