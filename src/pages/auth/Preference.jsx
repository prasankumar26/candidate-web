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
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles'
import React from "react";
import Switch from '@mui/material/Switch';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

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
    value: PropTypes.number.isRequired,
};


const Preference = () => {
    const navigate = useNavigate()
    const [progress, setProgress] = useState(10);
    const [file, setFile] = useState(null);
    const handleChange = (file) => {
        setFile(file);
    };

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
            <div maxWidth="xl">
                <div className='pt-0' maxWidth="lg" sx={{ position: 'relative', zIndex: '99' }}>
                    <Grid container spacing={5}>
                        <Grid item xs={12} md={4} style={{ backgroundColor: '#FF8960', height: '106vh', position: 'relative' }}>
                            <img src="/images/ellipse-two.png" alt="" className="img-fluid" style={{ position: 'absolute', bottom: '0', width: '70%' }} />
                            <img src="/images/opportunities.png" alt="" className="img-fluid" style={{ position: 'absolute', bottom: '0', left: '1%', width: '50%' }} />
                            <div className="mt-4">
                                <p className="text-start text-white ms-3" style={{ fontSize: '20px', padding: '20px 0px' }}>CATALYST</p>
                                <h2 className='text-white ms-3 mt-5 pt-5 position-relative' style={{ zIndex: '999' }}>
                                    Tell us your Preferences
                                </h2>
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
                                <Grid container spacing={2}>
                                    <Grid item xs={12} md={6}>
                                        <p className='mb-3 text-muted'> <b>Work Experience</b> </p>
                                        <CssTextField
                                            id="outlined-number"
                                            placeholder="Duration"
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
                                        <p className='mb-3 text-muted'> <b>Salary</b> </p>
                                        <CssTextField
                                            id="outlined-number"
                                            placeholder="Range"
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

                            <Box className="mt-4">
                                <p className='mb-3 text-muted'> <b>Industry</b> </p>
                                <CssTextField
                                    id="outlined-basic"
                                    placeholder='Industry'
                                    variant="outlined"
                                    className='w-100'
                                    InputProps={{
                                        style: {
                                            borderRadius: '99px',
                                            backgroundColor: '#f4f4fc6b'
                                        },
                                    }}
                                />
                            </Box>

                            <Box className="mt-4">
                                <p className='mb-3 text-muted'> <b>Job Type</b> </p>
                                <CssTextField
                                    id="outlined-basic"
                                    placeholder='Job Type'
                                    variant="outlined"
                                    className='w-100'
                                    InputProps={{
                                        style: {
                                            borderRadius: '99px',
                                            backgroundColor: '#f4f4fc6b'
                                        },
                                    }}
                                />
                            </Box>

                            <Box className="mt-4">
                                <p className='mb-3 text-muted'> <b>Preferred City</b> </p>
                                <CssTextField
                                    id="outlined-basic"
                                    placeholder='Preferred City'
                                    variant="outlined"
                                    className='w-100'
                                    InputProps={{
                                        style: {
                                            borderRadius: '99px',
                                            backgroundColor: '#f4f4fc6b'
                                        },
                                    }}
                                />
                            </Box>

                            <Box className="mt-4">
                                <Stack direction="row" justifyContent="space-between">
                                    <p className='mb-3 text-muted'> <b>Functional Area</b> </p>
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

                            <Box className="mt-3">
                                <p className='mb-3 text-muted'>Type of the job</p>
                                <Button sx={{ border: '1px dashed #756DE9', width: 'fit-content', cursor: 'pointer' }} className='px-3 py-2 me-2 roundedone'>
                                    Full Time </Button>
                                <Button sx={{ border: '1px dashed #756DE9', width: 'fit-content', cursor: 'pointer' }} className='px-3 py-2 me-2 roundedone'>
                                    Part Time </Button>
                                <Button sx={{ border: '1px dashed #756DE9', width: 'fit-content', cursor: 'pointer' }} className='px-3 py-2 me-2 roundedone'>
                                    Internship </Button>
                            </Box>

                            <Box className="mt-3 mb-3">
                                <Switch {...label} /> <span>Remote Work</span>
                            </Box>

                            <Box className="mt-3">
                                <p className='mb-3 text-muted'> <b>Company Size</b> </p>
                                <Button sx={{ border: '1px dashed #756DE9', width: 'fit-content', cursor: 'pointer' }} className='px-3 py-2 me-2 roundedone'>
                                    {`< 25 Employees`} </Button>
                                <Button sx={{ border: '1px dashed #756DE9', width: 'fit-content', cursor: 'pointer' }} className='px-3 py-2 me-2 roundedone'>
                                    {`< 25 Employees`} </Button>
                                <Button sx={{ border: '1px dashed #756DE9', width: 'fit-content', cursor: 'pointer' }} className='px-3 py-2 me-2 roundedone'>
                                    {`< 50 Employees`} </Button>
                                <Button sx={{ border: '1px dashed #756DE9', width: 'fit-content', cursor: 'pointer' }} className='px-3 py-2 me-2 roundedone'>
                                    {`< 50 Employees`} </Button>
                            </Box>

                            <Box className="mt-5">
                                <p className='mb-3 text-muted'> <b>Company Culture</b> </p>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} md={6}>
                                        <Box sx={{ border: '1px dashed #756DE9', width: 'fit-content', cursor: 'pointer' }} className='px-3 py-2 me-2 roundedten' le>
                                            <p className='mb-3' style={{ color: '#756DE9' }}> Horizontal Corporate Culture </p>
                                            <p className='mb-2'>Teammates discuss new product ideas in the break room</p>
                                            <p className='mb-2'> Everybody does a little bit of everything</p>
                                            <p className='mb-2'>The CEO makes his or her own coffee</p>
                                            <p className='mb-2'> You still have to prove your product's worth to critics</p>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <Box sx={{ border: '1px dashed #756DE9', width: 'fit-content', cursor: 'pointer' }} className='px-3 py-2 me-2 roundedten' le>
                                            <p className='mb-3' style={{ color: '#756DE9' }}> Horizontal Corporate Culture </p>
                                            <p className='mb-2'>Teammates discuss new product ideas in the break room</p>
                                            <p className='mb-2'> Everybody does a little bit of everything</p>
                                            <p className='mb-2'>The CEO makes his or her own coffee</p>
                                            <p className='mb-2'> You still have to prove your product's worth to critics</p>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <Box sx={{ border: '1px dashed #756DE9', width: 'fit-content', cursor: 'pointer' }} className='px-3 py-2 me-2 roundedten' le>
                                            <p className='mb-3' style={{ color: '#756DE9' }}> Horizontal Corporate Culture </p>
                                            <p className='mb-2'>Teammates discuss new product ideas in the break room</p>
                                            <p className='mb-2'> Everybody does a little bit of everything</p>
                                            <p className='mb-2'>The CEO makes his or her own coffee</p>
                                            <p className='mb-2'> You still have to prove your product's worth to critics</p>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <Box sx={{ border: '1px dashed #756DE9', width: 'fit-content', cursor: 'pointer' }} className='px-3 py-2 me-2 roundedten' le>
                                            <p className='mb-3' style={{ color: '#756DE9' }}> Horizontal Corporate Culture </p>
                                            <p className='mb-2'>Teammates discuss new product ideas in the break room</p>
                                            <p className='mb-2'> Everybody does a little bit of everything</p>
                                            <p className='mb-2'>The CEO makes his or her own coffee</p>
                                            <p className='mb-2'> You still have to prove your product's worth to critics</p>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>

                            <Button onClick={() => navigate('/video-questions')} sx={{
                                backgroundColor: '#756DE9', textTransform: 'capitalize', width: 'fit-content', padding: '15px 0px', borderRadius: '99px', '&:hover': {
                                    backgroundColor: '#756DE9',
                                },
                            }} className='w-100 text-white mt-4 mb-5 px-5' variant="text"> Next Up Video CV </Button>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </section>
    )
}

export default Preference