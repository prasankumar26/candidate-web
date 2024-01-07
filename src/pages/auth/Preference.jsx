import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useState } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import React from "react";
import Switch from '@mui/material/Switch';
import TopHeading from '../../components/TopHeading';
import ProgressBar from '../../components/ProgressBar';
import NormalHeading from '../../components/NormalHeading';
import { CssTextField } from '../../components/CssTextfield';
import SearchTextBox from '../../components/SearchTextBox';
import ButtonBlue from '../../components/ButtonBlue';
import MobileNav from '../../components/MobileNav';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

const Preference = () => {
    const navigate = useNavigate()
    const [file, setFile] = useState(null);
    const handleChange = (file) => {
        setFile(file);
    };

    return (
        <section className='position-relative' style={{ height: '106vh' }}>
            <div maxWidth="xl">
                <div className='pt-0' maxWidth="lg" sx={{ position: 'relative', zIndex: '99' }}>
                    <Grid container>
                        <Grid className='mob-none' item xs={12} md={4} style={{ backgroundColor: '#FF8960', height: '106vh', position: 'relative' }}>
                            <img src="/images/ellipse-two.png" alt="" className="img-fluid" style={{ position: 'absolute', bottom: '0', width: '70%' }} />
                            <img src="/images/opportunities.png" alt="" className="img-fluid" style={{ position: 'absolute', bottom: '0', left: '1%', width: '50%' }} />
                            <div className="mt-4">
                               <TopHeading textstart />
                                <h2 className='text-white ms-3 mt-5 pt-5 position-relative px-5' style={{ zIndex: '999' }}>
                                    Tell us your Preferences
                                </h2>
                            </div>
                        </Grid>

                         <MobileNav  />

                        <Grid item xs={12} md={8} className='pt-lg-5 px-lg-s-des'>
                            <ProgressBar para1="Tell us your Preferences" />
                            <Box className="mt-3">
                                <Grid container spacing={2}>
                                    <Grid item xs={12} md={6}>
                                        <NormalHeading title="Work Experience" />
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
                                    <NormalHeading title="Salary" />
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
                            <NormalHeading title="Industry" />
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
                            <NormalHeading title="Job Type" />
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
                            <NormalHeading title="Preferred City" />
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
                                <NormalHeading title="Functional Area" />
                                </Stack>
                                <SearchTextBox />
                            </Box>

                            <Box className="mt-3">
                            <NormalHeading title="Type of the job" />
                                <Button sx={{ border: '1px dashed #756DE9', width: 'fit-content', cursor: 'pointer', textTransform: 'capitalize' }} className='px-3 py-2 me-2 roundedone'>
                                    Full Time </Button>
                                <Button sx={{ border: '1px dashed #756DE9', width: 'fit-content', cursor: 'pointer', textTransform: 'capitalize' }} className='px-3 py-2 me-2 roundedone'>
                                    Part Time </Button>
                                <Button sx={{ border: '1px dashed #756DE9', width: 'fit-content', cursor: 'pointer', textTransform: 'capitalize' }} className='px-3 py-2 me-2 roundedone'>
                                    Internship </Button>
                            </Box>

                            <Box className="mt-3 mb-3">
                                <Switch {...label} /> <span>Remote Work</span>
                            </Box>

                            <Box className="mt-3">
                            <NormalHeading title="Company Size" />
                                <Button sx={{ border: '1px dashed #756DE9', width: 'fit-content', cursor: 'pointer', textTransform: 'capitalize' }} className='px-3 py-2 me-2 mb-2 roundedone'>
                                    {`< 25 Employees`} </Button>
                                <Button sx={{ border: '1px dashed #756DE9', width: 'fit-content', cursor: 'pointer', textTransform: 'capitalize' }} className='px-3 py-2 me-2 mb-2 roundedone'>
                                    {`< 25 Employees`} </Button>
                                <Button sx={{ border: '1px dashed #756DE9', width: 'fit-content', cursor: 'pointer', textTransform: 'capitalize' }} className='px-3 py-2 me-2 mb-2 roundedone'>
                                    {`< 50 Employees`} </Button>
                                <Button sx={{ border: '1px dashed #756DE9', width: 'fit-content', cursor: 'pointer', textTransform: 'capitalize' }} className='px-3 py-2 me-2 mb-2 roundedone'>
                                    {`< 50 Employees`} </Button>
                            </Box>

                            <Box className="mt-5">
                            <NormalHeading title="Company Culture" />
                                <Grid container spacing={2}>
                                    <Grid item xs={12} md={6}>
                                        <Box sx={{fontFamily: 'sans-serif', border: '1px dashed #756DE9', width: 'fit-content', cursor: 'pointer' }} className='px-3 py-4 me-2 roundedten' le>
                                            <p className='mb-3' style={{ color: '#756DE9' }}> Horizontal Corporate Culture </p>
                                            <p className='mb-2'>Teammates discuss new product ideas in the break room</p>
                                            <p className='mb-2'> Everybody does a little bit of everything</p>
                                            <p className='mb-2'>The CEO makes his or her own coffee</p>
                                            <p className='mb-2'> You still have to prove your product's worth to critics</p>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <Box sx={{fontFamily: 'sans-serif', border: '1px dashed #756DE9', width: 'fit-content', cursor: 'pointer' }} className='px-3 py-4 me-2 roundedten' le>
                                            <p className='mb-3' style={{ color: '#756DE9' }}> Horizontal Corporate Culture </p>
                                            <p className='mb-2'>Teammates discuss new product ideas in the break room</p>
                                            <p className='mb-2'> Everybody does a little bit of everything</p>
                                            <p className='mb-2'>The CEO makes his or her own coffee</p>
                                            <p className='mb-2'> You still have to prove your product's worth to critics</p>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <Box sx={{fontFamily: 'sans-serif', border: '1px dashed #756DE9', width: 'fit-content', cursor: 'pointer' }} className='px-3 py-4 me-2 roundedten' le>
                                            <p className='mb-3' style={{ color: '#756DE9' }}> Horizontal Corporate Culture </p>
                                            <p className='mb-2'>Teammates discuss new product ideas in the break room</p>
                                            <p className='mb-2'> Everybody does a little bit of everything</p>
                                            <p className='mb-2'>The CEO makes his or her own coffee</p>
                                            <p className='mb-2'> You still have to prove your product's worth to critics</p>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <Box sx={{fontFamily: 'sans-serif', border: '1px dashed #756DE9', width: 'fit-content', cursor: 'pointer' }} className='px-3 py-4 me-2 roundedten' le>
                                            <p className='mb-3' style={{ color: '#756DE9' }}> Horizontal Corporate Culture </p>
                                            <p className='mb-2'>Teammates discuss new product ideas in the break room</p>
                                            <p className='mb-2'> Everybody does a little bit of everything</p>
                                            <p className='mb-2'>The CEO makes his or her own coffee</p>
                                            <p className='mb-2'> You still have to prove your product's worth to critics</p>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>

                            <ButtonBlue title="Next Up Video CV " link="/video-questions" />

                        </Grid>
                    </Grid>
                </div>
            </div>
        </section>
    )
}

export default Preference