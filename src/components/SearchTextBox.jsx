import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles'
import { useState } from 'react';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'English',
  'Hindi',
  'Telugu',
  'Tamil',
  'Kannada',
  'Marathi',
  'Punjabi',
];

const StyledFormControl = styled(FormControl)({
    position: 'relative',
    '& .MuiSelect-icon': {
      display: 'none',
    },
    m: 1,
    width: '100%',
    boxShadow: `inset 0 0 11px 2px #dbe2fec9`,
    borderRadius: '99px',
    '&:focus-within': {
      boxShadow: 'inset 0 0 11px 2px #dbe2fec9', // Inner shadow on focus
    },
  });

const SearchTextBox = () => {
    const [values, setValues] = useState({
        date: '',
        month: '',
        year: ''
      });
    
    const [personName, setPersonName] = useState([]);

    const handleChangeNew = (event) => {
      const {
        target: { value },
      } = event;
      setPersonName(
        typeof value === 'string' ? value.split(',') : value,
      );
    };

    return (
        <>
            <StyledFormControl>
                <InputLabel id="demo-multiple-checkbox-label">Search By Keywords</InputLabel>
                <Select
                    sx={{ width: '100%', borderRadius: '99px',  '& fieldset': {
                      border: 'none',
                      boxShadow: `inset 0 0 11px 2px rgba(75, 68, 212, 0.08)`, // Inner shadow
                  } }}
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    multiple
                    value={personName}
                    onChange={handleChangeNew}
                    input={
                        <OutlinedInput
                            label="Tag"
                            endAdornment={
                                <InputAdornment position="end">
                                    <SearchIcon />
                                </InputAdornment>
                            }
                        />
                    }
                    renderValue={(selected) => selected.join(', ')}
                    MenuProps={MenuProps}
                >
                    {names.map((name) => (
                        <MenuItem key={name} value={name}>
                            <Checkbox checked={personName.indexOf(name) > -1} />
                            <ListItemText primary={name} />
                        </MenuItem>
                    ))}
                </Select>
            </StyledFormControl>
        </>
    )
}

export default SearchTextBox