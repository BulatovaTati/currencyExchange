import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUserInfo } from '../../service/opencagedataApi';
import { exchangeCurrency, latestRates } from '../../service/exchangeAPI';

export const fetchBaseCurrency = createAsyncThunk(
  'currency/fetchBaseCurrency',
  async (coords, { rejectWithValue, getState }) => {
    const state = getState();
    const { baseCurrency } = state.currency;
    if (baseCurrency) {
      return rejectWithValue('We already have base currency!');
    }
    try {
      const res = await getUserInfo(coords);
      return res.results[0].annotations.currency.iso_code;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const fetchExchangeCurrency = createAsyncThunk(
  'currency/fetchExchangeCurrency',
  async (data, { rejectWithValue }) => {
    try {
      const res = await exchangeCurrency(data);
      return res;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const fetchLatestRates = createAsyncThunk(
  'currency/fetchLatestRates',
  async (baseCurrency, { rejectWithValue }) => {
    try {
      const res = await latestRates(baseCurrency);
      return res;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
