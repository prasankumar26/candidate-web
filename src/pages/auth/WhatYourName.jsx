import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles'
import Stack from '@mui/material/Stack';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const WhatYourName = () => {

    const navigate = useNavigate()

    const CssTextField = styled(TextField)(({ theme }) => ({
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                border: 'none',
                boxShadow: `0 0 10px #4b44d459`,
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
        '& input::placeholder': {
            color: '#000000', // Replace with the color you want
          },
    }));

    return (
        <section className='signup-bg' style={{ height: '97vh' }}>
            <Container maxWidth="sm" sx={{ position: 'relative', zIndex: '99' }}>
                <p className="text-center text-white" style={{ fontSize: '20px', padding: '20px 0px' }}>CATALYST</p>

                <div className="text-center mt-5 mb-5">
                    <h2 className='text-white'>Great!</h2>
                    <h2 className='text-white mt-1'>What is Your Name?</h2>
                </div>

                <Stack direction="row" justifyContent="end">
                    <img src="/images/name.png" alt="" className="img-fluid me-5" style={{ width: '100px' }} />
                </Stack>
                <CssTextField
                    id="outlined-basic"
                    placeholder='Full Name'
                    variant="outlined"
                    className='w-100 text-white'
                    InputProps={{
                        style: {
                            borderRadius: '99px',
                            backgroundColor: '#f4f4fc6b'
                        },
                    }}
                />
                <br />
                <br />

                <h3 className='text-white text-center mt-3'>You are a</h3>

                <Stack direction="row" justifyContent="center">
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                    >
                        <FormControlLabel value="male" className='text-white' control={<Radio sx={{ color: '#fff', '&.Mui-checked': { color: '#fff' } }} />} label="Male" />
                        <FormControlLabel value="female" className='text-white' control={<Radio sx={{ color: '#fff', '&.Mui-checked': { color: '#fff' } }} />} label="Female" />
                        <FormControlLabel value="other" className='text-white' control={<Radio sx={{ color: '#fff', '&.Mui-checked': { color: '#fff' } }} />} label="Other" />
                    </RadioGroup>
                </Stack>

                <Button onClick={()=> navigate('/opportunities')} sx={{
                    backgroundColor: '#fff', padding: '15px 0px', borderRadius: '99px', '&:hover': {
                        backgroundColor: '#fff',
                    },
                }} className='w-100 text-dark mt-5' variant="text">That'll be all. Let's dive in!</Button>

            </Container>
        </section>
    )
}

export default WhatYourName