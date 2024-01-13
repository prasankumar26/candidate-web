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

const ConfirmAll = () => {

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
                            <h2 style={{ fontSize: '24px' }} className='my-3 text-center'>Confirm all your details for <br />  this job role</h2>
                               <Box sx={{ flexGrow: 1 }}>
                                    <Grid container spacing={2} style={{display: 'flex', justifyContent: 'center'}}>
                                        <Grid item xs={12} md={8} className='pb-5' style={{background: `linear-gradient(0deg, rgba(117, 109, 233, 0.16), rgba(117, 109, 233, 0.16)), linear-gradient(0deg, #FFFFFF, #FFFFFF)`}}>
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
                                Check Profile Details
                            </h2>

                            <Stack direction="row" justifyContent="space-between" className='mb-3'>
                                <h6 style={{ color: '#242222', fontSize: '16px', fontWeight: '500' }}>About Me</h6>
                                <Stack direction="row" alignItems="center">
                                    <EditIcon style={{ color: '#756DE9', fontSize: '15px' }} /> <h6 style={{ fontSize: '14px', color: '#756DE9' }} className='ms-1'>Edit</h6>
                                </Stack>
                            </Stack>

                            <p style={{ fontSize: '14px', lineHeight: '23px' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, </p>

                            <Divider variant="fullWidth" className='mt-4 mb-4' />

                            <Stack direction="row" justifyContent="space-between" className='mt-3'>
                                <h6 style={{ color: '#242222', fontSize: '16px', fontWeight: '500' }}>Personality Type</h6>
                                <Stack direction="row" alignItems="center">
                                    <EditIcon style={{ color: '#756DE9', fontSize: '15px' }} /> <h6 style={{ fontSize: '14px', color: '#756DE9' }} className='ms-1'>TEST RETAKE</h6>
                                </Stack>
                            </Stack>


                            <Box sx={{ flexGrow: 1 }} className="mt-5">
                                <Grid container spacing={2}>
                                    <Grid item xs={12} md={8}>
                                        <h6 style={{ fontSize: '14px', color: '#756DE9' }} className='ms-1'>THE DRIVER</h6>
                                        <p className="mt-2">
                                            When faced with a challenge, drivers say, “Bring it on!” Your eye is always on the prize at work, and you like to use logic and data to tackle problems because if there's anything you love more than playing the game, it's winning.
                                        </p>
                                    </Grid>
                                    <Grid item xs={12} md={4}>
                                        <Stack direction="row" justifyContent="end">
                                            <img src="/images/browse-jobs/browse-right.png" alt="" style={{ objectFit: 'contain', width: '150px' }} className="img-fluid" />
                                        </Stack>
                                    </Grid>
                                </Grid>
                            </Box>

                            <Divider variant="fullWidth" className='mt-4 mb-4' />

                            <Stack direction="row" justifyContent="space-between" className='mt-3 mb-3'>
                                <h6 style={{ color: '#242222', fontSize: '16px', fontWeight: '500' }}>Demographics</h6>
                                <Stack direction="row" alignItems="center">
                                    <EditIcon style={{ color: '#756DE9', fontSize: '15px' }} /> <h6 style={{ fontSize: '14px', color: '#756DE9' }} className='ms-1'>Edit</h6>
                                </Stack>
                            </Stack>

                            <Box sx={{ flexGrow: 1 }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} md={4} className='mb-3'>
                                        <Stack direction="row">
                                            <img src="/images/browse-jobs/calender.png" alt="" />
                                            <p style={{ color: '#756DE9' }} className='ms-2'>Date of Birth</p>
                                        </Stack>
                                        <p className='mt-2'>03 /03 /1994</p>
                                    </Grid>
                                    <Grid item xs={12} md={4} className='mb-3'>
                                        <Stack direction="row">
                                            <img src="/images/browse-jobs/gender.png" alt="" />
                                            <p style={{ color: '#756DE9' }} className='ms-2'>Gender</p>
                                        </Stack>
                                        <p className='mt-2'>Female</p>
                                    </Grid>
                                    <Grid item xs={12} md={4} className='mb-3'>
                                        <Stack direction="row">
                                            <img src="/images/browse-jobs/language.png" alt="" />
                                            <p style={{ color: '#756DE9' }} className='ms-2'>Language</p>
                                        </Stack>
                                        <p className='mt-2'>English, Hindi, Marathi</p>
                                    </Grid>
                                    <Grid item xs={12} md={4} className='mb-3'>
                                        <Stack direction="row">
                                            <img src="/images/browse-jobs/location.png" alt="" />
                                            <p style={{ color: '#756DE9' }} className='ms-2'>Location of Residence</p>
                                        </Stack>
                                        <p className='mt-2'>Mumbai</p>
                                    </Grid>
                                    <Grid item xs={12} md={4} className='mb-3'>
                                        <Stack direction="row">
                                            <img src="/images/browse-jobs/joining.png" alt="" />
                                            <p style={{ color: '#756DE9' }} className='ms-2'>Joining availability</p>
                                        </Stack>
                                        <p className='mt-2'>in 3 months</p>
                                    </Grid>
                                </Grid>
                            </Box>



                            <Divider variant="fullWidth" className='mt-4 mb-4' />

                            <Stack direction="row" justifyContent="space-between" className='mt-3 mb-3'>
                                <h6 style={{ color: '#242222', fontSize: '16px', fontWeight: '500' }}>Academic Achievement</h6>
                                <Stack direction="row" alignItems="center">
                                    <EditIcon style={{ color: '#756DE9', fontSize: '15px' }} /> <h6 style={{ fontSize: '14px', color: '#756DE9' }} className='ms-1'>Edit</h6>
                                </Stack>
                            </Stack>

                            <Box className="mb-3">
                                <Stack direction="row">
                                    <img src="/images/browse-jobs/language.png" alt="" />
                                    <p style={{ color: '#756DE9' }} className='ms-2'>Latest qualification</p>
                                </Stack>
                                <p>MBA  /  2020  /  Sharda University  /  Mumbai</p>
                            </Box>

                            <Box className="mb-3">
                                <Stack direction="row">
                                    <img src="/images/browse-jobs/language.png" alt="" />
                                    <p style={{ color: '#756DE9' }} className='ms-2'>School</p>
                                </Stack>
                                <p>CBSC / 2007  /  Vibgyor International  /  Mumbai </p>
                            </Box>

                            <Box className="mb-3">
                                <Stack direction="row">
                                    <img src="/images/browse-jobs/language.png" alt="" />
                                    <p style={{ color: '#756DE9' }} className='ms-2'>certification courses</p>
                                </Stack>

                                <Box sx={{ flexGrow: 1 }}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} md={6}>
                                            <p className='mt-2'>Bachelors in Design / 2020</p>
                                            <img src="/images/browse-jobs/certificate.png" alt="" className='mt-3 w-100' />
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <p className='mt-2'>Risk Management  /  2021</p>
                                            <img src="/images/browse-jobs/certificate.png" alt="" className='mt-3 w-100' />
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Box>

                            <Divider variant="fullWidth" className='mt-4 mb-4' />

                            <Stack direction="row" justifyContent="space-between" className='mt-3 mb-3'>
                                <h6 style={{ color: '#242222', fontSize: '16px', fontWeight: '500' }}>Skill-set</h6>
                                <Stack direction="row" alignItems="center">
                                    <EditIcon style={{ color: '#756DE9', fontSize: '15px' }} /> <h6 style={{ fontSize: '14px', color: '#756DE9' }} className='ms-1'>Edit</h6>
                                </Stack>
                            </Stack>

                            <Box className="mt-3">
                                <Stack direction="row" flexWrap="wrap">
                                    <Button variant="contained" className='me-3' style={{
                                        margin: '5px 0px', background: '#FF89601A', borderRadius: '99px',
                                        color: '#FF8960', fontWeight: '600'
                                    }}>Account Management</Button>
                                    <Button variant="contained" className='me-3' style={{
                                        margin: '5px 0px', background: '#FF89601A', borderRadius: '99px',
                                        color: '#FF8960', fontWeight: '600'
                                    }}>Copy writer</Button>
                                    <Button variant="contained" className='me-3' style={{
                                        margin: '5px 0px', background: '#FF89601A', borderRadius: '99px',
                                        color: '#FF8960', fontWeight: '600'
                                    }}>Account Management</Button>
                                    <Button variant="contained" className='me-3' style={{
                                        margin: '5px 0px', background: '#FF89601A', borderRadius: '99px',
                                        color: '#FF8960', fontWeight: '600'
                                    }}>Copy writer</Button>
                                    <Button variant="contained" className='me-3' style={{
                                        margin: '5px 0px', background: '#FF89601A', borderRadius: '99px',
                                        color: '#FF8960', fontWeight: '600'
                                    }}>Visual designer</Button>
                                    <Button variant="contained" className='me-3' style={{
                                        margin: '5px 0px', background: '#FF89601A', borderRadius: '99px',
                                        color: '#FF8960', fontWeight: '600'
                                    }}>Sales Management</Button>
                                    <Button variant="contained" className='me-3' style={{
                                        margin: '5px 0px', background: '#FF89601A', borderRadius: '99px',
                                        color: '#FF8960', fontWeight: '600'
                                    }}>Visual designer</Button>
                                    <Button variant="contained" className='me-3' style={{
                                        margin: '5px 0px', background: '#FF89601A', borderRadius: '99px',
                                        color: '#FF8960', fontWeight: '600'
                                    }}>Sales Management</Button>
                                    <Button variant="contained" className='me-3' style={{
                                        margin: '5px 0px', background: '#FF89601A', borderRadius: '99px',
                                        color: '#FF8960', fontWeight: '600'
                                    }}>Account Management</Button>
                                    <Button variant="contained" className='me-3' style={{
                                        margin: '5px 0px', background: '#FF89601A', borderRadius: '99px',
                                        color: '#FF8960', fontWeight: '600'
                                    }}>Copy writer</Button>
                                </Stack>
                            </Box>

                            <Box className="mt-4" sx={{ border: '1px dashed blue', borderRadius: '99px', padding: '15px', textAlign: 'center', color: '#756DE9', cursor: 'pointer' }}>
                                + Add Skill-set
                            </Box>

                            <Divider variant="fullWidth" className='mt-4 mb-4' />

                            <Stack direction="row" justifyContent="space-between" className='mt-3 mb-3'>
                                <h6 style={{ color: '#242222', fontSize: '16px', fontWeight: '500' }}>Tools Known</h6>
                                <Stack direction="row" alignItems="center">
                                    <EditIcon style={{ color: '#756DE9', fontSize: '15px' }} /> <h6 style={{ fontSize: '14px', color: '#756DE9' }} className='ms-1'>Edit</h6>
                                </Stack>
                            </Stack>

                            <Box className="mt-3">
                                <Stack direction="row" flexWrap="wrap">
                                    <Button variant="contained" className='me-3' style={{
                                        margin: '5px 0px', background: '#FF89601A', borderRadius: '99px',
                                        color: '#FF8960', fontWeight: '600'
                                    }}>Zoho CRM</Button>
                                    <Button variant="contained" className='me-3' style={{
                                        margin: '5px 0px', background: '#FF89601A', borderRadius: '99px',
                                        color: '#FF8960', fontWeight: '600'
                                    }}>Bitrix24</Button>
                                    <Button variant="contained" className='me-3' style={{
                                        margin: '5px 0px', background: '#FF89601A', borderRadius: '99px',
                                        color: '#FF8960', fontWeight: '600'
                                    }}>Calandly</Button>
                                </Stack>
                            </Box>

                            <Box className="mt-4" sx={{ border: '1px dashed blue', borderRadius: '99px', padding: '15px', textAlign: 'center', color: '#756DE9', cursor: 'pointer' }}>
                                + Add Skill-set
                            </Box>

                            <Divider variant="fullWidth" className='mt-4 mb-4' />


                            <Stack direction="row" justifyContent="space-between" className='mt-3 mb-3'>
                                <h6 style={{ color: '#242222', fontSize: '16px', fontWeight: '500' }}>Hobbies</h6>
                                <Stack direction="row" alignItems="center">
                                    <EditIcon style={{ color: '#756DE9', fontSize: '15px' }} /> <h6 style={{ fontSize: '14px', color: '#756DE9' }} className='ms-1'>Edit</h6>
                                </Stack>
                            </Stack>

                            <Box className="mt-3">
                                <Stack direction="row" flexWrap="wrap" alignItems="center">
                                    <Button variant="contained" className='me-3' style={{
                                        margin: '5px 0px', background: '#FF89601A', borderRadius: '99px',
                                        color: '#000000', fontWeight: '600'
                                    }}>
                                        <img src="/images/browse-jobs/banking.png" alt="" className='me-2 w-100' /> <span>Baking</span>
                                    </Button>

                                    <Button variant="contained" className='me-3' style={{
                                        margin: '5px 0px', background: '#FF89601A', borderRadius: '99px',
                                        color: '#000000', fontWeight: '600'
                                    }}>
                                        <img src="/images/browse-jobs/investments.png" alt="" className='me-2 w-100' /> <span>Investment</span>
                                    </Button>

                                    <Button variant="contained" className='me-3' style={{
                                        margin: '5px 0px', background: '#FF89601A', borderRadius: '99px',
                                        color: '#000000', fontWeight: '600'
                                    }}>
                                        <img src="/images/browse-jobs/travelling.png" alt="" className='me-2 w-100' /> <span>Travelling</span>
                                    </Button>
                                </Stack>
                            </Box>

                            <Box className="mt-4" sx={{ border: '1px dashed blue', borderRadius: '99px', padding: '15px', textAlign: 'center', color: '#756DE9', cursor: 'pointer' }}>
                                + Add Hobby
                            </Box>







                        </Grid>

                    </Grid>
                </Box>








            </section>
        </>
    )
}

export default ConfirmAll