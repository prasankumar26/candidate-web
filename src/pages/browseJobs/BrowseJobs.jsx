import React from 'react'
import Navbar from '../../components/Navbar'
import Stack from '@mui/material/Stack';
import { CssTextField } from '../../components/CssTextfield';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
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





const BrowseJobs = () => {

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
            <section className='px-4 pt-4' style={{ backgroundColor: '#F4F4F4' }}>
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <h4 style={{ fontSize: '24px' }}>Browse Jobs</h4>
                    <CssTextField
                        id="outlined-number"
                        placeholder="Search by Keywords, skills, job role, etc"
                        variant="outlined"
                        className='mt-2'
                        style={{ width: '35%' }}
                        InputProps={{
                            style: {
                                borderRadius: '99px',
                                backgroundColor: '#f4f4fc6b',
                            },
                            endAdornment: (
                                <InputAdornment position="end">
                                    <SearchIcon />
                                </InputAdornment>
                            ),
                        }}
                    />
                </Stack>

                <Stack className="mt-4" direction="row" justifyContent="space-between" alignItems="center">
                    <Box>
                        <Button variant='contained' sx={{ textTransform: 'capitalize', width: 'fit-content', cursor: 'pointer', backgroundColor: '#756DE9' }} className='px-3 py-2 me-2 mb-2 roundedone'>
                            Account Manager </Button>
                        <Button sx={{ textTransform: 'capitalize', border: '1px dashed #756DE9', width: 'fit-content', cursor: 'pointer' }} className='px-3 py-2 me-2 mb-2 roundedone'>
                            Media Manager </Button>
                        <Button sx={{ textTransform: 'capitalize', border: '1px dashed #756DE9', width: 'fit-content', cursor: 'pointer' }} className='px-3 py-2 me-2 mb-2 roundedone'>
                            Account Planner </Button>
                    </Box>

                  <Filter />
                </Stack>


                <Box sx={{ flexGrow: 1, paddingBottom: '60px' }} className="mt-3">
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={4}>
                            <Box style={{ padding: '60px 20px', background: `linear-gradient(0deg, rgba(117, 109, 233, 0.16), rgba(117, 109, 233, 0.16)), linear-gradient(0deg, #FFFFFF, #FFFFFF)`, borderRadius: '5px', position: 'relative' }}>
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
                                    style={{ position: 'absolute', bottom: '-9%', left: '28%', width: '60px' }} />
                                <img src="/images/browse-jobs/save.png" alt="" className="img-fluid"
                                    style={{ position: 'absolute', bottom: '-9%', left: '50%', width: '60px' }} />


                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box sx={{ width: '100%', typography: 'body1' }} className="tab-mobile">
                                <TabContext value={value}>
                                    <Box sx={{}}>
                                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                                            <Tab label="Job Role" value="1" sx={{ backgroundColor: value === '1' && '#fff', borderRadius: '5px' }} />
                                            <Tab label="Job description" value="2" sx={{ backgroundColor: value === '2' && '#fff', borderRadius: '5px' }} />
                                            <Tab label="Preferences" value="3" sx={{ backgroundColor: value === '3' && '#fff', borderRadius: '5px' }} />
                                            <Tab label="Company Info" value="4" sx={{ backgroundColor: value === '4' && '#fff', borderRadius: '5px' }} />
                                        </TabList>
                                    </Box>
                                    <TabPanel value="1" style={{ backgroundColor: '#fff' }}>
                                        <Box sx={{ border: '1px solid #C4C4C44D' }} className="p-3 mb-3">
                                            <Stack direction="row" alignItems="center" className='mb-2'>
                                                <img src="/images/browse-jobs/key-skills.png" alt="" style={{ width: '25px', objectFit: 'contain' }} /> <span className='ms-3' style={{ fontSize: '12px', fontWeight: '500', color: '#756DE9' }}>Key Skills</span>
                                            </Stack>
                                            <Stack direction="row" flexWrap="wrap" >
                                                <Button variant="contained" className='mt-2 me-2 mb-2' sx={buttonStyle}>
                                                    Representative II
                                                </Button>
                                                <Button variant="contained" className='mt-2 me-2 mb-2' sx={buttonStyle}>
                                                    Representative II
                                                </Button>
                                                <Button variant="contained" className='mt-2 me-2 mb-2' sx={buttonStyle}>
                                                    Representative II
                                                </Button>
                                                <Button variant="contained" className='mt-2 me-2 mb-2' sx={buttonStyle}>
                                                    Sales Management
                                                </Button>
                                                <Button variant="contained" className='mt-2 me-2 mb-2' sx={buttonStyle}>
                                                    Corporate Sales
                                                </Button>
                                                <Button variant="contained" className='mt-2 me-2 mb-2' sx={buttonStyle}>
                                                    Sales Management
                                                </Button>
                                            </Stack>
                                        </Box>

                                        <Box sx={{ border: '1px solid #C4C4C44D' }} className="p-3 mb-3">
                                            <Stack direction="row" alignItems="center" className='mb-2'>
                                                <img src="/images/browse-jobs/tools-known.png" alt="" style={{ width: '25px', objectFit: 'contain' }} /> <span className='ms-3' style={{ fontSize: '12px', fontWeight: '500', color: '#756DE9' }}>Tools Known</span>
                                            </Stack>
                                            <Stack direction="row" flexWrap="wrap" >
                                                <Button variant="contained" className='mt-2 me-2 mb-2' sx={buttonStyle}>
                                                    Zoho CRM
                                                </Button>
                                                <Button variant="contained" className='mt-2 me-2 mb-2' sx={buttonStyle}>
                                                    Bitrix24
                                                </Button>
                                                <Button variant="contained" className='mt-2 me-2 mb-2' sx={buttonStyle}>
                                                    Calandly
                                                </Button>
                                            </Stack>
                                        </Box>
                                    </TabPanel>
                                    <TabPanel value="2" style={{ backgroundColor: '#fff' }}>
                                        <p style={{ color: '#756DE9', fontSize: '12px', fontWeight: '500' }} className='ms-4'> job description </p>

                                        <p className="mt-2" style={{ fontSize: '14px', lineHeight: '22px' }}>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standardLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standardLorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        </p>

                                        <ul style={{ listStyleType: 'none' }}>
                                            <li className='mb-4 mt-3 text-dark orange-bullet' style={{ fontSize: '14px', lineHeight: '20px' }}>
                                                Lorem Ipsum has been the industry's standardLorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            </li>
                                            <li className='mb-4 text-dark orange-bullet' style={{ fontSize: '14px', lineHeight: '20px' }}>
                                                Lorem Ipsum has been the industry's standardLorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            </li>
                                            <li className='mb-4 text-dark orange-bullet' style={{ fontSize: '14px', lineHeight: '20px' }}>
                                                Lorem Ipsum has been the industry's standardLorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            </li>
                                        </ul>
                                    </TabPanel>
                                    <TabPanel value="3" style={{ backgroundColor: '#fff' }}>
                                        <h4 style={{ fontSize: '16px', fontWeight: '500' }}>Preferred Personality</h4>
                                        <Box className="mt-3 px-4 py-4" style={{ border: '1px solid #C4C4C44D', width: 'fit-content' }}>
                                            <h6 style={{ color: '#756DE9', fontSize: '14px', fontWeight: '700', color: '#232323' }}>FIRE</h6>

                                            <ul style={{ listStyleType: 'none' }}>
                                                <li className='mb-4 mt-3 text-dark blue-bullet' style={{ fontSize: '14px', lineHeight: '5px', color: '#1F2235' }}>
                                                    Open to take risk
                                                </li>
                                                <li className='mb-4 text-dark blue-bullet' style={{ fontSize: '14px', lineHeight: '5px', color: '#1F2235' }}>
                                                    Result Oriented
                                                </li>
                                                <li className='mb-4 text-dark blue-bullet' style={{ fontSize: '14px', lineHeight: '5px', color: '#1F2235' }}>
                                                    Looking for mentorship
                                                </li>
                                                <li className='mb-4 text-dark blue-bullet' style={{ fontSize: '14px', lineHeight: '5px', color: '#1F2235' }}>
                                                    Love to have control
                                                </li>
                                                <li className='mb-4 text-dark blue-bullet' style={{ fontSize: '14px', lineHeight: '5px', color: '#1F2235' }}>
                                                    Not afraid of competition
                                                </li>
                                            </ul>
                                        </Box>

                                        <h4 style={{ fontSize: '16px', fontWeight: '500', marginTop: '20px', color: '#232323' }}>Other Preferences</h4>

                                        <Box>
                                            <Stack className='mt-3' direction="row" flexWrap="wrap" >
                                                <Stack style={{ background: '#FFFFFF87', width: '100px', borderRadius: '5px', border: '1px solid #C4C4C44D', width: '150px' }} className='p-3 me-2 mb-4'>
                                                    <img src="/images/browse-jobs/icon-four.png" alt="" style={{ width: '30px' }} />
                                                    <h6 className='mt-2' style={{ fontSize: '14px', fontWeight: '500' }}>MBA, BA</h6>
                                                </Stack>
                                                <Stack style={{ background: '#FFFFFF87', width: '100px', borderRadius: '5px', border: '1px solid #C4C4C44D', width: '150px' }} className='p-3 me-2 mb-4'>
                                                    <img src="/images/browse-jobs/chat.png" alt="" style={{ width: '30px' }} />
                                                    <h6 className='mt-2' style={{ fontSize: '14px', fontWeight: '500' }}>English, Hindi, Marathi</h6>
                                                </Stack>
                                                <Stack style={{ background: '#FFFFFF87', width: '100px', borderRadius: '5px', border: '1px solid #C4C4C44D', width: '150px' }} className='p-3 me-2 mb-4'>
                                                    <img src="/images/browse-jobs/link-round.png" alt="" style={{ width: '30px' }} />
                                                    <h6 className='mt-2' style={{ fontSize: '14px', fontWeight: '500' }}>Any</h6>
                                                </Stack>
                                            </Stack>
                                        </Box>

                                        <h4 style={{ fontSize: '16px', fontWeight: '500', marginTop: '20px', color: '#232323' }} className='mb-3'>Specific Questions</h4>
                                        <Box sx={{ border: '1px solid #C4C4C44D', padding: '10px 20px', fontWeight: '500', borderRadius: '5px' }}>
                                            <p style={{ color: '#756DE9', fontSize: '14px' }}>Tell me about your experience as an Account  <br /> Planner at your previous job?</p>
                                        </Box>
                                        <Box sx={{ border: '1px solid #C4C4C44D', padding: '10px 20px', fontWeight: '500', borderRadius: '5px' }} className="mt-3">
                                            <p style={{ color: '#756DE9', fontSize: '14px' }}>Can you meet a target of 4 clients every month?</p>
                                        </Box>


                                    </TabPanel>
                                    <TabPanel value="4" style={{ backgroundColor: '#fff' }}>
                                        <h4 style={{ fontSize: '16px', fontWeight: '500', marginTop: '20px', color: '#232323' }} className='mb-2'>Company Page</h4>

                                        <Stack direction="row" justifyContent="space-between" alignItems="center" className='mb-4'>
                                            <Stack direction="row">
                                                <p style={{ color: '#756DE9', fontSize: '14px', textDecoration: 'underline' }} className='me-5'>Company page</p>
                                                <p style={{ color: '#756DE9', fontSize: '14px', textDecoration: 'underline' }} className='me-5'>www.ogilvy.com</p>
                                            </Stack>

                                            <Box>
                                                <img src="/images/browse-jobs/linkedin.png" alt="" className='me-4' />
                                                <img src="/images/browse-jobs/twitter.png" alt="" className='me-4' />
                                                <img src="/images/browse-jobs/facebook.png" alt="" className='me-4' />
                                            </Box>
                                        </Stack>
                                        <Divider variant="fullWidth" />

                                        <img src="/images/browse-jobs/company-info.png" alt="" className='me-4 mt-4' />

                                        <Box className="mt-4">
                                            <p style={{ color: '#756DE9', fontSize: '12px', fontWeight: '500' }}> Company culture </p>
                                            <p style={{ color: '#1F2235' }}>Which company culture resembles with you the most?</p>
                                        </Box>

                                        <Box style={{ boxShadow: '0px 2px 14px 0px #2042521A', width: 'fit-content' }}>
                                            <Box className="mt-3 px-4 py-4">
                                                <h6 style={{ color: '#756DE9', fontSize: '16px', fontWeight: '700', color: '#221F60' }}>Horizontal Corporate Culture</h6>

                                                <ul style={{ listStyleType: 'none' }}>
                                                    <li className='mb-4 mt-3 text-dark blue-bullet' style={{ fontSize: '14px', color: '#1F2235', lineHeight: '10px' }}>
                                                        Teammates discuss new product ideas in the break room
                                                    </li>
                                                    <li className='mb-4 text-dark blue-bullet' style={{ fontSize: '14px', color: '#1F2235', lineHeight: '10px' }}>
                                                        Everybody does a little bit of everything
                                                    </li>
                                                    <li className='mb-4 text-dark blue-bullet' style={{ fontSize: '14px', color: '#1F2235', lineHeight: '10px' }}>
                                                        The CEO makes his or her own coffee
                                                    </li>
                                                    <li className='mb-4 text-dark blue-bullet' style={{ fontSize: '14px', color: '#1F2235', lineHeight: '10px' }}>
                                                        You still have to prove your product's worth to critics
                                                    </li>
                                                </ul>
                                            </Box>
                                        </Box>

                                        <Divider variant="fullWidth" />

                                        <Box className="mt-4">
                                            <p style={{ color: '#756DE9', fontSize: '12px', fontWeight: '500' }}> Values and Mission </p>
                                            <p style={{ color: '#1F2235' }}>A brief about company aspirations</p>
                                            <p className="mt-4" style={{ fontSize: '14px', lineHeight: '23px' }}>
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                            </p>

                                            <Stack direction="row" flexWrap="wrap">
                                                <Stack direction="row" alignItems="center" className='mt-4 p-3 me-5' sx={{ borderRadius: '5px', boxShadow: '0px 2px 14px 0px #2042521A', width: 'fit-content' }}>
                                                    <img src="/images/browse-jobs/pdf-1.png" alt="" className='me-2' />
                                                    <p style={{ fontSize: '14px' }}>Mission Vision - Ogilvy</p>
                                                </Stack>
                                                <Stack direction="row" alignItems="center" className='mt-4 p-3' sx={{ borderRadius: '5px', boxShadow: '0px 2px 14px 0px #2042521A', width: 'fit-content' }}>
                                                    <img src="/images/browse-jobs/pdf-1.png" alt="" className='me-2' />
                                                    <p style={{ fontSize: '14px' }}>Mission Vision - Ogilvy</p>
                                                </Stack>
                                            </Stack>
                                        </Box>


                                    </TabPanel>
                                </TabContext>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={2}>
                        </Grid>
                    </Grid>
                </Box>


             


            </section>
        </>
    )
}

export default BrowseJobs