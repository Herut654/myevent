import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import eventsTypeService from './eventsTypeService'

const initialState = {
  eventsTypes: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// Create new eventsType
export const createEventsType = createAsyncThunk(
  'eventsTypes/create',
  async (eventsTypeData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await eventsTypeService.createEventsType(eventsTypeData, token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)


// Get user eventsTypes
export const getEventsTypes = createAsyncThunk(
  'eventsTypes/getAll',
  async (_, thunkAPI) => {
    try {
      return await eventsTypeService.getEventsTypes()
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

// Delete user eventsType
export const deleteEventsType = createAsyncThunk(
  'eventsTypes/delete',
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await eventsTypeService.deleteEventsType(id, token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

export const eventsTypeSlice = createSlice({
  name: 'eventsTypes',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createEventsType.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createEventsType.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.eventsTypes.push(action.payload)
      })
      .addCase(createEventsType.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(getEventsTypes.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getEventsTypes.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.eventsTypes = action.payload
      })
      .addCase(getEventsTypes.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(deleteEventsType.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deleteEventsType.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.eventsTypes = state.eventsTypes.filter(
          (eventsType) => eventsType._id !== action.payload.id
        )
      })
      .addCase(deleteEventsType.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  },
})

export const { reset } = eventsTypeSlice.actions
export default eventsTypeSlice.reducer