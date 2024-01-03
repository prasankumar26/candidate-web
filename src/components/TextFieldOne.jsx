import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles'

const CssTextField = styled(TextField)(({ theme }) => ({
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

const TextFieldOne = () => {
    return (
    <>
            <CssTextField
            id="outlined-basic"
            variant="outlined"
            className='w-100'
            placeholder='Official Email ID'
            InputProps={{
                style: {
                    borderRadius: '99px',
                    backgroundColor: '#f4f4fc6b',
                    fontFamily: 'sans-serif',
                    fontSize: '20px'
                },
            }}
            />
            <br />
            <br />
    </>
    )
}

export default TextFieldOne