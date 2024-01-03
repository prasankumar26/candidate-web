import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles'
import FormControl from '@mui/material/FormControl';

export const CssTextField = styled(TextField)(({ theme }) => ({
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            border: 'none',
            boxShadow: `inset 0 0 11px 2px rgba(75, 68, 212, 0.08)`, // Inner shadow
        },
        '&:hover fieldset': {
            border: 'none',
        },
        '&.Mui-focused fieldset': {
            border: 'none',
        },
    },
    '& input': {
        border: 'none',
        borderRadius: '99px',
    },
}));


const StyledFormControl = styled(FormControl)(({ theme }) => ({
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            border: 'none',
            boxShadow: `inset 0 0 11px 2px rgba(75, 68, 212, 0.08)`,
            borderRadius: '99px'
        },
        '&:hover fieldset': {
            border: 'none',
        },
        '&.Mui-focused fieldset': {
            border: 'none',
        },
    },
}));

export const CssSelectTextField = styled(StyledFormControl)(({ theme }) => ({
    '& input': {
        border: 'none',
        borderRadius: '99px',
    },
}));