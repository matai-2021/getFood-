import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getUser } from '../redux/usersSlice'

export default function Home () {
  const dispatch = useDispatch()
  const users = useSelector(state => state.users)

  useEffect(() => {
    dispatch(getUser())
  }, [])

  console.log(users)

  return (
    <>
      <main className='container'>
        <h1>Welcome to getFood</h1>
        {users.map(user => (
          <h1 key={user.id}>{user.name}</h1>
        ))}
        <p>A food conserving project by getFood</p>
        <p>Please log in to get started, or checkout our About page</p>
      </main>
    </>
  )
}
