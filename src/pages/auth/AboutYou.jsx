import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { useEffect, useState } from 'react';
import Stack from '@mui/material/Stack';
import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Radio from '@mui/material/Radio';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

function LinearProgressWithLabel(props) {
    return (
        <Box sx={{ width: '80%', display: 'flex', alignItems: 'center' }}>
            <Box sx={{ width: '60%', mr: 1 }}>
                <LinearProgress variant="determinate" {...props} />
            </Box>
            <Box sx={{ minWidth: 35 }}>
                <Typography variant="body2" color="text.secondary">{`${Math.round(
                    props.value,
                )}%`} <span style={{ fontSize: '13px' }}> <b>Up Next: Video CV</b> </span> </Typography>
            </Box>
        </Box>
    );
}

LinearProgressWithLabel.propTypes = {
    /**
     * The value of the progress indicator for the determinate and buffer variants.
     * Value between 0 and 100.
     */
    value: PropTypes.number.isRequired,
};

const CreateProfile = () => {
    const navigate = useNavigate()
    const [progress, setProgress] = useState(10);
    const [selectedValue, setSelectedValue] = useState('a');
  
    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) => (prevProgress >= 100 ? 10 : prevProgress + 10));
        }, 800);
        return () => {
            clearInterval(timer);
        };
    }, []);


    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };


    return (
        <section className='position-relative' style={{height: '95vh'}}>
            <img src="/images/ellipse.png" alt="" className="img-fluid" style={{ position: 'absolute', bottom: '0', width: '300px' }} />
            <img src="/images/opportunities.png" alt="" className="img-fluid" style={{ position: 'absolute', bottom: '0', left: '1%', width: '220px' }} />

        <Container className='mt-5' maxWidth="lg" sx={{ position: 'relative', zIndex: '99' }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={3}>
                    <div className="mt-4">
                        <p className='mb-2' style={{ color: '#030303', fontSize: '20px' }}> <b>1/5</b> </p>
                        <p className='mb-2' style={{ color: '#030303', fontSize: '20px' }}> So here's a thought. Say your team is kicking off a huge project at work.</p>
                        <p style={{ color: '#030303', fontSize: '20px' }} className='mt-4'> What's your plan of attack? </p>
                    </div>
                </Grid>
                <Grid item xs={12} md={9}>
                    <Box sx={{ width: '100%' }}>
                        <Stack direction="row" justifyContent="space-between" sx={{ flex: 1 }}>
                            <h4>About You</h4>
                            <LinearProgressWithLabel sx={{ width: '100%' }} value={progress} />
                        </Stack>
                    </Box>

                    <Stack direction="column" justifyContent="center" alignItems="center" className='mt-5'>
                        <Box style={{ background: '#F5F6FA', width: 'fit-content' }} className="p-3 mb-4">
                            <Stack direction="row" alignItems="center">
                                <Radio
                                    checked={selectedValue === 'a'}
                                    onChange={handleChange}
                                    value="a"
                                    name="radio-buttons"
                                    inputProps={{ 'aria-label': 'A' }}
                                />
                                <p>Meet in the conference room, <br /> prepare a few ideas</p>
                            </Stack>
                        </Box>

                        <Box style={{ background: '#F5F6FA', width: 'fit-content' }} className="p-3 mb-4">
                            <Stack direction="row" alignItems="center">
                                <Radio
                                    checked={selectedValue === 'b'}
                                    onChange={handleChange}
                                    value="a"
                                    name="radio-buttons"
                                    inputProps={{ 'aria-label': 'A' }}
                                />
                                <p>Meet in the conference room, <br /> prepare a few ideas</p>
                            </Stack>
                        </Box>

                        <Box style={{ background: '#F5F6FA', width: 'fit-content' }} className="p-3">
                            <Stack direction="row" alignItems="center">
                                <Radio
                                    checked={selectedValue === 'c'}
                                    onChange={handleChange}
                                    value="a"
                                    name="radio-buttons"
                                    inputProps={{ 'aria-label': 'A' }}
                                />
                                <p>Meet in the conference room, <br /> prepare a few ideas</p>
                            </Stack>
                        </Box>

                        <Box className="p-3">
                        <Button variant="contained" onClick={()=> navigate('/hobbies')} size='large' className='px-5 next-btn mt-2' sx={{borderRadius: '99px'}}>Next</Button>
                        </Box>
                    </Stack>
                </Grid>
            </Grid>
        </Container>
        </section>
    )
}

export default CreateProfile