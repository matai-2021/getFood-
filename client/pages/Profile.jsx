import React, { useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react'

import { useSelector, useDispatch } from 'react-redux'
import { getUsers, deleteUser } from '../redux/usersSlice'

export default function Profile () {
  const dispatch = useDispatch()
  const users = useSelector(state => state.users[0])
  const { user } = useAuth0() // user, isLoading
  const { name, picture, email } = user // given_name, family_name, nickname, sub

  useEffect(() => {
    dispatch(getUsers())
  }, [])

  const handleDelete = (itemId) => {
    dispatch(deleteUser({ id: itemId }))
  }

  return (
    <>
      <section className='card-container'>
        <article>
          <img src={picture} alt="Profile pic"/>
          <p>Name: {name}</p>
          <p>Email: {email}</p>
          <p>Location: {users?.location}</p>
          <button onClick={() => handleDelete(users?.id)}>Delete My Account</button>
        </article>
      </section>
    </>
  )
}
