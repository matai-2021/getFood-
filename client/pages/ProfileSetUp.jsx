import React, { useEffect } from 'react'
// import { useHistory } from 'react-router-dom'
// import { profileSetUp } from './profileSetUpHelper'
import { useAuth0 } from '@auth0/auth0-react'

import {
  useSelector,
  useDispatch
} from 'react-redux'
import { getUsers } from '../redux/usersSlice'

export default function ProfileSetUp () {
  const dispatch = useDispatch()
  const users = useSelector(state => state.users[0]) // used for bringing in data for users.location in input field
  const { user } = useAuth0()
  const { name, picture, email } = user
  // const [form, setForm] = useState({
  // })

  function handleChange (e) {
    // const { name, value } = e.target
    // setForm({
    //   ...form,
    //   [name]: value
    // })
  }

  function handleClick (e) {
  }
  useEffect(() => {
    dispatch(getUsers())
  }, [])

  return (
    <>
      <section className='card-container'>

        <div className='flex-container'>
          <article className='form-container'>
            <h3 className='form-title'>Profile Setup</h3>
            <form className='form-container'>

              <div className='field'>
                <img src={picture} alt="Profile Pic"/>
              </div>
              <div className='field'>
                <label htmlFor='firstName' className='labelgrey'>Full name</label>
              </div>
              <div className='field'>
                <label htmlFor='firstName' className='label'>{name}</label>
              </div>
              <div className='field'>
                <label htmlFor='email' className='labelgrey'>Email</label>
              </div>
              <div className='field'>
                <label htmlFor='email' className='label'>{email}</label>
              </div>
              {/* <div className='field'>
              <label htmlFor='location' className='label'>Area: {users?.location}</label>
            </div> */}

              <div className="field">
                <label htmlFor='location' className='labelgrey'>Address</label>
              </div>
              <div className="field">
                <input
                  className='form-box'
                  id='location'
                  type='text'
                  name='location'
                  value={users.location}
                  placeholder='Your Address'
                  onChange={handleChange}
                ></input>
              </div>

              {/* Update this, to be True/False */}
              <div className="field">
                <label htmlFor='location' className='labelgrey'>Are you a business?</label>
              </div>
              <div className="field">
                <input
                  className='form-box'
                  id='isCompany'
                  type='checkbox'
                  name='isCompany'
                  value={users.isCompany}
                ></input>
              </div>

              <div className="field">
                <label htmlFor='companyName' className='labelgrey'>Business Name</label>
              </div>
              <div className="field">
                <input
                  className='form-box'
                  id='companyName'
                  type='text'
                  name='companyName'
                  value={users.companyName}
                  placeholder='Only if applicable'
                  onChange={handleChange}
                ></input>
              </div>

              <div className="field">
                <label htmlFor='phone' className='labelgrey'>Phone</label>
              </div>
              <div className="field">
                <input
                  className='form-box'
                  id='phone'
                  type='text'
                  name='phone'
                  value={users.phone}
                  placeholder='Phone Number'
                  onChange={handleChange}
                ></input>
              </div>

              <button
                type='button'
                className='form-button-primary'
                onClick={handleClick}
                data-testid='submitButton'
              >
          Save Profile
              </button>

            </form>
          </article>
        </div>
        {/* Link to T&C here? or in Abouts page */}
      </section>
    </>
  )
}
