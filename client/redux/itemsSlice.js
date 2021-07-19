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

// claimItem
export const claimItem = createAsyncThunk(
  'items/claimItem',
  async (payload) => {
    const res = await request.patch('/api/v1/items/claim').send(payload)
    // const res = await request.patch('/api/v1/items/claim').send(payload)
    if (res.ok) {
      const claimedItem = {
        ...payload,
        isClaimed: true,
        claimedById: res.body.id
      }
      return claimedItem
    }
  }
)

export const addItem = createAsyncThunk(
  'items/postItem',
  async (payload) => {
    const res = await request.post('/api/v1/items/add').send(payload)
    if (res.ok) {
      const newItem = {
        ...payload,
        id: res.body.id
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
