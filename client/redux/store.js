import { configureStore } from '@reduxjs/toolkit'
import itemsReducer from './itemsSlice'
import usersReducer from './usersSlice'

export default configureStore({
  reducer: {
    items: itemsReducer,
    users: usersReducer
  }
})
