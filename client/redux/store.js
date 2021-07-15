import { configureStore } from '@reduxjs/toolkit'
import itemsReducer from './itemsSlice'
import usersReducer from './usersSlice'
import ordersReducer from './ordersSlice'

export default configureStore({
  reducer: {
    items: itemsReducer,
    users: usersReducer,
    orders: ordersReducer
  }
})
