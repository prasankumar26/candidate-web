import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles'
import Stack from '@mui/material/Stack';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import TopHeading from '../../components/TopHeading';

const WhatYourName = () => {

    const navigate = useNavigate()

    const CssTextField = styled(TextField)(({ theme }) => ({
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                border: 'none',
                boxShadow: `inset 0px 0px 11px 2px #4B44D4`,
            },
            '&:hover fieldset': {
                border: 'none',
            },
            '&.Mui-focused fieldset': {
                border: 'none',
            },
        },
        '& input': {
            color: 'white',
            border: 'none',
            borderRadius: '99px',
        },
        '& input::placeholder': {
            color: '#fff',
            fontSize: '18px'
          },
        '& label': {
            color: 'white !important',
        },
        '& .MuiInputLabel-outlined': {
            transform: 'translate(14px, 12px) scale(1)',
        },
    }));

    return (
        <section className='signup-bg' style={{ height: '100%' }}>
             <span className='round-one'></span>
             <span className='round-two'></span>
             <span className='round-three'></span>
             <span className='round-four'></span>
             <span className='round-five'></span>
             <span className='round-six'></span>
             <span className='round-seven'></span>
             <span className='round-eight'></span>
             <span className='round-nine'></span>
             <span className='round-ten'></span>
             <span className='round-eleven'></span>
            <Container maxWidth="md" sx={{ position: 'relative', zIndex: '99' }}>
                <TopHeading />
                <div className="text-center mt-5 mb-5">
                    <h2 className='text-white' style={{fontSize: '35px'}}>Great!</h2>
                    <h2 className='text-white mt-1' style={{fontSize: '35px'}}>What is Your Name?</h2>
                </div>

               <div className="mx-lg-5">
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
                            backgroundColor: '#6861E3'
                        },
                    }}
                />
                </div>
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

                <div className="mx-lg-5">
                <Button onClick={()=> navigate('/opportunities')} sx={{
                    backgroundColor: '#fff', padding: '15px 0px', borderRadius: '99px', boxShadow: `0px 0px 11px 2px #4B44D4`, '&:hover': {
                        backgroundColor: '#fff', 
                    },
                }} className='w-100 mt-5 fontP mb-2' variant="text" style={{color: '#756DE9', fontSize: '16px', fontWeight: '600', textTransform: 'capitalize'}}>That'll be all. Let's dive in!</Button>
                </div>

            </Container>
        </section>
    )
}

export default WhatYourName