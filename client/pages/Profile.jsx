import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

// import { useSelector } from 'react-redux'
// import { Register } from '../../components/Registration/Register'
// import { View } from '../../components/Registration/View'
// import { getState } from '../../store'

export default function Profile () {
  // const user = useSelector(globalState => globalState.user)
//   const user = getState().user
  const { user } = useAuth0() // user, isLoading
  const { name, picture, email } = user // given_name, family_name, nickname, sub

  return (
    <div>
      {
        // user.gardenId
        //   ? (<View user={user}/>)
        //   : (<Register user={user}/>)
      }
      <img src={picture} alt="Profile pic"/>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Location: </p>
    </div>
  )
}
