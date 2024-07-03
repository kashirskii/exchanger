import { createAsyncThunk, createSlice, isRejected } from '@reduxjs/toolkit'
import type { AsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { getExchangeRate } from '../api/instance' 
import { GetExchangeRateQueries } from '../api/instance'

export interface ExchangerState {
  baseCurrency: string,
  currency: string,
  amountBaseCurrency: number,
  amountCurrency: number,
  currencyValue: number
}

const initialState: ExchangerState = {
    baseCurrency: '',
    currency: '',
    amountBaseCurrency: 0,
    amountCurrency: 0,
    currencyValue: 0,
}

export const fetchExchangeRate: AsyncThunk<any, GetExchangeRateQueries, any> = createAsyncThunk(
    'exchanger/fetchExchangeRate',
    async ({currency, baseCurrency}) => {
      const response = await getExchangeRate({baseCurrency, currency})
      return response
    },
  )


export const exchangerSlice = createSlice({
  name: 'exchanger',
  initialState,
  reducers: {
    setBaseCurrency: (state, action: PayloadAction<string>) => {
        state.baseCurrency = action.payload
        fetchExchangeRate({currency: state.currency, baseCurrency: state.baseCurrency})
    },
    setCurrency: (state, action: PayloadAction<string>) => {
        state.currency = action.payload
        fetchExchangeRate({currency: state.currency, baseCurrency: state.baseCurrency})
    },
    setAmountBaseCurrency: (state, action: PayloadAction<string>) => {
        state.amountBaseCurrency = Number(action.payload)
        fetchExchangeRate({currency: state.currency, baseCurrency: state.baseCurrency})
    },
    setAmountCurrency: (state, action: PayloadAction<string>) => {
        state.amountCurrency = Number(action.payload)
        fetchExchangeRate({currency: state.currency, baseCurrency: state.baseCurrency})
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchExchangeRate.fulfilled, (state, action) => {
        state.currencyValue = action.payload?.data[state.currency].value
        state.amountCurrency = action.payload?.data[state.currency].value * state.amountBaseCurrency
    })
    builder.addCase(fetchExchangeRate.rejected, () => {
        console.log('error')
    })
  }
})

export const { setBaseCurrency, setCurrency, setAmountBaseCurrency, setAmountCurrency } = exchangerSlice.actions

export default exchangerSlice.reducer