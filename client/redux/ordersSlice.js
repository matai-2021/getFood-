import request from 'superagent'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const getOrders = createAsyncThunk(
  'orders/getOrders',
  async () => {
    const res = await request('/api/v1/orders/1')
    if (res.ok) {
      return await res.body
    }
  }
)

const ordersSlice = createSlice({
  name: 'users',
  initialState: [],
  reducers: {},
  extraReducers: {
    [getOrders.pending]: (state, action) => {
      console.log('Fetching data...')
    },
    [getOrders.fulfilled]: (state, action) => {
      console.log('Data fetched successfully')
      return action.payload
    }
  }
})

export default ordersSlice.reducer
