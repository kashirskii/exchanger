import axios from 'axios'
import { ExchangerState } from '../store/exchangerSlice'

const axiosInstance = axios.create({
    baseURL: 'https://api.currencyapi.com/v3/'
})

export type GetExchangeRateQueries = Pick<ExchangerState, 'currency' | 'baseCurrency'>

export const getExchangeRate = ({currency, baseCurrency}: GetExchangeRateQueries) => axiosInstance
    .get(`latest?apikey=cur_live_nWdScRU8Ljz2TOegLPlZ7LnsvK3DmabgT3u0ss3m&currencies=${currency}&base_currency=${baseCurrency}`)
    .then(response => response.data)