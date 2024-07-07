import { Button } from '@mui/material';

import { useAppDispatch, useAppSelector } from './store/hooks';
import {
  fetchExchangeRate,
  setAmountBaseCurrency,
  setAmountCurrency,
  setBaseCurrency,
  setCurrency,
} from './store/exchangerSlice';
import { ConvertInput } from './components/ConvertInput';

function App() {
  const dispatch = useAppDispatch();
  const data = useAppSelector(state => state.exchanger);
  const currency = useAppSelector(state => state.exchanger.currency);
  const baseCurrency = useAppSelector(state => state.exchanger.baseCurrency);
  return (
    <>
      <div className='mx-auto mt-52 w-[1000px] flex gap-5'>
        <h2 className='my-5'>FROM</h2>
        <ConvertInput
          inputValue={data.amountBaseCurrency}
          selectValue={data.baseCurrency}
          inputValueHandler={(event) => dispatch(setAmountBaseCurrency(Number(event.target.value)))}
          selectValueHandler={(event) => dispatch(setBaseCurrency(event.target.value))}
        />
        <h2 className='my-5'>TO</h2>
        <ConvertInput
          inputValue={data.amountCurrency}
          selectValue={data.currency}
          inputValueHandler={(event) => dispatch(setAmountCurrency(Number(event.target.value)))}
          selectValueHandler={(event) => dispatch(setCurrency(event.target.value))}
        />

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
