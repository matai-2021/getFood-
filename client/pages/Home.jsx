import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getItems, addItem, deleteItem } from '../redux/itemsSlice'

export default function Home () {
  const [value, setValue] = useState('')
  const dispatch = useDispatch()
  const items = useSelector(state => state.items)

  useEffect(() => {
    dispatch(getItems())
  }, [])

  console.log(items)

  const handleChange = (event) => {
    event.preventDefault()
    setValue(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(addItem({
      name: value
    }))
    dispatch(getItems())
    setValue('')
  }

  return (
    <section className='flex-container'>
      <main className='container'>
        <h1 className='page-title'>Welcome to getFood</h1>
        <h1 className='testBlue'>Test</h1>
        <p>A food conserving project by getFood</p>
        <p>Please log in to get started, or checkout our About page</p>
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            value={value}
            className="new-item"
            placeholder="Add an Item" />
        </form>
      </main>
    </section>
  )
}
