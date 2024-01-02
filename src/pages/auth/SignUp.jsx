import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles'
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';

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
}));

const SignUp = () => {
    return (
        <section className='signup-bg'>
            <img src="/images/signup-one.png" alt="" className="img-fluid" style={{ position: 'absolute', width: '100px' }} />
            <img src="/images/signup-six.png" alt="" className="img-fluid" style={{ position: 'absolute', bottom: '10%', right: '0', width: '100px' }} />
            <Container maxWidth="sm" sx={{ position: 'relative', zIndex: '99' }}>
                <img src="/images/signup-two.png" alt="" className="img-fluid" style={{ zIndex: '1', position: 'absolute', top: '2%', right: '-4%', width: '100px' }} />
                <img src="/images/signup-three.png" alt="" className="img-fluid" style={{ zIndex: '-1', position: 'absolute', top: '42%', left: '-10%', width: '100px' }} />
                <img src="/images/signup-four.png" alt="" className="img-fluid" style={{ zIndex: '-1', position: 'absolute', top: '42%', right: '-14%', width: '100px' }} />
                <img src="/images/signup-five.png" alt="" className="img-fluid" style={{ position: 'absolute', bottom: '10%', left: '-20%', width: '100px' }} />
                <p className="text-center text-white" style={{ fontSize: '20px', padding: '20px 0px' }}>CATALYST</p>
                <Box className="bg-white roundedten" style={{ padding: '30px' }} >
                    <h2 className='text-center' style={{ padding: '20px 0px' }}>We're glad you're aboard!</h2>
                    <CssTextField
                        id="outlined-basic"
                        label="Official Email Id"
                        variant="outlined"
                        className='w-100'
                        InputProps={{
                            style: {
                                borderRadius: '99px',
                                backgroundColor: '#f4f4fc6b'
                            },
                        }}
                    />
                    <br />
                    <br />
                    <CssTextField
                        id="outlined-number"
                        placeholder="+91"
                        variant="outlined"
                        className='w-100 mt-2'
                        InputProps={{
                            style: {
                                borderRadius: '99px',
                                backgroundColor: '#f4f4fc6b',
                            },
                            startAdornment: (
                                <InputAdornment position="start">
                                    <img src="/images/IN.png" alt="" />
                                </InputAdornment>
                            ),
                            endAdornment: (
                                <InputAdornment position="end">
                                    <Button variant="contained" sx={{ backgroundColor: '#756DE9' }}
                                        style={{ borderRadius: '99px', padding: '14px', marginRight: '-12px' }}>
                                        Send OTP
                                    </Button>
                                </InputAdornment>
                            ),
                        }}
                    />
                    <br />
                    <br />
                    <CssTextField
                        id="outlined-number"
                        placeholder="2-9-2-9"
                        variant="outlined"
                        className='w-100 mt-2'
                        InputProps={{
                            style: {
                                borderRadius: '99px',
                                backgroundColor: '#f4f4fc6b',
                            },
                            endAdornment: (
                                <InputAdornment position="end">
                                    <img src="/images/Group.png" alt="" />
                                </InputAdornment>
                            ),
                        }}
                    />
                    <br />
                    <br />
                    <Button sx={{
                        backgroundColor: '#756DE9', padding: '15px 0px', borderRadius: '99px', '&:hover': {
                            backgroundColor: '#756DE9', // Same color on hover
                        },
                    }} className='w-100 text-white' variant="text">Welcome to Catalyst</Button>
                    <br />
                    <br />
                    <p className='text-muted text-center'>Or</p>
                    <br />
                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1, sm: 2, md: 4 }} justifyContent={{ xs: 'center', sm: 'space-between' }} alignItems={{ xs: 'center', sm: 'flex-start' }} >
                        <Button variant="outlined" className='roundedone' sx={{ color: '#000', textTransform: 'capitalize' }}>
                            <img src="/images/google.png" className='me-2' alt="" style={{ width: '30px', height: '30px', objectFit: 'contain' }} /> Google </Button>

                        <Button variant="outlined" className='roundedone' sx={{ color: '#000', textTransform: 'capitalize' }}>
                            <img src="/images/linkedin.png" className='me-2' alt="" style={{ width: '35px', height: '35px', objectFit: 'contain' }} /> LinkedIn </Button>

                        <Button variant="outlined" className='roundedone' sx={{ color: '#000', textTransform: 'capitalize' }}>
                            <img src="/images/twitter.png" className='me-2' alt="" style={{ width: '30px', height: '30px', objectFit: 'contain' }} /> Twitter </Button>
                    </Stack>
                    <div className="text-center mt-4">
                        <p className='mb-2'> Already have an account? </p>
                        <Link to="/you-want-to" className='text-dark'><b>Sign In</b></Link>
                    </div>
                </Box>
            </Container>
        </section>
    )
}

export default SignUp