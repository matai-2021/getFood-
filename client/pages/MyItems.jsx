import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getItems, deleteItem } from '../redux/itemsSlice'
import { Link, useHistory } from 'react-router-dom'

export default function ItemDetails () {
  const history = useHistory()
  const dispatch = useDispatch()
<<<<<<< HEAD
  const items = useSelector(state => state.items)
  const singleItem = items.find(item => item.id === Number(id))
  // currently returns undefined
=======
  const singleItem = useSelector(state => state.items[0])
>>>>>>> bde33f7c1e0fef39f1b5d6b35f2462fb09be77ed

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
<<<<<<< HEAD
        <h1>My Items page</h1>
        <p>To show both items posted and claimed items here? Stretch? Do we need claim button??</p>
        <article>
          <button className='button-purple'>Delete</button>
=======
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
>>>>>>> bde33f7c1e0fef39f1b5d6b35f2462fb09be77ed
        </article>
      </section>
    </>
  )
}
