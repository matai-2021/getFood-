import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getItems, deleteItem } from '../redux/itemsSlice'
import { useParams } from 'react-router'

export default function ItemDetails () {
  const { id } = useParams()
  const dispatch = useDispatch()
  const items = useSelector(state => state.items)
  const item = items.find(item => item.id === id)
  console.log(items)
  console.log(item)

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
        <div style={{ width: '90%', height: '200px', backgroundColor: 'pink' }}>Image will go here</div>
        <article>
          <h1>Bag of potatoes</h1>
          <h1>Pick up location: LA</h1>
          <h1>Description Description Description Description
        Description Description Description Description Description
          </h1>
          <button>Edit item</button>
          <button onClick={() => handleDelete(id)}>Delete item</button>
        </article>
      </section>
    </>
  )
}
