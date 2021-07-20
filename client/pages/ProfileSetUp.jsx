import React, { useEffect } from 'react'
// import { useHistory } from 'react-router-dom'
// import { profileSetUp } from './profileSetUpHelper'
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react'
import { Link } from 'react-router-dom'

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

  // function handleClick (e) {
  // }

  useEffect(() => {
    dispatch(getUsers())
  }, [])

  return (
    <>
      <div className='add-item-form'>
        <section className='flexcontainerps'>

          <div className='parent flex-containerps'>
            <article className='parent flex-containerps'>

              <form className='add-item-form-wrapper'>

                {/* don't change the heading div */}
                <div className='heading-containerps'>
                  <h1 className='page-title'>Profile Setup</h1>
                  <div className='horizontal-line'></div>
                </div>
                {/*  */}

                <div className='img-center'>
                  <img className="img-holderps" src={auth0userdata.picture} alt="Profile Pic"/>
                </div>

                {/* This adds the white card background */}
                {/* <div className="profile-text-and-button-containerps"> */}
                <div className=''>
                  <div className='fieldleftps'>
                    <label htmlFor='firstName' className='labelpurpleps'>Name:  </label>
                    <label htmlFor='firstName' className='labelps'>{sessionUser.name}</label>
                  </div>

                  <div className='fieldleftps'>
                    <label htmlFor='email' className='labelpurpleps'>Email:  </label>
                    <label htmlFor='email' className='labelps'>{sessionUser.email}</label>
                  </div>

                  <div className="fieldleftinputps">
                    <label htmlFor='location' className='labelpurpleps'>Address:  </label>
                  </div>
                  <div className="fieldleftps">
                    <input
                      className='form-boxps'
                      id='location'
                      type='text'
                      name='location'
                      value={sessionUser.location}
                      placeholder='Your Address'
                      onChange={handleChange}
                    ></input>
                  </div>

                  <div className="fieldleftinputps">
                    <label htmlFor='location' className='labelpurpleps'>Are you a business?&nbsp;&nbsp;&nbsp;</label>
                    <input
                      className='check-boxps'
                      id='isCompany'
                      type='checkbox'
                      name='isCompany'
                      value={sessionUser.isCompany}
                    ></input>
                  </div>
                  <div className="fieldleftps">
                  </div>
                  <div className="fieldleftinputps">
                    <label htmlFor='companyName' className='labelpurpleps'>Business Name:  </label>
                  </div>
                  <div className="fieldleftps">
                    <input
                      className='form-boxps'
                      id='companyName'
                      type='text'
                      name='companyName'
                      value={sessionUser.companyName}
                      placeholder='Only if applicable'
                      onChange={handleChange}
                    ></input>
                  </div>

                  <div className="fieldleftinputps">
                    <label htmlFor='phone' className='labelpurpleps'>Phone:  </label>
                  </div>
                  <div className="fieldleftps">
                    <input
                      className='form-boxps'
                      id='phone'
                      type='text'
                      name='phone'
                      value={sessionUser.phone}
                      placeholder='Phone Number'
                      onChange={handleChange}
                    ></input>
                  </div>

                  {/* <button
                  type='button'
                  className='btn-grad'
                  onClick={handleClick}
                  data-testid='submitButton'
                >
          Save
                </button> */}
                  <Link className='btn-grad' to='/profile'>Save</Link>
                </div>
              </form>
            </article>
          </div>
        </section>
      </div>
    </>
  )
}

export default withAuthenticationRequired(ProfileSetUp, {
  // Show a message while the user waits to be redirected to the login page.
  onRedirecting: () => ('Authenticating...')
})
