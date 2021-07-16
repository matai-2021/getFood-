import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getUsers } from '../redux/usersSlice'
import { getItems, addItem } from '../redux/itemsSlice'

export default function Home () {
  const [value, setValue] = useState('')
  const dispatch = useDispatch()
  const users = useSelector(state => state.users)
  const items = useSelector(state => state.items)

  useEffect(() => {
    dispatch(getUsers())
    dispatch(getItems())
  }, [])

  console.log(users)
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
    <>
      <main className='container'>
        <h1>Welcome to getFood</h1>
        {/* {users && users.map(user => (
          <h1 key={user.id}>{user.name}</h1>
        ))} */}
        {items && items.map(item => (
          <h1 key={item.id}>{item.name}</h1>
        ))}
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

    </>
  )
}
