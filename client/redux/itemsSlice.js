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

// claimItem
export const claimItem = createAsyncThunk(
  'items/claimItem',
  async (payload) => {
    console.log('Payload: ', payload)
    const res = await request.patch('/api/v1/items/claim').send(payload)
    if (res.ok) {
      console.log('res.body: ', res.body)
      const claimedItem = {
        ...payload,
        claimedById: res.body.claimedById
      }
      return claimedItem
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
    },
    [claimItem.fulfilled]: (state, action) => {
      // return action.payload
      return console.log('in action: ', action.payload)
    }
  }
})

export default itemsSlice.reducer
