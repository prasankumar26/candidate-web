import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useState } from 'react';
import Stack from '@mui/material/Stack';
import TopHeading from '../../components/TopHeading';
import { CssSelectTextField } from '../../components/CssTextfield';

const YouWantTo = () => {
    const navigate = useNavigate()
    const [city, setCity] = useState('');

    const handleChange = (event) => {
        setCity(event.target.value);
    };

    return (
        <section className='signup-bg' style={{ height: '97vh', overflowX: 'hidden' }}>
            <img src="/images/signup-one.png" alt="" className="img-fluid" style={{ position: 'absolute', width: '100px' }} />
            <img src="/images/signup-six.png" alt="" className="img-fluid" style={{ position: 'absolute', bottom: '10%', right: '0', width: '100px' }} />
            <span className='orange-round'></span>
            <span className='skyblue-round'></span>
            <span className='orange-round-right'></span>
            <span className='yellow-round-right'></span>
            <span className='skyblue-round-right'></span>
            <Container maxWidth="sm" sx={{ position: 'relative', zIndex: '99' }}>
                <img src="/images/signup-two.png" alt="" className="img-fluid" style={{ zIndex: '1', position: 'absolute', top: '2%', right: '-4%', width: '100px' }} />
                <span className='yellow-round'></span>
                <img src="/images/signup-three.png" alt="" className="img-fluid" style={{ zIndex: '-1', position: 'absolute', top: '42%', left: '-10%', width: '100px' }} />
                <img src="/images/signup-four.png" alt="" className="img-fluid" style={{ zIndex: '-1', position: 'absolute', top: '42%', right: '-14%', width: '100px' }} />
                <img src="/images/signup-five.png" alt="" className="img-fluid" style={{ position: 'absolute', bottom: '10%', left: '-20%', width: '100px' }} />
                <TopHeading />
                <Box className="bg-white roundedten" style={{ padding: '30px' }} >
                    <h2 className='text-center mb-5' style={{ padding: '20px 0px', fontSize: '35px' }}>You want to</h2>

                    <Stack direction="row" justifyContent="center">
                        <div className="position-relative" style={{boxShadow: `inset 0 0 11px 2px rgba(75, 68, 212, 0.08)`, border: 'none', borderRadius: '99px'}}>
                        <img src="/images/ywt-one.png" className='me-2 position-absolute'  alt="" style={{top: '-115%', left: '12%', width: '50px', height: '50px', objectFit: 'contain' }} />
                            <Button size="large" variant="outlined" className='roundedone' sx={{ color: '#000', textTransform: 'capitalize', border: 'none' }}>
                                Find Talent </Button>
                        </div>
                        <div className="position-relative">
                        <img src="/images/ywt-two.png" className='me-2 position-absolute'  alt="" style={{top: '-115%', right: '-16%', width: '100px', height: '50px', objectFit: 'contain' }} />
                            <Button size="large" variant="outlined" className='roundedone' sx={{boxShadow: `inset 0 0 11px 2px #fff`, color: '#000', textTransform: 'capitalize' }}>
                                Find Work </Button>
                        </div>
                    </Stack>

                    <p className='text-center mb-3 mt-5 font-S' style={{fontWeight: '600'}}> Where are you based? </p>
                    <CssSelectTextField fullWidth>
                        <InputLabel id="demo-simple-select-label">Select</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={city}
                            placeholder="Mumbei"
                            onChange={handleChange}
                        >
                            <MenuItem value={10}>Mumbai</MenuItem>
                            <MenuItem value={20}>Chennai</MenuItem>
                            <MenuItem value={30}>Hyderabad</MenuItem>
                        </Select>
                    </CssSelectTextField>


                    <div className="text-center mt-5">
                        <p className='mb-2 font-S' style={{color: '#9f9898'}}>We have derived your location from your device.</p>
                        <p className='font-S' style={{color: '#9f9898'}}>You can change it from the drop down above.</p>
                    </div>
                    <br />
                    <br />
                    <Button onClick={()=> navigate('/what-your-name')} sx={{
                        backgroundColor: '#756DE9', textTransform: 'capitalize', padding: '15px 0px', borderRadius: '99px', '&:hover': {
                            backgroundColor: '#756DE9',
                        },
                    }} className='w-100 text-white font-16' variant="text"><b>Next up Name</b></Button>
                </Box>
            </Container>
        </section>
    )
}

export default YouWantTo