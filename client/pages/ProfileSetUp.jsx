import React, { useEffect } from 'react'
// import { useHistory } from 'react-router-dom'
// import { profileSetUp } from './profileSetUpHelper'
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react'

import {
  useSelector,
  useDispatch
} from 'react-redux'
import { getUsers } from '../redux/usersSlice'

function ProfileSetUp () {
  const dispatch = useDispatch()
  const users = useSelector(state => state.users)
  const { user: auth0userdata } = useAuth0()
  const sessionUser = users.find(user => user.auth0Id === auth0userdata?.sub)

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
      <section className='container'>
        {/* section className container makes in middle */}
        <div className='field'>
          <img className="img-holdersmall" src={auth0userdata.picture} alt="Profile Pic"/>
        </div>
        <div className='parent flex-container'>
          <article className='parent flex-container'>
            <form className='form-container'>
              <h3 className='form-title2'>Profile Setup</h3>

              <div className='fieldleft'>
                <label htmlFor='firstName' className='labelgrey'>Name:  </label>
                <label htmlFor='firstName' className='label'>{sessionUser.name}</label>
              </div>

              <div className='fieldleft'>
                <label htmlFor='email' className='labelgrey'>Email:  </label>
                <label htmlFor='email' className='label'>{sessionUser.email}</label>
              </div>
              <div className='fieldleft'>
              </div>
              {/* <div className='field'>
              <label htmlFor='location' className='label'>Area: {users?.location}</label>
            </div> */}

              <div className="fieldleftinput">
                <label htmlFor='location' className='labelgrey'>Address:  </label>
              </div>
              <div className="fieldleft">
                <input
                  className='form-box'
                  id='location'
                  type='text'
                  name='location'
                  value={sessionUser.location}
                  placeholder='Your Address'
                  onChange={handleChange}
                ></input>
              </div>

              {/* Update this, to be True/False */}
              <div className="fieldleftinput">
                <label htmlFor='location' className='labelgrey'>Are you a business?  </label>
              </div>
              <div className="fieldleft">
                <input
                  // className='form-box'
                  id='isCompany'
                  type='checkbox'
                  name='isCompany'
                  value={sessionUser.isCompany}
                ></input>
              </div>

              <div className="fieldleftinput">
                <label htmlFor='companyName' className='labelgrey'>Business Name:  </label>
              </div>
              <div className="fieldleft">
                <input
                  className='form-box'
                  id='companyName'
                  type='text'
                  name='companyName'
                  value={sessionUser.companyName}
                  placeholder='Only if applicable'
                  onChange={handleChange}
                ></input>
              </div>

              <div className="fieldleftinput">
                <label htmlFor='phone' className='labelgrey'>Phone:  </label>
              </div>
              <div className="fieldleft">
                <input
                  className='form-box'
                  id='phone'
                  type='text'
                  name='phone'
                  value={sessionUser.phone}
                  placeholder='Phone Number'
                  onChange={handleChange}
                ></input>
              </div>

              <button
                type='button'
                className='btn-grad'
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

export default withAuthenticationRequired(ProfileSetUp, {
  // Show a message while the user waits to be redirected to the login page.
  onRedirecting: () => ('Authenticating...')
})
