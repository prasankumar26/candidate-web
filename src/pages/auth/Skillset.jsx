import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useEffect, useState } from 'react';
import Stack from '@mui/material/Stack';
import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import Container from '@mui/material/Container';
import AsyncSelect from 'react-select/async';
import { colourOptions } from '../../data';


const filterColors = (inputValue) => {
    return colourOptions.filter((i) =>
        i.label.toLowerCase().includes(inputValue.toLowerCase())
    );
};

const promiseOptions = (inputValue) =>
    new Promise((resolve) => {
        setTimeout(() => {
            resolve(filterColors(inputValue));
        }, 1000);
    });


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


const Skillset = () => {
    const navigate = useNavigate()
    const [progress, setProgress] = useState(10);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) => (prevProgress >= 100 ? 10 : prevProgress + 10));
        }, 800);
        return () => {
            clearInterval(timer);
        };
    }, []);


    return (
        <section className='position-relative' style={{ height: '106vh' }}>
            <Container maxWidth="xl">
                <div className='pt-0' maxWidth="lg" sx={{ position: 'relative', zIndex: '99' }}>
                    <Grid container spacing={5}>
                        <Grid item xs={12} md={4} style={{ backgroundColor: '#FF8960', height: '106vh', position: 'relative' }}>
                            <img src="/images/ellipse-two.png" alt="" className="img-fluid" style={{ position: 'absolute', bottom: '0', width: '70%' }} />
                            <img src="/images/opportunities.png" alt="" className="img-fluid" style={{ position: 'absolute', bottom: '0', left: '1%', width: '50%' }} />
                            <div className="mt-4">
                                <p className="text-start text-white ms-3" style={{ fontSize: '20px', padding: '20px 0px' }}>CATALYST</p>
                                <h2 className='text-white ms-3 mt-5 pt-5 position-relative' style={{ zIndex: '999' }}>
                                    Select skillset which you 
                                </h2>
                                <h2 className='text-white ms-3 position-relative' style={{ zIndex: '999' }}>are proud of</h2>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={8} className='pt-5 mt-5'>
                            <Box sx={{ width: '100%' }}>
                                <Stack direction="row" justifyContent="space-between" sx={{ flex: 1 }}>
                                    <h4 style={{ textTransform: 'uppercase' }}>About You</h4>
                                    <LinearProgressWithLabel sx={{ width: '100%' }} value={progress} />
                                </Stack>
                                <p className='mt-3'>1 step out of 2</p>
                                <p className='mt-5'> {`< Back`} </p>
                            </Box>

                            <Box className="mt-4">
                                <Stack direction="row" justifyContent="space-between">
                                    <p className='mb-3 text-muted'> <b>My Skillsets Are</b> </p>
                                </Stack>
                                <AsyncSelect
                                    isMulti
                                    cacheOptions
                                    defaultOptions
                                    loadOptions={promiseOptions}
                                    styles={{
                                        control: (provided, state) => ({
                                            ...provided,
                                            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                                            borderRadius: '99px',
                                            padding: '6px 0px'
                                        }),
                                    }}
                                />
                            </Box>

                            <Box className="mt-4">
                                <Stack direction="row" justifyContent="space-between">
                                    <p className='mb-3 text-muted'> <b>Tools Known</b> </p>
                                </Stack>
                                <AsyncSelect
                                    isMulti
                                    cacheOptions
                                    defaultOptions
                                    loadOptions={promiseOptions}
                                    styles={{
                                        control: (provided, state) => ({
                                            ...provided,
                                            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                                            borderRadius: '99px',
                                            padding: '6px 0px'
                                        }),
                                    }}
                                />
                            </Box>



                            <Button onClick={() => navigate('/experience')} sx={{
                                backgroundColor: '#756DE9', textTransform: 'capitalize', width: 'fit-content', padding: '15px 0px', borderRadius: '99px', '&:hover': {
                                    backgroundColor: '#756DE9',
                                },
                            }} className='w-100 text-white mt-4 mb-5 px-5' variant="text"> Next up Experience </Button>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </section>
    )
}

export default Skillset