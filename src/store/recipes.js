import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import recipeApi from '../api/recipe'

export const fetchRecipes = createAsyncThunk('appRecipes/fetchRecipes', async (params, { rejectWithValue }) => {
  try {
    const response = await recipeApi.get(`/v2?type=public&q=${params}&app_id=15f663af&app_key=3691f5c90f0d2d1497a0703982ae4b84`);
    return response.data
  }
  catch (err) {
    return rejectWithValue(err.message)
  }
})

export const appRecipeSlice = createSlice({
  name: 'appRecipes',
  initialState: {
    data: [],
    loading: false,
    error: ''
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchRecipes.fulfilled, (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = ''
    })
    builder.addCase(fetchRecipes.pending, (state, action) => {
      state.loading = true
      state.error = ''
    })
    builder.addCase(fetchRecipes.rejected, (state, action) => {
      state.error = action.payload
    })
  }
})

export default appRecipeSlice.reducer