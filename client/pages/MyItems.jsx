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
          <button className='btn-grad'>Edit</button>
          <button className='btn-grad' onClick={() => handleDelete(id)}>Delete</button>
        </article>
      </section>
    </>
  )
}
