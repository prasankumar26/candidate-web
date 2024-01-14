import React from 'react'
import Navbar from '../../components/Navbar'
import Box from '@mui/material/Box';
import EditIcon from '@mui/icons-material/Edit';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { FileUploader } from "react-drag-drop-files";
import { borderRadius, styled } from '@mui/system';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { CssTextField } from '../../components/CssTextfield';

const fileTypes = ["JPG", "PNG", "GIF"];

const CatalystProfile = () => {

    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const CustomTab = styled(Tab)(({ theme }) => ({
        '&.Mui-selected': {
            color: '#000000', // Color for the active tab
            fontWeight: '600',
        },
        fontSize: '24px',
        textTransform: 'capitalize',
    }));

    return (
        <>
            <Navbar />

            <section style={{ backgroundColor: '#F4F4F4' }}>
                <Box sx={{ backgroundColor: '#756DE9' }} className="py-4 px-4">
                    <Stack direction="row" flexWrap="wrap" justifyContent="space-between">
                        <Stack direction="row" alignItems="center">
                            <div className="avatar-upload me-4">
                                <div className="avatar-edit">
                                    <input type='file' id="imageUpload" accept=".png, .jpg, .jpeg" />
                                    <label htmlFor="imageUpload">
                                        <EditIcon style={{ fontSize: 20, color: '#827BEA' }} />
                                    </label>
                                </div>
                                <div className="avatar-preview">
                                    <div id="imagePreview" style={{ backgroundImage: 'url(/images/profile-cover.png)' }}>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h4 className='text-white mb-1 cp-heading'>Janki Sharma</h4>
                                <p style={{ color: '#F4F4F4', fontSize: '14px' }}>Aspiring Account Manager</p>
                            </div>
                        </Stack>

                        <Stack direction="row" className='mt-3 mb-1'>
                            <img src="/images/web.png" alt="" className='ms-4' style={{ objectFit: 'contain' }} />
                            <img src="/images/instagram.png" alt="" className='ms-4' style={{ objectFit: 'contain' }} />
                            <img src="/images/link.png" alt="" className='ms-4' style={{ objectFit: 'contain' }} />
                            <img src="/images/vertical-lines.png" alt="" className='ms-4' style={{ objectFit: 'contain' }} />
                        </Stack>
                    </Stack>
                </Box>

                <Box sx={{ width: '100%' }} className='px-lg-4 mt-4'>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={12} lg={12}>

                            <Box sx={{ width: '100%', typography: 'body1' }}>
                                <TabContext value={value}>
                                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }} >
                                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                                            <CustomTab label="About Me" value="1" className='cp-btn' />
                                            <CustomTab label="My Video CV" value="2" className='cp-btn' />
                                        </TabList>
                                    </Box>
                                    <TabPanel value="1">

                                        <Box sx={{ flexGrow: 1 }}>
                                            <Grid container spacing={2}>
                                                <Grid item xs={12} md={8}>
                                                    <Stack className="drop_area_box mt-4" direction="row" justifyContent="center">
                                                        <FileUploader className="drop_area drop_zone" handleChange={handleChange} name="file" types={fileTypes} style={{ width: '100% !important' }} >
                                                            <div className='text-center'><p style={{ color: '#756DE9', fontWeight: '600' }}>+Add Work Links</p>
                                                                <p style={{ color: '#B8B8B8', fontWeight: '400' }}> Links of postfolio, Work profiles, websites etc</p></div>
                                                        </FileUploader>
                                                    </Stack>

                                                    <Box style={{ borderRadius: '5px', backgroundColor: '#ffffff', boxShadow: '0px 1px 6px 0px #003A5D1A' }} className="pb-1 mt-4">
                                                    <Stack>
                                                            <h3 className='ms-4 pt-3'>Personality Type</h3>
                                                        </Stack>
                                                        <Stack className='m-4 p-3' direction={{ xs: 'column', sm: 'row' }} alignItems="center" justifyContent="space-between" style={{ boxShadow: '0px 2px 10px 0px #2222221A' }}>
                                                            <Box> 
                                                                <h3>THE DRIVER</h3>
                                                                <p>When faced with a challenge, drivers say, “Bring it on!” Your eye is always on the prize at work, and you like to use logic and data to tackle problems because if there’s anything you love more than playing the game, it's winning.</p>
                                                            </Box>

                                                            <Box className="ms-5 cp-img">
                                                                <Stack direction="row" alignItems="center" flexWrap="wrap"  >
                                                                    <EditIcon className='me-1' style={{ color: '#756DE9', fontSize: '18px' }} />
                                                                    <p style={{ color: '#756DE9', fontSize: '16px', fontWeight: '600' }}>TEST RETAKE</p>
                                                                </Stack>
                                                                <img style={{ width: '100px' }} src="/images/catalyst-profile/catalyst-men.png" alt="" className="img-fluid" />
                                                            </Box>
                                                        </Stack>

                                                        <h4 style={{ fontSize: '16px', color: '#222222' }} className='my-3 ms-4'>Personality Match</h4>

                                                        <Box style={{ background: '#D7D5F966' }} className="mx-cat-5 mb-2 p-4">
                                                            <h6 className='mb-2' style={{ color: '#756DE9', fontSize: '14px', fontWeight: 700 }}>COOL</h6>

                                                            <ul>
                                                                <Stack direction="row">
                                                                    <li style={{ fontSize: '12px' }}>Open to take risk</li>
                                                                    <li className='ms-5' style={{ fontSize: '12px' }}>Love to have control</li>
                                                                </Stack>
                                                                <Stack direction="row">
                                                                    <li style={{ fontSize: '12px' }}>Result Oriented</li>
                                                                    <li className='ms-5' style={{ fontSize: '12px' }}>Not afraid of competition</li>
                                                                </Stack>
                                                                <li style={{ fontSize: '12px' }}>Looking for mentorship</li>
                                                            </ul>
                                                        </Box>
                                                    </Box>

                                                    <Box className="p-3 mt-3" style={{ boxShadow: '0px 1px 6px 0px #003A5D1A', backgroundColor: '#ffffff', borderRadius: '5px' }}>

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
                                                                    <img src="/images/browse-jobs/travelling.png" alt="" className='me-2 w-100' /> <span>Travelling</span>
                                                                </Button>

                                                                <Button variant="contained" className='me-3' style={{
                                                                    margin: '5px 0px', background: '#FF89601A', borderRadius: '99px',
                                                                    color: '#000000', fontWeight: '600'
                                                                }}>
                                                                    <img src="/images/browse-jobs/investments.png" alt="" className='me-2 w-100' /> <span>Investment</span>
                                                                </Button>

                                                            </Stack>
                                                        </Box>

                                                        <Box className="mt-4" sx={{ border: '1px dashed blue', borderRadius: '99px', padding: '15px', textAlign: 'center', color: '#756DE9', cursor: 'pointer' }}>
                                                            + Add Hobby
                                                        </Box>
                                                    </Box>





                                                    <Box className="p-3 mt-3" style={{ boxShadow: '0px 1px 6px 0px #003A5D1A', backgroundColor: '#ffffff', borderRadius: '5px' }}>
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
                                                    </Box>

                                                    <Box className="p-3 mt-3" style={{ boxShadow: '0px 1px 6px 0px #003A5D1A', backgroundColor: '#ffffff', borderRadius: '5px' }}>
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

                                                            <Box className="mt-4" sx={{ border: '1px dashed blue', borderRadius: '99px', padding: '15px', textAlign: 'center', color: '#756DE9', cursor: 'pointer' }}>
                                                                + Add Certificate
                                                            </Box>
                                                        </Box>
                                                    </Box>

                                                    <Box className="p-3 mt-3" style={{ boxShadow: '0px 1px 6px 0px #003A5D1A', backgroundColor: '#ffffff', borderRadius: '5px' }}>
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
                                                    </Box>


                                                    <Box className="p-3 mt-3" style={{ boxShadow: '0px 1px 6px 0px #003A5D1A', backgroundColor: '#ffffff', borderRadius: '5px' }}>
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

                                                    </Box>



                                                    <Box className="p-3 mt-3" style={{ boxShadow: '0px 1px 6px 0px #003A5D1A', backgroundColor: '#ffffff', borderRadius: '5px' }}>
                                                        <h2>Preferences</h2>

                                                        <Box className="mt-2">
                                                            <Stack direction="row" flexWrap="wrap" alignItems="center" justifyContent="space-between">

                                                                <Box>
                                                                    <p style={{ color: '#000000', fontSize: '14px', fontWeight: 600 }} className='mb-2 mt-3'>Work Experience</p>
                                                                    <CssTextField
                                                                        id="outlined-number"
                                                                        type='number'
                                                                        placeholder="Range"
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

                                                                <Box>
                                                                    <p style={{ color: '#000000', fontSize: '14px', fontWeight: 600 }} className='mb-2 mt-3'>Salary</p>
                                                                    <CssTextField
                                                                        id="outlined-number"
                                                                        type='number'
                                                                        placeholder="Range"
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

                                                                <Box>
                                                                    <p style={{ color: '#000000', fontSize: '14px', fontWeight: 600 }} className='mb-2 mt-3'>Locations</p>
                                                                    <CssTextField
                                                                        id="outlined-number"
                                                                        type='number'
                                                                        placeholder="Location"
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
                                                            </Stack>
                                                        </Box>




                                                        <Box className="mt-5">
                                                            <h4 className='mb-3'>Company Culture</h4>
                                                            <Grid container spacing={2}>
                                                                <Grid item xs={12} md={6}>
                                                                    <Box sx={{ fontFamily: 'sans-serif', border: '1px dashed #756DE9', width: 'fit-content', cursor: 'pointer' }} className='px-3 py-4 me-2 roundedten' le>
                                                                        <p className='mb-3' style={{ color: '#756DE9' }}> Horizontal Corporate Culture </p>
                                                                        <p className='mb-2'>Teammates discuss new product ideas in the break room</p>
                                                                        <p className='mb-2'> Everybody does a little bit of everything</p>
                                                                        <p className='mb-2'>The CEO makes his or her own coffee</p>
                                                                        <p className='mb-2'> You still have to prove your product's worth to critics</p>
                                                                    </Box>
                                                                </Grid>
                                                                <Grid item xs={12} md={6}>
                                                                    <Box sx={{ fontFamily: 'sans-serif', border: '1px dashed #756DE9', width: 'fit-content', cursor: 'pointer' }} className='px-3 py-4 me-2 roundedten' le>
                                                                        <p className='mb-3' style={{ color: '#756DE9' }}> Horizontal Corporate Culture </p>
                                                                        <p className='mb-2'>Teammates discuss new product ideas in the break room</p>
                                                                        <p className='mb-2'> Everybody does a little bit of everything</p>
                                                                        <p className='mb-2'>The CEO makes his or her own coffee</p>
                                                                        <p className='mb-2'> You still have to prove your product's worth to critics</p>
                                                                    </Box>
                                                                </Grid>
                                                                <Grid item xs={12} md={6}>
                                                                    <Box sx={{ fontFamily: 'sans-serif', border: '1px dashed #756DE9', width: 'fit-content', cursor: 'pointer' }} className='px-3 py-4 me-2 roundedten' le>
                                                                        <p className='mb-3' style={{ color: '#756DE9' }}> Horizontal Corporate Culture </p>
                                                                        <p className='mb-2'>Teammates discuss new product ideas in the break room</p>
                                                                        <p className='mb-2'> Everybody does a little bit of everything</p>
                                                                        <p className='mb-2'>The CEO makes his or her own coffee</p>
                                                                        <p className='mb-2'> You still have to prove your product's worth to critics</p>
                                                                    </Box>
                                                                </Grid>
                                                                <Grid item xs={12} md={6}>
                                                                    <Box sx={{ fontFamily: 'sans-serif', border: '1px dashed #756DE9', width: 'fit-content', cursor: 'pointer' }} className='px-3 py-4 me-2 roundedten' le>
                                                                        <p className='mb-3' style={{ color: '#756DE9' }}> Horizontal Corporate Culture </p>
                                                                        <p className='mb-2'>Teammates discuss new product ideas in the break room</p>
                                                                        <p className='mb-2'> Everybody does a little bit of everything</p>
                                                                        <p className='mb-2'>The CEO makes his or her own coffee</p>
                                                                        <p className='mb-2'> You still have to prove your product's worth to critics</p>
                                                                    </Box>
                                                                </Grid>
                                                            </Grid>
                                                        </Box>

                                                        <Box className="mt-3">
                                                            <h4 className='mb-3'>Company Size</h4>
                                                            <Box>
                                                                <Button sx={{ border: '1px dashed #756DE9', width: 'fit-content', cursor: 'pointer', textTransform: 'capitalize' }} className='px-3 py-2 me-2 mb-2 roundedone'>
                                                                    {`< 25 Employees`} </Button>
                                                                <Button sx={{ border: '1px dashed #756DE9', width: 'fit-content', cursor: 'pointer', textTransform: 'capitalize' }} className='px-3 py-2 me-2 mb-2 roundedone'>
                                                                    {`< 25 Employees`} </Button>
                                                            </Box>
                                                            <Box>
                                                                <Button sx={{ border: '1px dashed #756DE9', width: 'fit-content', cursor: 'pointer', textTransform: 'capitalize' }} className='px-3 py-2 me-2 mb-2 roundedone'>
                                                                    {`< 50 Employees`} </Button>
                                                                <Button sx={{ border: '1px dashed #756DE9', width: 'fit-content', cursor: 'pointer', textTransform: 'capitalize' }} className='px-3 py-2 me-2 mb-2 roundedone'>
                                                                    {`< 50 Employees`} </Button>
                                                            </Box>
                                                        </Box>
                                                    </Box>
                                                </Grid>

                                                <Grid item xs={12} md={4}>

                                                    <Box className="mt-5 mx-cat-5">
                                                        <p style={{ color: '#00000080', textTransform: 'uppercase' }}>Updates</p>
                                                        <Stack direction="row" justifyContent="space-between">
                                                            <h4 className="mt-2 mb-3">
                                                                Application Status
                                                            </h4>
                                                        </Stack>

                                                        <Box className="mt-3 p-3 mb-3" style={{ backgroundColor: '#FF8960', borderRadius: '5px' }}>
                                                            <h4 className='text-white' >120 Great Fit opportunities are waiting for you!</h4>
                                                            <p className='text-white mt-2 mb-2'>Your profile is on hold! Add Video CV to complete your profile for the recruiters to view it. </p>

                                                            <img src="/images/catalyst-profile/company-logos.png" alt="" />

                                                            <p>
                                                                <a href="#" className='text-white'>10 Great fits of the day</a>
                                                            </p>

                                                            <Button variant="contained" className='mt-5' style={{ textTransform: 'capitalize', fontSize: '16px', backgroundColor: '#756DE9', borderRadius: '99px', color: '#ffffff', fontWeight: '600', margin: '5px 0px' }}>+ Create Video CV</Button>
                                                        </Box>


                                                        <Stack direction="row" justifyContent="space-between">
                                                            <h4 className="mt-2">
                                                                Pending
                                                            </h4>
                                                        </Stack>

                                                        <Box style={{ backgroundColor: '#E8E8F4', borderRadius: '5px' }} className="p-4 mt-4 mb-2">
                                                            <Stack direction="row" justifyContent="space-between" alignItems="center">
                                                                <p>PENDING</p>

                                                                <Stack direction="row" alignItems="center">
                                                                    <p style={{ color: '#756DE9', fontSize: '16px', fontWeight: '500' }}>Let's do it</p>
                                                                    <KeyboardArrowRightIcon style={{ color: '#756DE9' }} />
                                                                </Stack>
                                                            </Stack>
                                                            <h6 style={{ fontSize: '16px', marginTop: '10px' }}>XYZ company has requested to apply.</h6>
                                                            <p className="pt-1" style={{ color: '#1F2235' }}>
                                                                Checkout the job role and apply
                                                            </p>

                                                            <Stack direction="row" alignItems="center" className='mt-2'>
                                                                <KeyboardArrowLeftIcon style={{ color: '#756DE9' }} />
                                                                <span style={{ color: '#756DE9' }} className='mx-4'> <b>1/3</b> </span>
                                                                <KeyboardArrowRightIcon style={{ color: '#756DE9' }} />
                                                            </Stack>
                                                        </Box>


                                                        <Box className="mt-3 p-3 mb-5" style={{ backgroundColor: '#FF8960', borderRadius: '5px', position: 'relative' }}>
                                                            <h4 className='text-white' >Ask the expert's helpto increase profile view</h4>
                                                            <p className='text-white mt-2' >Get your resume reviewed and get best possible career advise </p>
                                                            <h3 className='mt-3 text-white'>Just in  ₹200</h3>

                                                            <Button variant="contained" className='mt-5' style={{ fontSize: '16px', backgroundColor: '#ffffff', borderRadius: '99px', color: '#756DE9', fontWeight: '600', margin: '5px 0px' }}>Let's Talk</Button>
                                                            <img src="/images/job-act-1.png" alt="" className="img-fluid" style={{ position: 'absolute', right: '-10%', bottom: 0, width: '200px' }} />
                                                        </Box>
                                                    </Box>
                                                </Grid>
                                            </Grid>
                                        </Box>
                                    </TabPanel>

                                    <TabPanel value="2">
                                        <p style={{ fontSize: '16px' }}>Customise your Resume by making Job <br /> role centric Catalyst Video CV </p>

                                        <Box className="mt-3">
                                            <Box>
                                                <Button sx={{ fontSize: '21px', border: '1px dashed #756DE9', width: 'fit-content', cursor: 'pointer', textTransform: 'capitalize' }} className='px-3 py-2 me-2 mb-2 roundedone'>
                                                    + Create Video CV </Button>
                                            </Box>
                                        </Box>

                                        <Box sx={{ flexGrow: 1 }} className="mt-3">
                                            <Grid container spacing={2}>
                                                <Grid item xs={12} md={3} className="mb-2">
                                                    <Box style={{ backgroundColor: '#EDEDED', borderRadius: '5px', height: '100%' }} className="p-4">
                                                        <img style={{height: '150px', objectFit: 'contain'}} src="/images/catalyst-profile/video-cv-one.png" alt="" className="img-fluid" />
                                                        <h4 className='text-center my-4'>
                                                            Capture your story in your own unique way
                                                        </h4>
                                                        <p className='text-center'>This is the platform that lets you highlight your are much more than just a piece of resume paper.  </p>
                                                    </Box>
                                                </Grid>
                                                <Grid item xs={12} md={3} className="mb-2">
                                                    <Box style={{ backgroundColor: '#EDEDED', borderRadius: '5px', height: '100%' }} className="p-4">
                                                        <img style={{height: '150px', objectFit: 'contain'}} src="/images/catalyst-profile/video-cv-two.png" alt="" className="img-fluid" />
                                                        <h4 className='text-center my-4'>
                                                            Capture your story in your own unique way
                                                        </h4>
                                                        <p className='text-center'>This is the platform that lets you highlight your are much more than just a piece of resume paper.  </p>
                                                    </Box>
                                                </Grid>
                                                <Grid item xs={12} md={3} className="mb-2">
                                                    <Box style={{ backgroundColor: '#EDEDED', borderRadius: '5px', height: '100%' }} className="p-4">
                                                        <img style={{height: '150px', objectFit: 'contain'}} src="/images/catalyst-profile/video-cv-three.png" alt="" className="img-fluid" />
                                                        <h4 className='text-center my-4'>
                                                            Capture your story in your own unique way
                                                        </h4>
                                                        <p className='text-center'>This is the platform that lets you highlight your are much more than just a piece of resume paper.  </p>
                                                    </Box>
                                                </Grid>
                                                <Grid item xs={12} md={3} className="mb-2">
                                                    <Box className="mt-3 p-3 mb-3" style={{ backgroundColor: '#FF8960', borderRadius: '5px' }}>
                                                        <h4 className='text-white' >120 Great Fit opportunities are waiting for you!</h4>
                                                        <p className='text-white mt-2 mb-4'>Your profile is on hold! Add Video CV to complete your profile for the recruiters to view it. </p>

                                                        <img src="/images/catalyst-profile/company-logos.png" alt="" />

                                                        <p>
                                                            <a href="#" className='text-white'>10 Great fits of the day</a>
                                                        </p>

                                                        <Button variant="contained" className='mt-5' style={{ textTransform: 'capitalize', fontSize: '16px', backgroundColor: '#756DE9', borderRadius: '99px', color: '#ffffff', fontWeight: '600', margin: '5px 0px' }}>+ Create Video CV</Button>
                                                    </Box>
                                                </Grid>
                                            </Grid>
                                        </Box>

                                        <br />
                                        <br />

                                    </TabPanel>
                                </TabContext>
                            </Box>

                        </Grid>
                    </Grid>
                </Box>


            </section>

        </>
    )
}

export default CatalystProfile