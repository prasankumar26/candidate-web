import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles'
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';
import Stack from '@mui/material/Stack';

const StyledFormControl = styled(FormControl)(({ theme }) => ({
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
}));

const CssTextField = styled(StyledFormControl)(({ theme }) => ({
    '& input': {
        border: 'none',
        borderRadius: '99px',
    },
}));

const YouWantTo = () => {
    const navigate = useNavigate()
    const [city, setCity] = useState('');

    const handleChange = (event) => {
        setCity(event.target.value);
    };

    return (
        <section className='signup-bg' style={{ height: '97vh' }}>
            <img src="/images/signup-one.png" alt="" className="img-fluid" style={{ position: 'absolute', width: '100px' }} />
            <img src="/images/signup-six.png" alt="" className="img-fluid" style={{ position: 'absolute', bottom: '10%', right: '0', width: '100px' }} />
            <Container maxWidth="sm" sx={{ position: 'relative', zIndex: '99' }}>
                <img src="/images/signup-two.png" alt="" className="img-fluid" style={{ zIndex: '1', position: 'absolute', top: '2%', right: '-4%', width: '100px' }} />
                <img src="/images/signup-three.png" alt="" className="img-fluid" style={{ zIndex: '-1', position: 'absolute', top: '42%', left: '-10%', width: '100px' }} />
                <img src="/images/signup-four.png" alt="" className="img-fluid" style={{ zIndex: '-1', position: 'absolute', top: '42%', right: '-14%', width: '100px' }} />
                <img src="/images/signup-five.png" alt="" className="img-fluid" style={{ position: 'absolute', bottom: '10%', left: '-20%', width: '100px' }} />
                <p className="text-center text-white" style={{ fontSize: '20px', padding: '20px 0px' }}>CATALYST</p>
                <Box className="bg-white roundedten" style={{ padding: '30px' }} >
                    <h2 className='text-center mb-5' style={{ padding: '20px 0px' }}>You want to</h2>

                    <Stack direction="row" justifyContent="center">
                        <div className="position-relative" style={{boxShadow: `0 0 10px #4b44d459`, border: 'none', borderRadius: '99px'}}>
                        <img src="/images/ywt-one.png" className='me-2 position-absolute'  alt="" style={{top: '-115%', left: '12%', width: '50px', height: '50px', objectFit: 'contain' }} />
                            <Button size="large" variant="outlined" className='roundedone' sx={{ color: '#000', textTransform: 'capitalize', border: 'none' }}>
                                Find Talent </Button>
                        </div>
                        <div className="position-relative">
                        <img src="/images/ywt-two.png" className='me-2 position-absolute'  alt="" style={{top: '-115%', right: '-16%', width: '100px', height: '50px', objectFit: 'contain' }} />
                            <Button size="large" variant="outlined" className='roundedone' sx={{ color: '#000', textTransform: 'capitalize' }}>
                                Find Work </Button>
                        </div>
                    </Stack>

                    <p className='text-center mb-3 mt-5'> Where are you based? </p>
                    <CssTextField fullWidth>
                        <InputLabel id="demo-simple-select-label">Mumbai</InputLabel>
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
                    </CssTextField>


                    <div className="text-center mt-5">
                        <p className='mb-2'>We have derived your location from your device.</p>
                        <p>You can change it from the drop down above.</p>
                    </div>
                    <br />
                    <br />
                    <Button onClick={()=> navigate('/what-your-name')} sx={{
                        backgroundColor: '#756DE9', textTransform: 'capitalize', padding: '15px 0px', borderRadius: '99px', '&:hover': {
                            backgroundColor: '#756DE9',
                        },
                    }} className='w-100 text-white' variant="text"><b>Next up Name</b></Button>

                </Box>
            </Container>
        </section>
    )
}

export default YouWantTo