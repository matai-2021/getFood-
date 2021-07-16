import request from 'superagent'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const getItems = createAsyncThunk(
  'items/getItems',
  async () => {
    const res = await request('/api/v1/items/')
    if (res.ok) {
      return await res.body
    }
  }
)

export const addItem = createAsyncThunk(
  'items/postItem',
  async (payload) => {
    const res = await request.post('/api/v1/items/add').send(payload)
    if (res.ok) {
      const newItem = {
        id: res.body.id,
        name: payload.name
      }
      return newItem
    }
  }
)

export const deleteItem = createAsyncThunk(
  'items/deleteItems',
  async (payload) => {
    const res = await request.delete(`/api/v1/items/${payload.id}`)
    if (res.ok) {
      return { id: payload.id }
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
      state.push(action.payload)
    },
    [deleteItem.fulfilled]: (state, action) => {
      return state.filter(item => item.id !== action.payload.id)
    }
  }
})

export default itemsSlice.reducer
