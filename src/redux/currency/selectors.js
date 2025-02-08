import { createSelector } from '@reduxjs/toolkit';
import { selectFilterValue } from '../filter/selectors';

export const selectBaseCurrency = state => state.currency.baseCurrency;
export const selectRates = state => state.currency.rates;
export const selectExchangeInfo = state => state.currency.exchangeInfo;
export const selectIsLoading = state => state.currency.isLoading;
export const selectError = state => state.currency.error;

export const selectFilteredRates = createSelector(
  [selectBaseCurrency, selectRates, selectFilterValue],
  (baseCurrency, rates, filter) =>
    rates
      .filter(
        ([key]) => key !== baseCurrency && key.toLowerCase().includes(filter),
      )
      .map(([key, value]) => ({ key, value: (1 / value).toFixed(2) })),
);
