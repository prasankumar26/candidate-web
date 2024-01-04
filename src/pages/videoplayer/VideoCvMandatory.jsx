import React from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { CssTextField } from '../../components/CssTextfield';
import ContentCutIcon from '@mui/icons-material/ContentCut';
import MenuIcon from '@mui/icons-material/Menu';
import Paper from '@mui/material/Paper';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Button from '@mui/material/Button';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AddIcon from '@mui/icons-material/Add';

function LinearProgressWithLabel(props) {
    return (
        <Box sx={{ width: '80%', display: 'flex', alignItems: 'center' }}>
            <Box sx={{ width: '60%', mr: 1 }}>
                <LinearProgress variant="determinate" {...props} />
            </Box>
        </Box>
    );
}

LinearProgressWithLabel.propTypes = {
    value: PropTypes.number.isRequired,
};


const VideoCvMandatory = () => {
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
        <>
        <section style={{backgroundColor: '#ffffff'}}>
            <Navbar />

            <Container maxWidth="lg" className='mt-5'>
                <Box sx={{ width: '100%' }}>
                    <Stack direction="row" justifyContent="space-between" sx={{ flex: 1 }}>
                        <div>
                            <h4 className='text-uppercase' style={{ fontSize: '18px' }}>Video Cv</h4>
                            <p style={{ fontSize: '12px' }}>1 step out of 2</p>
                        </div>

                        <LinearProgressWithLabel sx={{ width: '100%' }} value={progress} />
                    </Stack>
                </Box>


                <Box sx={{ flexGrow: 1 }} className="mt-5">
                    <Grid container spacing={2}>
                        <Grid item xs={6} md={6}>
                            <p className="text-bold">
                                Final Output
                            </p>

                            <Stack direction="row" >
                                <div className="position-relative mb-5">
                                    <img src="/images/video/video-1.png" alt="" className="img-fluid mt-3" style={{ width: '300px' }} />
                                    <div className="position-absolute video-pause-button">
                                        <img src="/images/video/pause.png" alt="" className="img-fluid mt-5" style={{ width: '30px' }} />
                                    </div>
                                </div>
                            </Stack>
                        </Grid>
                        <Grid item xs={6} md={6}>
                            <p>What do we call this draft?</p>
                            <Box className="mt-3">
                                <CssTextField
                                    id="outlined-basic"
                                    placeholder='VideoCV for XYZ Job Role'
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

                            <Stack direction="row" justifyContent="space-between" className='mt-4'>
                                <p><b>Edit video</b></p>
                                <Stack direction="row" alignItems="center" style={{ color: '#756DE9' }}> <ContentCutIcon className='me-2' /> Trim clips</Stack>
                            </Stack>

                            <Stack spacing={3} direction="row" justifyContent="space-between" alignItems="center">
                                <Paper elevation={3} style={{ padding: '10px', borderRadius: '10px', marginTop: '20px', width: '100%' }}>
                                    <Stack direction="row" justifyContent="space-between" alignItems="center">
                                        <Stack direction="row" justifyContent="space-between" alignItems="center">
                                            <img src="https://st3.depositphotos.com/4601361/36362/i/450/depositphotos_363622028-stock-photo-girl-spring-green-park-walk.jpg" alt="" className="img-fluid"
                                                style={{ width: '100px', borderRadius: '10px' }}
                                            />
                                            <p className='ms-3'><b style={{ color: '#221F60' }}>0.25 sec</b></p>
                                        </Stack>
                                        <div>
                                            <p style={{ color: '#756DE9' }}> <MenuIcon /> </p>
                                        </div>
                                    </Stack>
                                </Paper>
                                <p className='mt-4'> <DeleteForeverIcon /> </p>
                            </Stack>

                            <Stack spacing={3} direction="row" justifyContent="space-between" alignItems="center">
                                <Paper elevation={3} style={{ padding: '10px', borderRadius: '10px', marginTop: '20px', width: '100%' }}>
                                    <Stack direction="row" justifyContent="space-between" alignItems="center">
                                        <Stack direction="row" justifyContent="space-between" alignItems="center">
                                            <img src="https://st3.depositphotos.com/4601361/36362/i/450/depositphotos_363622028-stock-photo-girl-spring-green-park-walk.jpg" alt="" className="img-fluid"
                                                style={{ width: '100px', borderRadius: '10px' }}
                                            />
                                            <p className='ms-3'><b style={{ color: '#221F60' }}>0.25 sec</b></p>
                                        </Stack>
                                        <div>
                                            <p style={{ color: '#756DE9' }}> <MenuIcon /> </p>
                                        </div>
                                    </Stack>
                                </Paper>
                                <p className='mt-4'> <DeleteForeverIcon /> </p>
                            </Stack>

                            <Stack direction="row" alignItems="center" spacing={2} className='mt-4'>
                                <img src="/images/video/avatar.png" alt="" className="img-fluid" style={{ width: '50px' }} />
                                <p>You still have 2.75 sec left to showcase your personality </p>
                            </Stack>

                            <Stack direction="row" alignItems="center" spacing={2} className='mt-4'>
                                <Button sx={{ border: '1px dashed #756DE9', width: 'fit-content', cursor: 'pointer', textTransform: 'capitalize', color: '#756DE9' }} className='px-3 py-2 me-2 roundedone'>
                                    <VideoCallIcon className='me-2' /> Record a Clip </Button>
                                <Button sx={{ border: '1px dashed #756DE9', width: 'fit-content', cursor: 'pointer', textTransform: 'capitalize', color: '#756DE9' }} className='px-3 py-2 me-2 roundedone'>
                                    <AddIcon className='me-2' /> Import New Clip </Button>
                            </Stack>


                            <Button onClick={() => navigate('/about-you')} sx={{
                                backgroundColor: '#6352cc', textTransform: 'capitalize', fontSize: '16px', padding: '15px 0px', borderRadius: '99px', '&:hover': {
                                    backgroundColor: '#6352cc',
                                },
                            }} className='w-100 text-white mt-3' variant="text">Save and Proceed</Button>

                            <Button
                                onClick={() => navigate('/helpyou')}
                                sx={{
                                    backgroundColor: '#fff',
                                    color: '#6352CC',
                                    textTransform: 'capitalize',
                                    fontSize: '16px',
                                    padding: '15px 0px',
                                    borderRadius: '99px',
                                    boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
                                    '&:hover': {
                                        backgroundColor: '#fff',
                                    },
                                }}
                                className='w-100 my-3'
                                variant="text"
                            >
                                Save to Camera Roll
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
            </section>
        </>
    )
}

export default VideoCvMandatory