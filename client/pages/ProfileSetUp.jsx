import React, { useState } from 'react'
// import { useHistory } from 'react-router-dom'
// import { profileSetUp } from './profileSetUpHelper'

export default function ProfileSetUp () {
  const [form, setForm] = useState({
    name: '',
    location: '',
    // username needed? Auth0 has username/email so not here?
    isCompany: false,
    email: ''
  })
  // const history = useHistory()

  function handleChange (e) {
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value
    })
  }

  function handleClick (e) {
    // e.preventDefault()
    // profileSetUp(form, history.push)
  }

  return (
    <>
      {/* <div className='column'>
        <img src='./images/comGardenPlant.png' alt='Person gardening with trowel' />
      </div> */}
      <div className='flex-container'>
        <article className='form-container'>
          <h3 className='form-title'>Profile Setup</h3>
          <form className='form-container'>

            <div className='field'>
              <label htmlFor='firstName' className='label'>Full name</label>
              <input
                className='input'
                id='fullName'
                name='fullName'
                value={form.name}
                placeholder='fullName'
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

            {/* Update this, to be True/False */}
            <div className="field">
              <label htmlFor='location' className='label'>Are you a business?</label>
              <input
                className='input'
                id='isCompany'
                type='checkbox'
                name='isCompany'
                // value={form.isCompany}
                placeholder='isCompany'
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

            <button
              type='button'
              className='button'
              onClick={handleClick}
              data-testid='submitButton'
            >
          Save
            </button>
          </form>
        </article>
      </div>
      {/* Link to T&C here? or in Abouts page */}

    </>
  )
}
