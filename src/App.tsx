import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';

import { useAppDispatch, useAppSelector } from './store/hooks';
import {
  fetchExchangeRate,
  setAmountBaseCurrency,
  setAmountCurrency,
  setBaseCurrency,
  setCurrency,
} from './store/exchangerSlice';

function App() {
  const dispatch = useAppDispatch();
  const data = useAppSelector(state => state.exchanger);
  const currency = useAppSelector(state => state.exchanger.currency);
  const baseCurrency = useAppSelector(state => state.exchanger.baseCurrency);
  return (
    <>
      <div className='mx-auto mt-52 w-[1000px] flex gap-5'>
        <h2 className='my-5'>FROM</h2>
        <div className='flex gap-5'>
          <TextField
            onChange={event => dispatch(setAmountBaseCurrency(event.target.value))}
            id='outlined-basic'
            label='Amount'
            variant='outlined'
            value={data.amountBaseCurrency}
          />
          <FormControl sx={{ minWidth: 150 }}>
            <InputLabel id='base-currency-label'>Currency</InputLabel>
            <Select
              onChange={event => dispatch(setBaseCurrency(event.target.value))}
              labelId='base-currency-label'
              id='base-currency'
              label='Currency'
              value={data.baseCurrency}
            >
              <MenuItem value={`USD`}>USD</MenuItem>
              <MenuItem value={`EUR`}>EUR</MenuItem>
              <MenuItem value={`RUB`}>RUB</MenuItem>
              <MenuItem value={``}>None</MenuItem>
            </Select>
          </FormControl>
        </div>

        <h2 className='my-5'>TO</h2>
        <div className='flex gap-5'>
          <TextField
            onChange={event => dispatch(setAmountCurrency(event.target.value))}
            id='outlined-basic'
            label='Amount'
            variant='outlined'
            value={data.amountCurrency}
          />
          <FormControl sx={{ minWidth: 150 }}>
            <InputLabel id='currency-label'>Currency</InputLabel>
            <Select
              onChange={event => dispatch(setCurrency(event.target.value))}
              labelId='currency-label'
              id='currency'
              label='Currency'
              value={data.currency}
            >
              <MenuItem value={`USD`}>USD</MenuItem>
              <MenuItem value={`EUR`}>EUR</MenuItem>
              <MenuItem value={`RUB`}>RUB</MenuItem>
              <MenuItem value={``}>None</MenuItem>
            </Select>
          </FormControl>
        </div>
        <Button
          variant='outlined'
          onClick={() => dispatch(fetchExchangeRate({ currency, baseCurrency }))}
        >
          CONVERT
        </Button>
      </div>
    </>
  );
}

export default App;
