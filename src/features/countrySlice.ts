import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { CountryType } from '../types'

interface CountryState {
  data: CountryType[] | null
  loading: boolean
  error: string
}

const initialState: CountryState = {
  data: null,
  loading: false,
  error: '',
}

export const fetchCountries = createAsyncThunk('fetchCountries', async () => {
  const response = await axios.get<CountryType[]>(
    'https://restcountries.com/v3.1/all'
  )
  console.log(response.data)

  return response.data
})

const countrySlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCountries.pending, (state, action) => {
      state.loading = true
      state.error = ''
    })
    builder.addCase(fetchCountries.fulfilled, (state, action) => {
      state.data = action.payload
      state.loading = false
    })
    builder.addCase(fetchCountries.rejected, (state, action) => {
      state.loading = false
      state.error = 'Error fetching countries data'
    })
  },
})

export default countrySlice.reducer
