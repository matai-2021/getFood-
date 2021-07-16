import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getItems, deleteItem } from '../redux/itemsSlice'
import { useParams } from 'react-router'

export default function ItemDetails () {
  const { id } = useParams()
  const dispatch = useDispatch()
  const items = useSelector(state => state.items[0])
  // const singleItem = items.find(item => item.id === id)
  console.log(items)

  useEffect(() => {
    dispatch(getItems())
  }, [])

  const handleDelete = (itemId) => {
    dispatch(deleteItem({ id: itemId }))
  }

  return (
    <>
      <section className='card-container'>
        <button>Go back</button>
        <img
          src={items?.img}
          alt={items?.name}
          style={{ width: '90%', height: '200px', backgroundColor: 'pink' }}
        />
        <article>
          <h1>{items?.name}</h1>
          <h1>Pick up location: {items?.location}</h1>
          <h1>Description: {items?.description}</h1>
          <h1>Quantity: {items?.quantity}</h1>
          <h1>Exp. Data: {items?.expiryDate}</h1>
          <h1>Date Created: {items?.dateCreated}</h1>
          <h1>Email: {items?.email}</h1>
          <button>Edit item</button>
          <button onClick={() => handleDelete(id)}>Delete item</button>
        </article>
      </section>
    </>
  )
}
