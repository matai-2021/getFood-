import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getItems, deleteItem } from '../redux/itemsSlice'
import { Link, useHistory } from 'react-router-dom'

export default function ItemDetails () {
  const history = useHistory()
  const dispatch = useDispatch()
  const singleItem = useSelector(state => state.items[0])

  useEffect(() => {
    dispatch(getItems())
  }, [])

  const handleDelete = (itemId) => {
    dispatch(deleteItem({ id: itemId }))
    history.push('/delete')
  }

  return (
    <>
      <section className='card-container'>
        <Link to={'/'}className='item-link'>Go back</Link>
        <img className='card-img'
          src={singleItem?.img}
          alt={singleItem?.name}
        />
        <article>
          <h1 className='item-title'>{singleItem?.name}</h1>
          <h1 className='page-paragraph'>Pick up location: {singleItem?.location}</h1>
          <h1 className='page-paragraph'>Description: {singleItem?.description}</h1>
          <h1 className='page-paragraph'>Quantity: {singleItem?.quantity}</h1>
          <h1 className='page-paragraph'>Exp. Data: {singleItem?.expiryDate}</h1>
          <h1 className='page-paragraph'>Date Created: {singleItem?.dateCreated}</h1>
          <h1 className='page-paragraph'>Email: {singleItem?.email}</h1>
        </article>
        <article>
          <button className='btn-grad'>Edit</button>
          <button className='btn-grad' onClick={() => handleDelete(id)}>Delete</button>
        </article>
      </section>
    </>
  )
}
