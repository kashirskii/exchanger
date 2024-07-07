import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from '@mui/material';

interface ConvertInputProps {
  inputValue: number;
  selectValue: string;
  inputValueHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  selectValueHandler: (event: SelectChangeEvent<string>) => void;
}

const ConvertInput = ({
  inputValue,
  selectValue,
  inputValueHandler,
  selectValueHandler,
}: ConvertInputProps) => {
  return (
    <div className='flex gap-5'>
      <TextField
        onChange={inputValueHandler}
        id='outlined-basic'
        label='Amount'
        variant='outlined'
        value={inputValue}
      />

      <FormControl sx={{ minWidth: 150 }}>
        <InputLabel id='currency-label'>Currency</InputLabel>
        <Select
          onChange={selectValueHandler}
          labelId='currency-label'
          id='currency'
          label='Currency'
          value={selectValue}
        >
          <MenuItem value={`USD`}>USD</MenuItem>
          <MenuItem value={`EUR`}>EUR</MenuItem>
          <MenuItem value={`RUB`}>RUB</MenuItem>
          <MenuItem value={``}>None</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export { ConvertInput };
