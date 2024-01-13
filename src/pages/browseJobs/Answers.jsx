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
import EditIcon from '@mui/icons-material/Edit';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { borderRadius } from '@mui/system';


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

const Answers = () => {

    const [value, setValue] = React.useState('1');
    const [textValue, setTextValue] = React.useState('');

    const handleTextChange = (event) => {
        setTextValue(event.target.value);
    };

    const handleButtonClick = () => {
        // Handle button click logic here
        console.log('Button clicked!');
    };


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

                        {/* <Grid item xs={12} md={2}></Grid> */}

                        <Grid item xs={12} md={6}>
                            <h2 style={{ fontSize: '24px' }} className='text-center mt-3'>
                                Answer Interview Questions
                            </h2>

                            <p style={{ fontWeight: '600' }} className='mt-4'>Tell me about your experience as an Account</p>
                            <p style={{ fontWeight: '600' }}>Planner at your previous job? </p>

                            <TextareaAutosize
                                className='mt-3 p-2'
                                aria-label="empty textarea"
                                placeholder="Write your answer here..."
                                value={textValue}
                                onChange={handleTextChange}
                                style={{ width: '100%' }}
                                minRows={4}
                                sx={{ borderRadius: '10px', border: 'none', boxShadow: '0px 0px 11px 2px #4B44D40F inset' }}
                            />

                            <p style={{ fontWeight: '600' }} className='mt-4'>Can you meet a target of 4 clients every month?</p>

                            <TextareaAutosize
                                className='mt-3 p-2'
                                aria-label="empty textarea"
                                placeholder="Write your answer here..."
                                value={textValue}
                                onChange={handleTextChange}
                                style={{ width: '100%' }}
                                minRows={4}
                                sx={{ borderRadius: '10px', border: 'none', boxShadow: '0px 0px 11px 2px #4B44D40F inset' }}
                            />


                            <Box className="mt-3 text-center">
                                <Button variant="contained" className='py-3' sx={{ width: '60%', backgroundColor: '#756DE9', borderRadius: '99px' }}>
                                I'm confident! Let's Apply
                                </Button>
                            </Box>




                        </Grid>

                    </Grid>
                </Box>








            </section>
        </>
    )
}

export default Answers