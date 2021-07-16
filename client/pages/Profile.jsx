import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

export default function Profile () {
  const { user } = useAuth0() // user, isLoading
  const { name, picture, email } = user // given_name, family_name, nickname, sub

  return (
    <>
      <section className='card-container'>
        <button>Go to Item List</button>
        <div style={{ width: '90%', height: '200px', backgroundColor: 'pink' }}>Image will go here</div>
        <article>
          <img src={picture} alt="Profile pic"/>
          <p>Name: {name}</p>
          <p>Email: {email}</p>
          <p>Location: </p>
        </article>
      </section>
    </>
  )
}
