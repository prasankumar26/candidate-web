import React from 'react'
import Navbar from '../../components/Navbar'
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import Applications from './Applications';
import SavedJobs from './SavedJobs';


const JobActivities = () => {
    const [value, setValue] = React.useState('1');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <>
            <Navbar />
            <section style={{ backgroundColor: '#EEEEF8' }}>
                <Stack className='pt-2' flexWrap="wrap" direction="row" alignItems="center" spacing="
                ">
                    <img src="/images/job-activities.png" style={{ width: '150px' }} alt="" className="img-fluid" />
                    <div className='ms-4'>
                        <h2 style={{ fontSize: '35px' }}>Hey Janki,</h2>
                        <p style={{ color: '#1F2235' }}>Here are the updates you don't want to miss!</p>
                    </div>
                </Stack>
            </section>

            <section style={{ backgroundColor: '#F4F4F4' }} className='px-3 pt-3'>

                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={5}>
                        <Grid item xs={12} md={8}>
                            <TabContext value={value}>
                                <Stack direction="row" justifyContent="space-between">
                                    <Box>
                                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                                            <Tab label="Application" value="1" sx={{ fontWeight: '600', color: '#000' }} />
                                            <Tab label="Saved" value="2" />
                                        </TabList>
                                    </Box>
                                    <Button variant="contained" style={{ backgroundColor: '#fff', borderRadius: '99px', color: '#756DE9', fontWeight: '600' }}>
                                        Sort By <img src="/images/swap.png" className='ms-2' alt="" />
                                    </Button>
                                </Stack>
                                <TabPanel value="1" sx={{ textTransform: 'capitalize' }}>
                                   <Applications />
                                </TabPanel>
                                <TabPanel value="2" sx={{ textTransform: 'capitalize' }}>
                                    <SavedJobs />
                                </TabPanel>
                            </TabContext>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Box className="mt-5 mx-5">
                                <p style={{ color: '#00000080', textTransform: 'uppercase' }}>Updates</p>
                                <Stack direction="row" justifyContent="space-between">
                                    <h4 className="mt-2 mb-3">
                                        Interviews Scheduled (3)
                                    </h4>
                                    <p style={{ color: '#756DE9' }}>Today</p>
                                </Stack>
                                <Box style={{ boxShadow: '0px 2px 10px 0px #2222221A', border: '1px solid #F0F0F0', borderRadius: '5px', backgroundColor: '#ffffff' }} className="p-3">
                                    <Stack direction="row" justifyContent="space-between" >
                                        <div>
                                            <h4>Paybook. com</h4>
                                            <p style={{ fontSize: '14px', color: '#9D9D9D' }}>Account Planner</p>
                                        </div>
                                        <p style={{ fontSize: '12px', color: '#232323' }}>2:00-2:30 pm</p>
                                    </Stack>

                                    <Stack direction="row" justifyContent="space-between" alignItems="center" className='mt-2'>
                                        <Button variant="contained" style={{ margin: '5px 0px', backgroundColor: '#FFF1C0', borderRadius: '99px', color: '#F9A400', fontWeight: '600' }}>Good Fit</Button>
                                        <Box>
                                            <Stack direction="row" justifyContent="space-between" alignItems="center">
                                                <p style={{ color: '#756DE9', fontSize: '16px', fontWeight: '500' }}>Job Post</p>
                                                <KeyboardArrowRightIcon style={{ color: '#756DE9' }} />
                                                <MoreVertIcon />
                                            </Stack>
                                        </Box>
                                    </Stack>
                                </Box>

                                <Box style={{ boxShadow: '0px 2px 10px 0px #2222221A', border: '1px solid #F0F0F0', borderRadius: '5px', backgroundColor: '#ffffff' }} className="p-3 mt-3">
                                    <Stack direction="row" justifyContent="space-between" >
                                        <div>
                                            <h4>HDFC</h4>
                                            <p style={{ fontSize: '14px', color: '#9D9D9D' }}>Account Planner</p>
                                        </div>
                                        <p style={{ fontSize: '12px', color: '#232323' }}>4:00-4:30 pm</p>
                                    </Stack>

                                    <Stack direction="row" justifyContent="space-between" alignItems="center" className='mt-2'>
                                        <Button variant="contained" style={{ backgroundColor: '#52C6AE33', borderRadius: '99px', color: '#52C6AE', fontWeight: '600', margin: '5px 0px' }}>Great Fit</Button>
                                        <Box>
                                            <Stack direction="row" justifyContent="space-between" alignItems="center">
                                                <p style={{ color: '#756DE9', fontSize: '16px', fontWeight: '500' }}>Job Post</p>
                                                <KeyboardArrowRightIcon style={{ color: '#756DE9' }} />
                                                <MoreVertIcon />
                                            </Stack>
                                        </Box>
                                    </Stack>
                                </Box>

                                <div className="text-center mt-3">
                                    <Button variant="contained" style={{ backgroundColor: '#756DE9', borderRadius: '99px', textTransform: 'capitalize' }}><CalendarMonthIcon className='me-2' /> View Calendar </Button>
                                </div>

                                <Box style={{ backgroundColor: '#E8E8F4', borderRadius: '5px' }} className="p-4 my-4">
                                    <Stack direction="row" justifyContent="space-between" alignItems="center">
                                        <p>PENDING</p>

                                        <Stack direction="row" alignItems="center">
                                            <p style={{ color: '#756DE9', fontSize: '16px', fontWeight: '500' }}>Let's do it</p>
                                            <KeyboardArrowRightIcon style={{ color: '#756DE9' }} />
                                        </Stack>
                                    </Stack>
                                    <h6 style={{fontSize: '16px', marginTop: '10px'}}>XYZ company has requested to apply.</h6>
                                    <p className="pt-1" style={{color: '#1F2235'}}>
                                    Checkout the job role and apply
                                    </p>
                                </Box>

                                <Stack direction="row" alignItems="center" justifyContent="space-between" className='mb-4'>
                                     <KeyboardArrowLeftIcon style={{color: '#756DE9'}} />
                                     <span style={{color: '#756DE9'}}> <b>1/3</b> </span>
                                     <KeyboardArrowRightIcon style={{color: '#756DE9'}} />
                                </Stack>

                                <Box className="mt-5 p-3 mb-5" style={{backgroundColor: '#FF8960', borderRadius: '5px', position: 'relative'}}>
                                    <h4 className='text-white' >Ask the expert's helpto increase profile view</h4>
                                    <p className='text-white mt-2' >Get your resume reviewed and get best possible career advise </p>


                                    <h3 className='mt-3 text-white'>Just in  ₹200</h3>

                                    <Button variant="contained" className='mt-5' style={{fontSize: '16px', backgroundColor: '#ffffff', borderRadius: '99px', color: '#756DE9', fontWeight: '600', margin: '5px 0px' }}>Let's Talk</Button>
                                    <img src="/images/job-act-1.png" alt="" className="img-fluid" style={{position: 'absolute', right: '-10%', bottom: 0, width: '200px'}} />

                                </Box>




                            </Box>
                        </Grid>
                    </Grid>
                </Box>


            </section>
        </>
    )
}

export default JobActivities