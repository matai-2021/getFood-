// import { register, isAuthenticated, config } from '../../../auth'
// import { dispatch } from '../../../store'
// import { setUser } from '../../../actions/user'
// import { setWaiting } from '../../../actions/waiting'
// import { showError } from '../../../actions/error'

// export function profileSetUp (user) {
//   const { firstName, lastName, username, password, gardenId, email } = user
//   dispatch(setWaiting())
//   return register({
//     firstName,
//     lastName,
//     email,
//     location
//   }, config)
//     .then(() => {
//       if (isAuthenticated()) {
//         dispatch(setUser())
//       } else {
//         throw new Error('Not authenticated')
//       }
//       return null
//     })
//     .catch((error) => {
//       error.message === 'USERNAME_UNAVAILABLE'
//         ? dispatch(showError('This username is not available'))
//         : dispatch(showError(error.message))
//     })
// }
