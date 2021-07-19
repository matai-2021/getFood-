import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getItems } from '../redux/itemsSlice'
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

  const handleClaim = (e) => {
    history.push('/claim')
  }

  return (
    <>
      <section className='card-container'>
        <Link to={'/'}className='item-link'>Go back</Link>
        <img className='card-img'
          src={singleItem?.img}
          alt={singleItem?.name}
        />
        <article className='card-text-container'>
          <h1 className='item-title'>{singleItem?.name}</h1>
          <h1 className='page-paragraph'>Pick up location: {singleItem?.location}</h1>
          <h1 className='page-paragraph'>Description: {singleItem?.description}</h1>
          <h1 className='page-paragraph'>Quantity: {singleItem?.quantity}</h1>
          <h1 className='page-paragraph'>Exp. Data: {singleItem?.expiryDate}</h1>
          <h1 className='page-paragraph'>Date Created: {singleItem?.dateCreated}</h1>
          <h1 className='page-paragraph'>Email: {singleItem?.email}</h1>
          <button onClick={handleClaim} className='btn-grad'>
            Claim
          </button>
        </article>
      </section>
    </>
  )
}
