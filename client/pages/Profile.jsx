import React from 'react'
// import { useSelector } from 'react-redux'
// import { Register } from '../../components/Registration/Register'
// import { View } from '../../components/Registration/View'
// import { getState } from '../../store'

export default function Profile () {
  // const user = useSelector(globalState => globalState.user)
//   const user = getState().user

  return (
    <div>
      (This is the profile page, to be updated with Auth0)
      {
        // user.gardenId
        //   ? (<View user={user}/>)
        //   : (<Register user={user}/>)
      }
      <p>Name: </p>
      <p>Email: </p>
      <p>Location: </p>
    </div>
  )
}
