import request from 'superagent'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const getUsers = createAsyncThunk(
  'users/getUsers',
  async () => {
    const res = await request('/api/v1/users')
    if (res.ok) {
      return await res.body
    }
  }
)

export const getUserById = createAsyncThunk(
  'users/getUserById',
  async (payload) => {
    const res = await request(`/api/v1/users${payload.id}`)
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
      const newUser = {
        id: res.body.id,
        name: payload.name
      }
      return newUser
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
    [getUsers.pending]: (state, action) => {
      console.log('Fetching data...')
    },
    [getUsers.fulfilled]: (state, action) => {
      console.log('Data fetched successfully')
      return action.payload
    },
    [getUserById.fulfilled]: (state, action) => {
      console.log('Data fetched successfully')
      return action.payload
    },
    [addUser.fulfilled]: (state, action) => {
      state.push(action.payload)
    },
    [deleteUser.fulfilled]: (state, action) => {
      return state.filter(user => user.id !== action.payload.id)
    }
  }
})

export default usersSlice.reducer
