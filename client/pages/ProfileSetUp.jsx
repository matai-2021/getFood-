import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import { profileSetUp } from './profileSetUpHelper'

export default function Register () {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    // username needed? Auth0 has username/email so not here?
    email: '',
    location: ''
  })
  const history = useHistory()

  function handleChange (e) {
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value
    })
  }

  function handleClick (e) {
    e.preventDefault()
    profileSetUp(form, history.push)
  }

  return (
    <>
      <form className='column'>
        <div className="field">
          <label htmlFor='firstName' className='label'>First Name</label>
          <input
            className='input'
            id='firstName'
            name='firstName'
            value={form.firstName}
            placeholder='First Name'
            onChange={handleChange}
          ></input>
        </div>
        <div className="field">
          <label htmlFor='lastName' className='label'>Last Name</label>
          <input
            className='input'
            id='lastName'
            name='lastName'
            value={form.lastName}
            placeholder='Last Name'
            onChange={handleChange}
          ></input>
        </div>
        <div className="field">
          <label htmlFor='email' className='label'>Email</label>
          <input
            className='input'
            id='email'
            type='email'
            name='email'
            value={form.email}
            placeholder='Email'
            onChange={handleChange}
          ></input>
        </div>
        <div className="field">
          <label htmlFor='location' className='label'>Location</label>
          <input
            className='input'
            id='location'
            type='location'
            name='location'
            value={form.location}
            placeholder='location'
            onChange={handleChange}
          ></input>
        </div>
        <button
          type='button'
          className='button'
          onClick={handleClick}
          data-testid='submitButton'
        >
          Finish Profile Setup
        </button>
      </form>
      {/* <div className='column'>
        <img src='./images/comGardenPlant.png' alt='Person gardening with trowel' />
      </div> */}
    </>
  )
}
