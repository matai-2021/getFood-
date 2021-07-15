import request from 'superagent'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const getUser = createAsyncThunk(
  'users/getUser',
  async () => {
    const res = await request('/api/v1/users')
    if (res.ok) {
      return await res.body
    }
  }
)

export const addUser = createAsyncThunk(
  'users/addUser',
  async (payload) => {
    const res = await request.post('/api/v1/users').send(payload)
    if (res.ok) {
      return await res.body
    }
  }
)

export const deleteUser = createAsyncThunk(
  'users/deleteUser',
  async (payload) => {
    const res = await request.delete(`/api/v1/users/${payload.id}`)
    if (res.ok) {
      return { id: payload.id }
    }
  }
)

const usersSlice = createSlice({
  name: 'users',
  initialState: [],
  reducers: {},
  extraReducers: {
    [getUser.pending]: (state, action) => {
      console.log('Fetching data...')
    },
    [getUser.fulfilled]: (state, action) => {
      console.log('Data fetched successfully')
      return action.payload.items
    },
    [addUser.fulfilled]: (state, action) => {
      state.push(action.payload.user)
    },
    [deleteUser.fulfilled]: (state, action) => {
      return state.filter(user => user.id !== action.payload.id)
    }
  }
})

export default usersSlice.reducer
