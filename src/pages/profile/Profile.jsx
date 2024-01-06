import Grid from '@mui/material/Grid';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { useState } from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import Paper from '@mui/material/Paper';

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
        <section className='position-relative' style={{ height: '106vh' }}>
            <div maxWidth="xl">
                <div className='pt-0' maxWidth="lg" sx={{ position: 'relative', zIndex: '99' }}>
                    <Grid container spacing={5}>
                        <Grid item xs={12} md={4} style={{ backgroundColor: '#ffffff', height: '106vh', position: 'relative' }}>
                            <img src="/images/opportunities.png" alt="" className="img-fluid" style={{ position: 'absolute', bottom: '0', left: '1%', width: '50%' }} />
                            <div className="mt-4">
                                <p className="text-start ms-3 text-dark" style={{ fontSize: '18px', padding: '20px 0px', fontWeight: '600' }}>CATALYST</p>

                                <Box className="mt-5">
                                    {paragraphs.map((text, index) => (
                                        <Paper key={index} elevation={3} style={{ padding: '15px' }}>
                                            <p className="text-dark ms-3 position-relative px-5 mb-4">{text}</p>
                                        </Paper>
                                    ))}
                                </Box>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={8} className='pt-5 pe-4 px-5' style={{ backgroundColor: '#756DE9', height: '106vh' }}>
                            <Box className="mt-5">


                            </Box>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </section>
    )
}

export default Profile