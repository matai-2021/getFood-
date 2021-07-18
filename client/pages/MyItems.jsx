// to show both items posted and claimed items?
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getItems, deleteItem } from '../redux/itemsSlice'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'

export default function About () {
  const { id } = useParams()
  const dispatch = useDispatch()
  const items = useSelector(state => state.items)
  const singleItem = items.find(item => item.id === Number(id))

  useEffect(() => {
    dispatch(getItems())
  }, [])

  return (
    <>
      <section className='card-container'>
        <Link to={'/'}className='item-link'>Go back</Link>
        <img
          src={singleItem?.img}
          alt={singleItem?.name}
          style={{ width: '90%', height: '200px', backgroundColor: 'pink' }}
        />
        <h1>My Items page</h1>
        <p>To show both items posted and claimed items here? Stretch?</p>
        <article>
          <button className='button-purple'>Claim this item</button>
        </article>
      </section>
    </>
  )
}
