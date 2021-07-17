import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import { useHistory } from 'react-router-dom'
import { getItems } from '../redux/itemsSlice'
import { useParams } from 'react-router'
import { addItem } from '../redux/itemsSlice'

import ItemForm from '../components/ItemForm'

export default function AddItem () {
  const dispatch = useDispatch()
  const { id } = useParams()
  // const dispatch = useDispatch()
  const items = useSelector(state => state.items)
  const singleItem = items.find(item => item.id === Number(id))

  useEffect(() => {
    dispatch(getItems())
  }, [])

  //   const history = useHistory()

  function submitEvent (event) {
    event.preventDefault()
    dispatch(addItem(event))
  }

  return (
    <>
      <section className='card-container'>
        <button>Go back</button>
        <h1>Add an item</h1>
        <img
          src={singleItem?.img}
          alt={singleItem?.name}
          style={{ width: '90%', height: '200px', backgroundColor: 'pink' }}
        />
        <ItemForm
          action='Create Item'
          submitEvent={submitEvent}
        />
      </section>
    </>
  )
}
