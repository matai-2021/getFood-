import request from 'superagent'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const getItems = createAsyncThunk(
  'items/getItems',
  async () => {
    const res = await request('/api/v1/items')
    if (res.ok) {
      return await res.body
    }
  }
)

export const addItem = createAsyncThunk(
  'items/postItem',
  async (payload) => {
    const res = await request.post('/api/v1/items').send(payload)
    if (res.ok) {
      return await res.body.items
    }
  }
)

const itemsSlice = createSlice({
  name: 'items',
  initialState: [],
  reducers: {},
  extraReducers: {
    [getItems.pending]: (state, action) => {
      console.log('Fetching data...')
    },
    [getItems.fulfilled]: (state, action) => {
      console.log('Data fetched successfully')
      return action.payload.items
    },
    [addItem.fulfilled]: (state, action) => {
      state.push(action.payload.items)
    }
  }
})

export default itemsSlice.reducer
