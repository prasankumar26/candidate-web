import React from 'react'
import Navbar from '../../components/Navbar'
import Stack from '@mui/material/Stack';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Filter from '../../components/Filter';
import { styled } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';


const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: "#52C6AE"
    },
}));

const VideoCVJobs = () => {

    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const buttonStyle = {
        background: '#FF89601A',
        color: '#FF8960',
        fontSize: '14px',
        borderRadius: '99px',
        fontWeight: '600',
        '&:hover': {
            background: '#FF89601A',
            color: '#FF8960',
        },
    };




    return (
        <>
            <Navbar />
            <section className='px-4 pt-4' style={{ backgroundColor: '#ffffff' }}>
                <Box sx={{ flexGrow: 1 }} className="mt-4">
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <Stack direction="row" alignItems="center">
                                <KeyboardArrowLeftIcon /> <h4 style={{ fontSize: '14px', fontWeight: '400' }} className='me-2'> Back </h4>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <BorderLinearProgress variant="determinate" value={50} />
                            <Stack direction="row" justifyContent="space-between" className='mt-2'>
                                <p style={{ color: '#000000', fontWeight: '500', textTransform: 'uppercase' }}>1/3 Video CV</p>
                                <p style={{ color: '#000000', fontWeight: '500', textTransform: 'uppercase' }}>2/3 PROFILE</p>
                                <p style={{ color: '#000000', fontWeight: '500', textTransform: 'uppercase' }}>2/3 Answers</p>
                            </Stack>

                        </Grid>
                    </Grid>
                </Box>




                <Box sx={{ flexGrow: 1, paddingBottom: '60px' }} className="mt-3">
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <Box style={{ padding: '20px 20px', borderRadius: '5px', position: 'relative' }}>
                                <Stack>
                                    <Box sx={{ flexGrow: 1 }}>
                                        <Grid container spacing={2} style={{ display: 'flex', justifyContent: 'center' }}>
                                            <h2 style={{ fontSize: '24px' }} className='my-3'>Confirm all your details for <br />  this job role</h2>
                                            <Grid className='pb-5' item xs={12} md={8} style={{ background: `linear-gradient(0deg, rgba(117, 109, 233, 0.16), rgba(117, 109, 233, 0.16)), linear-gradient(0deg, #FFFFFF, #FFFFFF)` }}>
                                                <Stack direction="row" justifyContent="space-between">
                                                    <Box>
                                                        <Stack direction="row">
                                                            <img src="/images/ogilvy.png" alt="" className="img-fluid" style={{ width: '100px' }} />
                                                            <Box className="ms-3">
                                                                <h4 className="text-dark">Account Planner</h4>
                                                                <p className="text-dark">Ogilvy.Pvt. Ltd</p>
                                                                <Button variant="contained" className='mt-2' sx={{
                                                                    backgroundColor: '#52C6AE33', color: '#52C6AE', borderRadius: '99px', fontWeight: '600', '&:hover': {
                                                                        background: '#52C6AE33',
                                                                        color: '#52C6AE',
                                                                    },
                                                                }}>
                                                                    Good Fit
                                                                </Button>
                                                            </Box>
                                                        </Stack>
                                                    </Box>
                                                    <Box>
                                                        <MoreVertIcon style={{ color: '#363636' }} />
                                                    </Box>
                                                </Stack>

                                                <Stack className='mt-3' direction="row" flexWrap="wrap" >
                                                    <Stack style={{ background: '#FFFFFF87', width: '100px', borderRadius: '5px' }} className='p-3 me-2 mb-4'>
                                                        <img src="/images/browse-jobs/location.png" alt="" style={{ width: '30px', margin: '0px auto', display: 'block' }} />
                                                        <h6 className='text-center mt-2' style={{ fontSize: '14px', fontWeight: '500' }}>Mumbai</h6>
                                                    </Stack>
                                                    <Stack style={{ background: '#FFFFFF87', width: '100px', borderRadius: '5px' }} className='p-3 me-2 mb-4'>
                                                        <img src="/images/browse-jobs/icon-two.png" alt="" style={{ width: '30px', margin: '0px auto', display: 'block' }} />
                                                        <h6 className='text-center mt-2' style={{ fontSize: '14px', fontWeight: '500' }}>8 - 12 LPA</h6>
                                                    </Stack>
                                                    <Stack style={{ background: '#FFFFFF87', width: '100px', borderRadius: '5px' }} className='p-3 me-2 mb-4'>
                                                        <img src="/images/browse-jobs/icon-three.png" alt="" style={{ width: '30px', margin: '0px auto', display: 'block' }} />
                                                        <h6 className='text-center mt-2' style={{ fontSize: '14px', fontWeight: '500' }}>6M - 1Y</h6>
                                                    </Stack>
                                                    <Stack style={{ background: '#FFFFFF87', width: '100px', borderRadius: '5px' }} className='p-3 me-2 mb-4'>
                                                        <img src="/images/browse-jobs/icon-four.png" alt="" style={{ width: '30px', margin: '0px auto', display: 'block' }} />
                                                        <h6 className='text-center mt-2' style={{ fontSize: '14px', fontWeight: '500' }}>MBA</h6>
                                                    </Stack>
                                                    <Stack style={{ background: '#FFFFFF87', width: '100px', borderRadius: '5px' }} className='p-3 me-2 mb-4'>
                                                        <img src="/images/browse-jobs/icon-five.png" alt="" style={{ width: '30px', margin: '0px auto', display: 'block' }} />
                                                        <h6 className='text-center mt-2' style={{ fontSize: '14px', fontWeight: '500' }}>Full-Time Remote</h6>
                                                    </Stack>
                                                    <Stack style={{ background: '#FFFFFF87', width: '100px', borderRadius: '5px' }} className='p-3 me-2 mb-4'>
                                                        <img src="/images/browse-jobs/icon-six.png" alt="" style={{ width: '30px', margin: '0px auto', display: 'block' }} />
                                                        <h6 className='text-center mt-2' style={{ fontSize: '14px', fontWeight: '500' }}>12 days ago</h6>
                                                    </Stack>

                                                    <Box sx={{ margin: '0px auto', display: 'block' }}>
                                                        <Button variant="contained" className='mt-2' sx={{ backgroundColor: '#000', color: '#fff', borderRadius: '99px', fontWeight: '600' }}>
                                                            <img src="/images/browse-jobs/arrow.png" alt="" className='me-2' /> Apply
                                                        </Button>
                                                    </Box>
                                                </Stack>


                                                <img src="/images/browse-jobs/skip.png" alt="" className="img-fluid"
                                                    style={{ position: 'absolute', bottom: '-5%', left: '28%', width: '60px' }} />
                                                <img src="/images/browse-jobs/save.png" alt="" className="img-fluid"
                                                    style={{ position: 'absolute', bottom: '-5%', left: '50%', width: '60px' }} />


                                            </Grid>
                                        </Grid>
                                    </Box>
                                </Stack>
                            </Box>
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <h2 style={{ fontSize: '24px' }} className='text-center mt-3'>Select your Video CV</h2>

                            <Box className="mt-3">
                                <p style={{ color: '#14141480' }}>4 videos available</p>
                                <Swiper
                                    slidesPerView={1}
                                    spaceBetween={30}
                                    className="mySwiper"
                                    modules={[Autoplay]}
                                    autoplay={{
                                        delay: 2500,
                                        disableOnInteraction: false,
                                    }}
                                    breakpoints={{
                                        640: {
                                            slidesPerView: 1,
                                            spaceBetween: 20,
                                        },
                                        768: {
                                            slidesPerView: 2,
                                            spaceBetween: 40,
                                        },
                                        1024: {
                                            slidesPerView: 3,
                                            spaceBetween: 50,
                                        },
                                    }}
                                >
                                    {/* <Box> */}
                                    <SwiperSlide>
                                        <Box className='mt-3' sx={{ background: '#F2F1FF' }}>
                                            <Box className='mt-3' sx={{ background: '#F2F1FF', boxShadow: '2px 4px 10px 0px #0000001F', border: '2px solid #756DE9', borderRadius: '5px' }}>
                                                <div className="position-relative">
                                                    <img src="/images/browse-jobs/video-image.png" alt="" className="img-fluid" />
                                                    <div className="position-absolute center-icon">
                                                        <img src="/images/browse-jobs/video-icon.png" alt="" />
                                                    </div>
                                                    <div className="position-absolute center-icon-btn">
                                                        <Button className='py-0' variant="contained" style={{ backgroundColor: '#52C6AE', color: '#ffffff', width: 'fit-content', fontSize: '12px', borderRadius: '99px' }}>Use it by default</Button>
                                                    </div>
                                                    <div className="position-absolute center-icon-checkbox">
                                                        <FormControlLabel control={<Checkbox style={{ color: '#000000' }} />} />
                                                    </div>
                                                </div>
                                                <Stack direction="row" justifyContent="space-between" className='px-2 py-2' style={{ backgroundColor: '#fff' }}>
                                                    <h5 style={{ fontSize: '14px', color: '#000000' }}>Account Manager</h5>
                                                </Stack>
                                            </Box>
                                        </Box>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Box className='mt-3' sx={{ background: '#F2F1FF' }}>
                                            <Box className='mt-3' sx={{ background: '#F2F1FF', boxShadow: '2px 4px 10px 0px #0000001F', border: '2px solid #756DE9', borderRadius: '5px' }}>
                                                <div className="position-relative">
                                                    <img src="/images/browse-jobs/video-image.png" alt="" className="img-fluid" />
                                                    <div className="position-absolute center-icon">
                                                        <img src="/images/browse-jobs/video-icon.png" alt="" />
                                                    </div>
                                                    <div className="position-absolute center-icon-btn">
                                                        <Button className='py-0' variant="contained" style={{ backgroundColor: '#52C6AE', color: '#ffffff', width: 'fit-content', fontSize: '12px', borderRadius: '99px' }}>Use it by default</Button>
                                                    </div>
                                                    <div className="position-absolute center-icon-checkbox">
                                                        <FormControlLabel control={<Checkbox style={{ color: '#000000' }} />} />
                                                    </div>
                                                </div>
                                                <Stack direction="row" justifyContent="space-between" className='px-2 py-2' style={{ backgroundColor: '#fff' }}>
                                                    <h5 style={{ fontSize: '14px', color: '#000000' }}>Account Manager</h5>
                                                </Stack>
                                            </Box>
                                        </Box>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Box className='mt-3' sx={{ background: '#F2F1FF' }}>
                                            <Box className='mt-3' sx={{ background: '#F2F1FF', boxShadow: '2px 4px 10px 0px #0000001F', border: '2px solid #756DE9', borderRadius: '5px' }}>
                                                <div className="position-relative">
                                                    <img src="/images/browse-jobs/video-image.png" alt="" className="img-fluid" />
                                                    <div className="position-absolute center-icon">
                                                        <img src="/images/browse-jobs/video-icon.png" alt="" />
                                                    </div>
                                                    <div className="position-absolute center-icon-btn">
                                                        <Button className='py-0' variant="contained" style={{ backgroundColor: '#52C6AE', color: '#ffffff', width: 'fit-content', fontSize: '12px', borderRadius: '99px' }}>Use it by default</Button>
                                                    </div>
                                                    <div className="position-absolute center-icon-checkbox">
                                                        <FormControlLabel control={<Checkbox style={{ color: '#000000' }} />} />
                                                    </div>
                                                </div>
                                                <Stack direction="row" justifyContent="space-between" className='px-2 py-2' style={{ backgroundColor: '#fff' }}>
                                                    <h5 style={{ fontSize: '14px', color: '#000000' }}>Account Manager</h5>
                                                </Stack>
                                            </Box>
                                        </Box>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Box className='mt-3' sx={{ background: '#F2F1FF' }}>
                                            <Box className='mt-3' sx={{ background: '#F2F1FF', boxShadow: '2px 4px 10px 0px #0000001F', border: '2px solid #756DE9', borderRadius: '5px' }}>
                                                <div className="position-relative">
                                                    <img src="/images/browse-jobs/video-image.png" alt="" className="img-fluid" />
                                                    <div className="position-absolute center-icon">
                                                        <img src="/images/browse-jobs/video-icon.png" alt="" />
                                                    </div>
                                                    <div className="position-absolute center-icon-btn">
                                                        <Button className='py-0' variant="contained" style={{ backgroundColor: '#52C6AE', color: '#ffffff', width: 'fit-content', fontSize: '12px', borderRadius: '99px' }}>Use it by default</Button>
                                                    </div>
                                                    <div className="position-absolute center-icon-checkbox">
                                                        <FormControlLabel control={<Checkbox style={{ color: '#000000' }} />} />
                                                    </div>
                                                </div>
                                                <Stack direction="row" justifyContent="space-between" className='px-2 py-2' style={{ backgroundColor: '#fff' }}>
                                                    <h5 style={{ fontSize: '14px', color: '#000000' }}>Account Manager</h5>
                                                </Stack>
                                            </Box>
                                        </Box>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Box className='mt-3' sx={{ background: '#F2F1FF' }}>
                                            <Box className='mt-3' sx={{ background: '#F2F1FF', boxShadow: '2px 4px 10px 0px #0000001F', border: '2px solid #756DE9', borderRadius: '5px' }}>
                                                <div className="position-relative">
                                                    <img src="/images/browse-jobs/video-image.png" alt="" className="img-fluid" />
                                                    <div className="position-absolute center-icon">
                                                        <img src="/images/browse-jobs/video-icon.png" alt="" />
                                                    </div>
                                                    <div className="position-absolute center-icon-btn">
                                                        <Button className='py-0' variant="contained" style={{ backgroundColor: '#52C6AE', color: '#ffffff', width: 'fit-content', fontSize: '12px', borderRadius: '99px' }}>Use it by default</Button>
                                                    </div>
                                                    <div className="position-absolute center-icon-checkbox">
                                                        <FormControlLabel control={<Checkbox style={{ color: '#000000' }} />} />
                                                    </div>
                                                </div>
                                                <Stack direction="row" justifyContent="space-between" className='px-2 py-2' style={{ backgroundColor: '#fff' }}>
                                                    <h5 style={{ fontSize: '14px', color: '#000000' }}>Account Manager</h5>
                                                </Stack>
                                            </Box>
                                        </Box>
                                    </SwiperSlide>
                                    {/* </Box> */}
                                </Swiper>
                            </Box>

                            <Stack direction="row" justifyContent="cengter" alignItems="center">
                                <Box className="mt-5 w-100">
                                    <p className='text-center mb-2'>None of the video works for this Job Role?</p>
                                    <Button sx={{ textTransform: 'capitalize', border: '1px dashed #756DE9', width: '100%', cursor: 'pointer' }} className='px-3 py-2 me-2 mb-2 roundedone text-center'>
                                        Media Manager </Button>
                                </Box>
                            </Stack>
                            <Box className="text-center mt-3">
                                <Button variant="contained" className='py-3' style={{ backgroundColor: '#756DE9', borderRadius: '99px', width: '100%', textTransform: 'capitalize', fontWeight: '600' }}>
                                    Next Up Check Profile Details
                                </Button>
                            </Box>

                        </Grid>

                    </Grid>
                </Box>








            </section>
        </>
    )
}

export default VideoCVJobs