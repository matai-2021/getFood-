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

export const editItem = createAsyncThunk(
  'item/editItem',
  async (payload, updatedItem) => {
    const res = await request.patch(`/api/v1/items/edit/${payload.id}`)
    if (res.ok) {
      return payload
    }
  }
)

export const claimItem = createAsyncThunk(
  'items/claimItem',
  async (payload) => {
    const res = await request.patch('/api/v1/items/claim').send(payload)
    if (res.ok) {
      return payload
    }
  }
)

const itemsSlice = createSlice({
  name: 'items',
  initialState: [],
  reducers: {},
  extraReducers: {
    [getItems.pending]: (state, action) => {
    },
    [getItems.fulfilled]: (state, action) => {
      return action.payload.items
    },
    [addItem.fulfilled]: (state, action) => {
      state.push(action.payload)
    },
    [deleteItem.fulfilled]: (state, action) => {
      return state.filter(item => item.id !== action.payload.id)
    },
    [editItem.fulfilled]: (state, action) => {
      console.log(action.payload)
    },
    [claimItem.fulfilled]: (state, action) => {
      return state.map(item => {
        if (item.id === action.payload.id) {
          return action.payload
        }
        return item
      })
    }
  }
})

export default itemsSlice.reducer
