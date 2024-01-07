import Grid from '@mui/material/Grid';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Container from '@mui/material/Container';
import TabsList from '../../components/TabsList';
import MobileNav from '../../components/MobileNav';
import MobileNina from '../../components/MobileNina';


const Profile = () => {
    const [selectedValue, setSelectedValue] = useState('a');
    const navigate = useNavigate()

    const paragraphs = [
        "Hurray! You've done it. Your first Catalyst profile is done!",
        'Before we go ahead, take a look at this card.',
        'This card functions as a mini preview for your profile, this will be visible to the hiring companies when searching for potential candidates.',
    ];

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };
    const controlProps = (item) => ({
        checked: selectedValue === item,
        onChange: handleChange,
        value: item,
        name: 'color-radio-button-demo',
        inputProps: { 'aria-label': item },
    });

    return (
        <section className='position-relative' style={{ height: '106vh', backgroundColor: '#F6F6F6' }}>
            <div className='pt-0' maxWidth="lg" sx={{ position: 'relative', zIndex: '99' }}>
                <Grid container spacing={5}>
                    <Grid className='mob-none' item xs={12} md={4} style={{ backgroundColor: '#F6F6F6', height: '106vh', position: 'relative' }}>
                        <img src="/images/opportunities.png" alt="" className="img-fluid" style={{ position: 'absolute', bottom: '0', left: '1%', width: '50%' }} />
                        <img src="/images/vector-one.png" alt="" className="img-fluid mob-none" style={{ position: 'absolute', bottom: '30%', left: '35%', width: 'fit-content' }} />
                        <div className="mt-4">
                            <p className="text-start ms-3 text-dark" style={{ fontSize: '18px', padding: '20px 0px', fontWeight: '600' }}>CATALYST</p>
                            <Box className="mt-3">
                                {paragraphs.map((text, index) => (
                                    <div key={index} >
                                        <p className="text-dark ms-3 position-relative px-3 mx-2 mb-2" style={{
                                            padding: '15px', width: 'fit-content',
                                            backgroundColor: '#FFFFFF', borderRadius: '99px',
                                            fontWeight: '500', fontSize: '16px', color: '#1F2235',
                                        }}>{text}</p>
                                    </div>
                                ))}
                            </Box>
                        </div>
                    </Grid>

                    <MobileNav />

                    <Grid item xs={12} md={8} className='pt-lg-5 pe-0'>
                        <Box className="mt-lg-5">
                            <div className="px-lg-s-des profile-nina-res">
                            <MobileNina sPara="Do you have any skills or hobbies?" />
                            </div>
                            <Stack direction="row" className='profile-center' alignItems="center">
                                <Stack direction="row" alignItems="center" className='me-4'>
                                    <span className='text-bold' style={{ fontSize: '12px' }}>1/3 PROFILE</span> <CheckCircleIcon className='ms-2' style={{ color: '#52C6AE' }} />
                                </Stack>
                                <Stack direction="row" alignItems="center">
                                    <span className='text-bold' style={{ fontSize: '12px' }}> 2/3 VIDEO CV </span> <CheckCircleIcon className='ms-2' style={{ color: '#52C6AE' }} />
                                </Stack>
                            </Stack>
                        </Box>

                        <TabsList />
                    </Grid>
                </Grid>
            </div>
        </section>
    )
}

export default Profile