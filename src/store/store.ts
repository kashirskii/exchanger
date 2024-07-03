import { configureStore } from '@reduxjs/toolkit'
import exchangerSlice from './exchangerSlice'

export const store = configureStore({
  reducer: {
    exchanger: exchangerSlice,
  },
})

export type AppStore = typeof store
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']

