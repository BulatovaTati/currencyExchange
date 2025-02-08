import { createSlice } from '@reduxjs/toolkit';
import { fetchBaseCurrency, fetchExchangeCurrency } from './operations';


const currencySlice = createSlice({
  name: 'currency',
  initialState: {
    baseCurrency: '',
    isLoading: false,
    error: null,
    rates: [],
    exchangeInfo: null
  },
  reducers: {
    setBaseCurrency: (state, action) => {
      state.baseCurrency = action.payload;
    }
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
      })
      .addCase(fetchExchangeCurrency.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchExchangeCurrency.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.exchangeInfo = payload;
      })
      .addCase(fetchExchangeCurrency.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const currencyReducer = currencySlice.reducer;
export const {setBaseCurrency } = currencySlice.actions;
