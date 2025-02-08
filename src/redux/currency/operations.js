import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUserInfo } from '../../service/opencagedataApi';

export const fetchBaseCurrency = createAsyncThunk(
  'currency/fetchBaseCurrency',
  async (coords, { rejectWithValue }) => {
    try {
      const res = await getUserInfo(coords);
      return res.results[0].annotations.currency.iso_code;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
