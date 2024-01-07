import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useEffect, useState } from 'react';
import Stack from '@mui/material/Stack';
import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom';
import { colourOptions } from '../../data';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import React from "react";
import TopHeading from '../../components/TopHeading';
import ProgressBar from '../../components/ProgressBar';
import MobileNav from '../../components/MobileNav';

const filterColors = (inputValue) => {
    return colourOptions.filter((i) =>
        i.label.toLowerCase().includes(inputValue.toLowerCase())
    );
};


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


const VideoQuestions = () => {
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
                    <Grid container>
                        <Grid className='mob-none' item xs={12} md={4} style={{ backgroundColor: '#fff', height: '106vh', position: 'relative' }}>
                            <img src="/images/ellipse-two.png" alt="" className="img-fluid" style={{ position: 'absolute', bottom: '0', width: '70%' }} />
                            <img src="/images/opportunities.png" alt="" className="img-fluid" style={{ position: 'absolute', bottom: '0', left: '1%', width: '50%' }} />
                            <div className="mt-4">
                                <TopHeading textstart />
                               
                            </div>
                        </Grid>

                           <MobileNav />

                        <Grid item xs={12} md={8} className='pt-5 px-lg-s-des'>
                            <ProgressBar />

                            <Stack direction="row" className='mt-4'> <NavigateBeforeIcon /> Back </Stack>

                            <Box className="mt-2">
                                <h2 className='mb-3' style={{fontSize: '24px'}}>Use these 3 minutes to speak beyond your academics and the information you have provided.</h2>
                                <h2 className='mb-3' style={{fontSize: '24px'}}>You can speak about a range of topics which will give the hiring company an insight into your personality</h2>
                                <h2 className='mb-3' style={{fontSize: '24px'}}>You can use any of the below suggestions, or feel free to choose your own topics.</h2>
                            </Box>

                            <Box className="mt-3">
                                <Button sx={{ textTransform: 'capitalize', border: '1px dashed #756DE9', width: 'fit-content', cursor: 'pointer', backgroundColor: '#EAE9FC' }} className='px-3 py-2 me-2 mb-3 roundedone'>
                                    Life changing experiences </Button>
                                <Button sx={{ textTransform: 'capitalize', border: '1px dashed #756DE9', width: 'fit-content', cursor: 'pointer', backgroundColor: '#EAE9FC' }} className='px-3 py-2 me-2 mb-3 roundedone'>
                                    My passion project </Button>
                                <Button sx={{ textTransform: 'capitalize', border: '1px dashed #756DE9', width: 'fit-content', cursor: 'pointer', backgroundColor: '#EAE9FC' }} className='px-3 py-2 me-2 mb-3 roundedone'>
                                    Hire me because </Button>
                                <Button sx={{ textTransform: 'capitalize', border: '1px dashed #756DE9', width: 'fit-content', cursor: 'pointer', backgroundColor: '#EAE9FC' }} className='px-3 py-2 me-2 mb-3 roundedone'>
                                    3 years from now </Button>
                                <Button sx={{ textTransform: 'capitalize', border: '1px dashed #756DE9', width: 'fit-content', cursor: 'pointer', backgroundColor: '#EAE9FC' }} className='px-3 py-2 me-2 mb-3 roundedone'>
                                    A theory i want to prove wrong </Button>
                                <Button sx={{ textTransform: 'capitalize', border: '1px dashed #756DE9', width: 'fit-content', cursor: 'pointer', backgroundColor: '#EAE9FC' }} className='px-3 py-2 me-2 mb-3 roundedone'>
                                    A cause that i believe in  </Button>
                                <Button sx={{ textTransform: 'capitalize', border: '1px dashed #756DE9', width: 'fit-content', cursor: 'pointer', backgroundColor: '#EAE9FC' }} className='px-3 py-2 me-2 mb-3 roundedone'>
                                    My role models  </Button>
                                <Button sx={{ textTransform: 'capitalize', border: '1px dashed #756DE9', width: 'fit-content', cursor: 'pointer', backgroundColor: '#EAE9FC' }} className='px-3 py-2 me-2 mb-3 roundedone'>
                                    I am inspired by  </Button>
                                <Button sx={{ textTransform: 'capitalize', border: '1px dashed #756DE9', width: 'fit-content', cursor: 'pointer', backgroundColor: '#EAE9FC' }} className='px-3 py-2 me-2 mb-3 roundedone'>
                                    Hardest thing i have ever done </Button>
                                <Button sx={{ textTransform: 'capitalize', border: '1px dashed #756DE9', width: 'fit-content', cursor: 'pointer', backgroundColor: '#EAE9FC' }} className='px-3 py-2 me-2 mb-3 roundedone'>
                                    Hardest thing i have ever done </Button>
                                <Button sx={{ textTransform: 'capitalize', border: '1px dashed #756DE9', width: 'fit-content', cursor: 'pointer', backgroundColor: '#EAE9FC' }} className='px-3 py-2 me-2 mb-3 roundedone'>
                                    Failures i am proud of </Button>
                                <Button sx={{ textTransform: 'capitalize', border: '1px dashed #756DE9', width: 'fit-content', cursor: 'pointer', backgroundColor: '#EAE9FC' }} className='px-3 py-2 me-2 mb-3 roundedone'>
                                    What defines me the best </Button>
                            </Box>

                            <Box className="mt-3">
                                <h2 style={{fontSize: '24px'}}>Let's do a quick prep session to experience what Video CV is like.</h2>
                            </Box>

                            <Box className="mt-1">
                                <Grid container spacing={2}>
                                    <Grid item xs={12} md={6}>
                                        <Button onClick={() => navigate('/video')} sx={{
                                            backgroundColor: '#756DE9', textTransform: 'capitalize', width: 'fit-content', padding: '15px 0px', borderRadius: '99px', '&:hover': {
                                                backgroundColor: '#756DE9',
                                            },
                                        }} className='w-100 text-white mt-4 mb-0 px-5' variant="text"> Proceed to Practice Video </Button>
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <Button onClick={() => navigate('/video')} sx={{
                                            backgroundColor: '#fff', 
                                            boxShadow: '0px 2px 10px 0px #2222221A',
                                            textTransform: 'capitalize', width: 'fit-content', padding: '15px 0px', borderRadius: '99px', '&:hover': {
                                                backgroundColor: '#fff',
                                            },
                                        }} className='w-100 text-dark mt-4 mb-0  px-5' variant="text"> I'll upload my own VideoCV </Button>
                                    </Grid>
                                </Grid>
                            </Box>

                            <Box className='my-4'>
                                <Link to="/" style={{color: '#756DE9'}}>Come back to it later</Link>
                            </Box>


                        </Grid>
                    </Grid>
                </div>
            </div>
        </section>
    )
}

export default VideoQuestions