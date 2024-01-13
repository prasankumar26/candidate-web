import React from 'react'
import Navbar from '../../components/Navbar'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import Switch from '@mui/material/Switch';
import { alpha, styled } from '@mui/system';
import Divider from '@mui/material/Divider';
import Slider from '@mui/material/Slider';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Button from '@mui/material/Button';

function valuetext(value) {
    return `${value}°C`;
}

const label = { inputProps: { 'aria-label': 'Size switch demo' } };

const Settings = () => {

    const [value, setValue] = React.useState([0, 37]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const CustomSlider = styled(Slider)(({ theme }) => ({
        '& .MuiSlider-track': {
            backgroundColor: '#756DE9', // Set the track color
        },
        '& .MuiSlider-thumb': {
            color: '#756DE9', // Set the thumb color
        },
    }));

    const CustomSwitch = styled(Switch)(({ theme }) => ({
        '& .MuiSwitch-switchBase.Mui-checked': {
            color: '#52C6AE', // Your custom color
            '&:hover': {
                backgroundColor: alpha('#52C6AE'),
            },
        },
        '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
            backgroundColor: '#52C6AE', // Your custom color
        },
    }));


    return (
        <>
            <Navbar />
            <section className='px-4 pt-4' style={{ backgroundColor: '#ffffff' }}>
                <Box sx={{ flexGrow: 1 }} className="mt-4">
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <Stack direction="row" alignItems="center">
                                <KeyboardArrowLeftIcon /> <h4 style={{ fontSize: '14px', fontWeight: '400' }} className='me-2'> Go Back </h4>
                            </Stack>
                            <h2 style={{ fontSize: '22px', fontWeight: '400' }} className='me-2 mt-3 ms-2'> Settings </h2>
                        </Grid>
                    </Grid>
                </Box>

                <Box sx={{ flexGrow: 1 }} className="mt-5">
                    <Grid container spacing={2} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Grid item xs={12} md={6}>
                            <h2 style={{ fontSize: '22px' }}>General</h2>
                            <p style={{ fontSize: '14px', color: '#1F2235' }}>Control the frequency of e-mails and SMS notifications here</p>

                            <Stack direction="row" justifyContent="space-between" className='mt-4'>
                                <h4 style={{ fontSize: '16px', color: '#263238' }}>Push Notifications</h4>
                                <CustomSwitch {...label} size="medium" />
                            </Stack>

                            <Stack direction="row" justifyContent="space-between" className='mt-2'>
                                <h4 style={{ fontSize: '16px', color: '#263238' }}>Email Notifications</h4>
                                <CustomSwitch {...label} size="medium" />
                            </Stack>

                            <Divider variant="fullWidth" className='mt-4 mb-4' />

                            <Stack direction="row" justifyContent="space-between" className='mt-2'>
                                <h4 style={{ fontSize: '16px', color: '#263238' }}>Location Preferences</h4>
                            </Stack>

                            <Stack direction="row" justifyContent="space-between" className='mt-2'>
                                <p style={{ fontSize: '14px', color: '#1F2235' }}>Maximum Distance</p>
                                <p>40kms</p>
                            </Stack>

                            <Box sx={{ width: '100%' }} className="mt-2">
                                <CustomSlider
                                    getAriaLabel={() => 'Temperature range'}
                                    value={value}
                                    onChange={handleChange}
                                    valueLabelDisplay="auto"
                                    getAriaValueText={valuetext}
                                />
                            </Box>

                            <Divider variant="fullWidth" className='mt-4 mb-4' />

                            <Stack direction="row" justifyContent="space-between" className='mt-4'>
                                <h4 style={{ fontSize: '16px', color: '#263238' }}>Report an issue</h4>
                                <KeyboardArrowRightIcon style={{ color: '#756DE9' }} />
                            </Stack>

                            <Divider variant="fullWidth" className='mt-4 mb-4' />

                            <Stack direction="row" justifyContent="space-between" className='mt-4'>
                                <Box>
                                    <h4 style={{ fontSize: '16px', color: '#263238' }}>Hide My Profile</h4>
                                    <p className='mt-4 mb-2' style={{ color: '#1F2235', fontSize: '14px' }}>
                                        Temporarily hide your profiles visibility on Cataylyst servers. Recruiters won't be able to find you when your profile is hidden.
                                    </p>
                                </Box>
                                <CustomSwitch {...label} size="medium" />
                            </Stack>

                            <Divider variant="fullWidth" className='mt-4 mb-4' />

                            <Stack direction="row" justifyContent="space-between" className='mt-3'>
                                <h4 style={{ fontSize: '16px', color: '#263238', fontWeight: '500' }}> Block Contents </h4>
                            </Stack>

                            <Stack direction="row" justifyContent="space-between" className='mt-3'>
                                <h4 style={{ fontSize: '16px', color: '#263238', fontWeight: '500' }}>Community Guidelines</h4>
                                <KeyboardArrowRightIcon style={{ color: '#756DE9' }} />
                            </Stack>

                            <Stack direction="row" justifyContent="space-between" className='mt-3'>
                                <h4 style={{ fontSize: '16px', color: '#263238', fontWeight: '500' }}>Safety Tips</h4>
                                <KeyboardArrowRightIcon style={{ color: '#756DE9' }} />
                            </Stack>

                            <Stack direction="row" justifyContent="space-between" className='mt-3'>
                                <h4 style={{ fontSize: '16px', color: '#263238', fontWeight: '500' }}>Send Feedback</h4>
                                <KeyboardArrowRightIcon style={{ color: '#756DE9' }} />
                            </Stack>

                            <Box className="my-4 text-center">
                                <Button variant="contained" className='py-3' sx={{ width: '100%', backgroundColor: '#756DE9', borderRadius: '99px' }}>Delete Account</Button>
                            </Box>

                            <Divider variant="fullWidth" className='mt-4 mb-4' />

                            <Stack direction="row" justifyContent="space-between" className='mt-3'>
                                <h4 style={{ fontSize: '22px', color: '#263238', fontWeight: '500' }}> More </h4>
                            </Stack>

                            <Stack direction="row" justifyContent="space-between" className='mt-3'>
                                <h4 style={{ fontSize: '16px', color: '#263238', fontWeight: '500' }}>About US</h4>
                                <KeyboardArrowRightIcon style={{ color: '#756DE9' }} />
                            </Stack>

                            <Stack direction="row" justifyContent="space-between" className='mt-3'>
                                <h4 style={{ fontSize: '16px', color: '#263238', fontWeight: '500' }}>Privacy policy</h4>
                                <KeyboardArrowRightIcon style={{ color: '#756DE9' }} />
                            </Stack>

                            <Stack direction="row" justifyContent="space-between" className='mt-3'>
                                <h4 style={{ fontSize: '16px', color: '#263238', fontWeight: '500' }}>Terms and conditions</h4>
                                <KeyboardArrowRightIcon style={{ color: '#756DE9' }} />
                            </Stack>

                            <Divider variant="fullWidth" className='mt-4 mb-4' />








                        </Grid>
                    </Grid>
                </Box>

            </section>
        </>
    )
}

export default Settings