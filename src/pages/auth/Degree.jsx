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
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles'


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


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
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


const Degree = () => {
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
        <section className='position-relative' style={{ height: '170vh' }}>
            <div maxWidth="xl">
                <div className='pt-0' maxWidth="lg" sx={{ position: 'relative', zIndex: '99' }}>
                    <Grid container spacing={5}>
                        <Grid item xs={12} md={4} style={{ backgroundColor: '#FF8960', height: '170vh', position: 'relative' }}>
                            <img src="/images/ellipse-two.png" alt="" className="img-fluid" style={{ position: 'absolute', bottom: '0', width: '70%' }} />
                            <img src="/images/opportunities.png" alt="" className="img-fluid" style={{ position: 'absolute', bottom: '0', left: '1%', width: '50%' }} />
                            <div className="mt-4">
                                <p className="text-start text-white ms-3" style={{ fontSize: '20px', padding: '20px 0px' }}>CATALYST</p>
                                <h2 className='text-white ms-3 mt-5 pt-5 position-relative' style={{ zIndex: '999' }}>
                                    What is your latest education qualification?
                                </h2>
                                <h2 className='text-white ms-3 mt-5 position-relative' style={{ zIndex: '999' }}>Show it off!</h2>
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

                            <Box className="mt-3">
                                <p className='mb-3 text-muted'>What is your latest education qualification?</p>
                                <Button variant='contained' sx={{ width: 'fit-content', cursor: 'pointer', backgroundColor: '#756DE9' }} className='px-3 py-2 me-2 roundedone'>
                                    Bachelor Degree </Button>
                                <Button sx={{ border: '1px dashed #756DE9', width: 'fit-content', cursor: 'pointer' }} className='px-3 py-2 me-2 roundedone'>
                                    Masters Degree </Button>
                                <Button sx={{ border: '1px dashed #756DE9', width: 'fit-content', cursor: 'pointer' }} className='px-3 py-2 me-2 roundedone'>
                                    Diploma Holder </Button>
                                <Button sx={{ border: '1px dashed #756DE9', width: 'fit-content', cursor: 'pointer' }} className='px-3 py-2 me-2 roundedone'>
                                    Other </Button>
                            </Box>

                            <Box className="mt-4">
                                <p className='mb-3 text-muted'> <b>Course Name</b> </p>
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

                            <Box className="mt-3">
                                <Checkbox {...label} /> <span>I'm yet to graduate</span>
                            </Box>

                            <Box className="mt-4">
                                <p className='mb-3 text-muted'> <b>Which college/university did you get your degree from?</b> </p>
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

                            <Box className="mt-3">
                                <Stack direction="row" justifyContent="space-between">
                                    <p className='mb-3 text-muted'> <b>Course Specialization</b> </p>
                                    <p className='mb-3 text-muted'>Optional</p>
                                </Stack>
                                <CssTextField
                                    id="outlined-number"
                                    placeholder="N/A"
                                    variant="outlined"
                                    className='w-100'
                                    InputProps={{
                                        style: {
                                            borderRadius: '99px',
                                            backgroundColor: '#f4f4fc6b',
                                        }
                                    }}
                                />
                            </Box>

                            <Box className="mt-3">
                                <Grid container spacing={2}>
                                    <Grid item xs={12} md={6}>
                                        <p className='mb-3 text-muted'> <b>Year You Graduated</b> </p>
                                        <CssTextField
                                            id="outlined-number"
                                            placeholder="2020"
                                            variant="outlined"
                                            className='w-100'
                                            type="number"
                                            InputProps={{
                                                style: {
                                                    borderRadius: '99px',
                                                    backgroundColor: '#f4f4fc6b',
                                                }
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <p className='mb-3 text-muted'> <b>Percentage/Grade</b> </p>
                                        <CssTextField
                                            id="outlined-number"
                                            placeholder="72%"
                                            variant="outlined"
                                            className='w-100'
                                            type="number"
                                            InputProps={{
                                                style: {
                                                    borderRadius: '99px',
                                                    backgroundColor: '#f4f4fc6b',
                                                }
                                            }}
                                        />
                                    </Grid>
                                </Grid>
                            </Box>

                            <Box className="mt-3">
                                <p className='mb-3 text-muted'> <b>Which board have you completed schooling from?</b> </p>
                                <Button variant='contained' sx={{ width: 'fit-content', cursor: 'pointer', backgroundColor: '#756DE9' }} className='px-3 py-2 me-2 roundedone mb-3'>
                                    Secondary School Certificate (SSC) </Button>
                                <Button sx={{ border: '1px dashed #756DE9', width: 'fit-content', cursor: 'pointer' }} className='px-3 py-2 me-2 roundedone mb-3'>
                                    Indian Certificate of Secondary Education (ICSE) </Button>
                                <Button sx={{ border: '1px dashed #756DE9', width: 'fit-content', cursor: 'pointer' }} className='px-3 py-2 me-2 roundedone mb-3'>
                                    Central Board of Secondary Education (CBSE) </Button>
                                <Button sx={{ border: '1px dashed #756DE9', width: 'fit-content', cursor: 'pointer' }} className='px-3 py-2 me-2 roundedone mb-3'>
                                    IC School </Button>
                            </Box>



                            <Box className="mt-4">
                                <Stack direction="row" justifyContent="space-between">
                                    <p className='mb-3 text-muted'> <b>Where have you received your schooling?</b> </p>
                                    <p className='mb-3 text-muted'>Optional</p>
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



                            <Button onClick={() => navigate('/skillset')} sx={{
                                backgroundColor: '#756DE9', textTransform: 'capitalize', width: 'fit-content', padding: '15px 0px', borderRadius: '99px', '&:hover': {
                                    backgroundColor: '#756DE9',
                                },
                            }} className='w-100 text-white mt-2 mb-5 px-5' variant="text"> Next up skill-set </Button>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </section>
    )
}

export default Degree