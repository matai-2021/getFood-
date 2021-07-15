// import { dispatch, getState } from '../../../store'
// import { setWaiting, clearWaiting } from '../../../actions/waiting'
// import { showError } from '../../../actions/error'
// import requestor from '../../../consume'

// export function addItem (event, navigateTo, consume = requestor) {
//   const storeState = getState()
//   const { gardenId, token } = storeState.user
//   const newEvent = {
//     gardenId,
//     ...event
//   }
//   dispatch(setWaiting())
//   return consume('/events', token, 'post', newEvent)
//     .then(() => {
//       navigateTo(`/gardens/${gardenId}`)
//       return null
//     })
//     .catch((err) => {
//       dispatch(showError(err.message))
//     })
//     .finally(() => {
//       dispatch(clearWaiting())
//     })
// }
