import { createSlice } from '@reduxjs/toolkit';
import { fetchBaseCurrency } from './operations';

const currencySlice = createSlice({
  name: 'currency',
  initialState: {
    baseCurrency: '',
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchBaseCurrency.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchBaseCurrency.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.baseCurrency = payload;
      })
      .addCase(fetchBaseCurrency.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const currencyReducer = currencySlice.reducer;
