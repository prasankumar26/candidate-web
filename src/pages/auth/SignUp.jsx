import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';
import TopHeading from '../../components/TopHeading';
import { CssTextField } from '../../components/CssTextfield';

const SignUp = () => {
    return (
        <section className='signup-bg' style={{ height: '100vh', overflowX: 'hidden' }}>
            <img src="/images/signup-one.png" alt="" className="img-fluid" style={{ position: 'absolute', width: '100px' }} />
            <img src="/images/signup-six.png" alt="" className="img-fluid" style={{ position: 'absolute', bottom: '10%', right: '0', width: '100px' }} />
            <span className='orange-round'></span>
            <span className='skyblue-round'></span>
            <span className='orange-round-right'></span>
            <span className='yellow-round-right'></span>
            <span className='skyblue-round-right'></span>
            <Container maxWidth="md" sx={{ position: 'relative', zIndex: '99' }}>
                <img src="/images/signup-two.png" alt="" className="img-fluid" style={{ zIndex: '1', position: 'absolute', top: '2%', right: '-4%', width: '100px' }} />
                <span className='yellow-round'></span>
                <img src="/images/signup-three.png" alt="" className="img-fluid" style={{ zIndex: '-1', position: 'absolute', top: '42%', left: '-10%', width: '100px' }} />
                <img src="/images/signup-four.png" alt="" className="img-fluid" style={{ zIndex: '-1', position: 'absolute', top: '42%', right: '-14%', width: '100px' }} />
                <img src="/images/signup-five.png" alt="" className="img-fluid" style={{ position: 'absolute', bottom: '10%', left: '-20%', width: '100px' }} />
                <TopHeading />
                <Box className="bg-white roundedten pad-desktop-signup" >
                    <h2 className='text-center' style={{ padding: '20px 0px', fontSize: '35px', zIndex: '99', position: 'relative' }}>We're glad you're aboard!</h2>
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
                    <CssTextField
                        id="outlined-number"
                        placeholder="+91"
                        variant="outlined"
                        className='w-100 mt-0'
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
                                    <Button variant="contained" sx={{ backgroundColor: '#756DE9', opacity: '50%', fontWeight: '600' }}
                                        style={{ borderRadius: '0 99px 99px 0', padding: '14px 30px', marginRight: '-12px' }}>
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
                        placeholder="Enter OTP Code"
                        variant="outlined"
                        className='w-100 mt-0'
                        InputProps={{
                            style: {
                                borderRadius: '99px',
                                backgroundColor: '#f4f4fc6b',
                                fontFamily: 'sans-serif',
                                fontSize: '20px'
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
                        backgroundColor: '#756DE9', fontWeight: '600', textTransform: "capitalize", fontSize: '16px', opacity: '50%', padding: '15px 0px', borderRadius: '99px', '&:hover': {
                            backgroundColor: '#756DE9',
                        },
                    }} className='w-100 text-white' variant="text">Welcome to Catalyst</Button>
                    <br />
                    <br />
                    <div className="w-100" style={{ display: 'flex', justifyContent: 'center' }}>
                        <div className="separator" style={{ width: '100%', textAlign: 'center' }}>
                            <div className="line"></div>
                            <p className='text-muted' style={{ display: 'inline-block', position: 'relative', zIndex: '1', padding: '0 10px' }}>Or</p>
                            <div className="line"></div>
                        </div>
                    </div>
                    <br />
                    <Stack flexWrap="wrap" direction={{ xs: 'row', sm: 'row' }} spacing={{ xs: 1, sm: 2, md: 4 }} justifyContent={{ xs: 'center', sm: 'center' }} alignItems={{ xs: 'center', sm: 'flex-start' }} >
                        <Button variant="outlined" className='roundedone' sx={{ color: '#000', textTransform: 'capitalize', fontSize: '18px' }}>
                            <img src="/images/google.png" className='me-2' alt="" style={{ width: '30px', height: '30px', objectFit: 'contain', padding: '3px' }} /> Google </Button>

                        <Button variant="outlined" className='roundedone' sx={{ color: '#000', textTransform: 'capitalize', fontSize: '18px' }}>
                            <img src="/images/linkedin.png" className='me-2' alt="" style={{ width: '35px', height: '35px', objectFit: 'contain' }} /> LinkedIn </Button>

                        <Button variant="outlined" className='roundedone social-m' sx={{ color: '#000', textTransform: 'capitalize', fontSize: '18px', }}>
                            <img src="/images/twitter.png" className='me-2' alt="" style={{ width: '30px', height: '30px', objectFit: 'contain',  padding: '3px' }} /> Twitter </Button>
                    </Stack>
                    <div className="text-center mt-4">
                        <p className='mb-1' style={{ fontSize: '20px' }}> Already have an account? </p>
                        <Link to="/you-want-to" className='text-dark decoration-none' style={{ fontSize: '20px', fontWeight: '600' }}>Sign In</Link>
                    </div>
                </Box>
            </Container>
        </section>
    )
}

export default SignUp