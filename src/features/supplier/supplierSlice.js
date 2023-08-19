import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import supplierService from './supplierService'

const initialState = {
  suppliers: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// Create new supplier
export const createSupplier = createAsyncThunk(
  'suppliers/create',
  async (supplierData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await supplierService.createSupplier(supplierData, token)
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


// Get user suppliers
export const getSuppliers = createAsyncThunk(
  'suppliers/getAll',
  async (_, thunkAPI) => {
    try {
      return await supplierService.getSuppliers()
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

// Delete user supplier
export const deleteSupplier = createAsyncThunk(
  'suppliers/delete',
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await supplierService.deleteSupplier(id, token)
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

export const supplierSlice = createSlice({
  name: 'suppliers',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createSupplier.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createSupplier.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.suppliers.push(action.payload)
      })
      .addCase(createSupplier.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(getSuppliers.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getSuppliers.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.suppliers = action.payload
      })
      .addCase(getSuppliers.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(deleteSupplier.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deleteSupplier.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.suppliers = state.suppliers.filter(
          (supplier) => supplier._id !== action.payload.id
        )
      })
      .addCase(deleteSupplier.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  },
})

export const { reset } = supplierSlice.actions
export default supplierSlice.reducer