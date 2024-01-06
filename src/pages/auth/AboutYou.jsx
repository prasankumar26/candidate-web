import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { useState } from 'react';
import Radio from '@mui/material/Radio';
import ProgressBar from '../../components/ProgressBar';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import ButtonBlue from '../../components/ButtonBlue';
import TopHeading from '../../components/TopHeading';



const CreateProfile = () => {
    const [selectedValue, setSelectedValue] = useState('a');

    const handleChange = (event) => {
      setSelectedValue(event.target.value);
    };
    return (
        <section className='position-relative' style={{ height: '100vh' }}>
            <img src="/images/ellipse.png" alt="" className="img-fluid" style={{ position: 'absolute', bottom: '0', width: '300px' }} />
            <img src="/images/opportunities.png" alt="" className="img-fluid" style={{ position: 'absolute', bottom: '0', left: '1%', width: '220px' }} />
            <img src="/images/vector-one.png" alt="" className="img-fluid" style={{ position: 'absolute', bottom: '30%', left: '15%', width: 'fit-content' }} />
            <TopHeading textstart color />

            <Container className='mt-2' maxWidth="lg" sx={{ position: 'relative', zIndex: '99' }}>
                <Grid container spacing={5}>
                    <Grid item xs={12} md={4}>
                        <div className="mt-5">
                            <p className='mb-2 mt-5' style={{ color: '#030303', fontSize: '20px' }}> <b>1/5</b> </p>
                            <p className='mb-2' style={{ color: '#030303', fontSize: '20px', fontWeight: '600', fontFamily: 'Poppins', }}> So here's a thought. Say your team is kicking off a huge project at work.</p>
                            <p style={{ color: '#030303', fontSize: '20px', fontWeight: '600', fontFamily: 'Poppins', }} className='mt-4'> What's your plan of attack? </p>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <ProgressBar marginRight />

                        <Stack direction="column" justifyContent="center" alignItems="center" className='mt-5'>
                            <Box style={{ background: selectedValue === 'a' ? 'rgb(117 109 233 / 29%)' : '#F5F6FA', width: 'fit-content' }} className="p-3 mb-4">
                                <Stack direction="row" alignItems="center">
                                    <Radio
                                        checked={selectedValue === 'a'}
                                        onChange={handleChange}
                                        value="a"
                                        name="radio-buttons"
                                        inputProps={{ 'aria-label': 'A' }}
                                    />
                                    <p style={{ color: '#221F60', fontWeight: '600' }}>Meet in the conference room, <br /> prepare a few ideas</p>
                                </Stack>
                            </Box>

                            <Box style={{ background: selectedValue === 'b' ? 'rgb(117 109 233 / 29%)' : '#F5F6FA', width: 'fit-content' }} className="p-3 mb-4">
                                <Stack direction="row" alignItems="center">
                                    <Radio
                                        checked={selectedValue === 'b'}
                                        onChange={handleChange}
                                        value="b" 
                                        name="radio-buttons"
                                        inputProps={{ 'aria-label': 'B' }}
                                    />
                                    <p style={{ color: '#221F60', fontWeight: '600' }}>Meet in the conference room, <br /> prepare a few ideas</p>
                                </Stack>
                            </Box>

                            <Box style={{ background: selectedValue === 'c' ? 'rgb(117 109 233 / 29%)' : '#F5F6FA', width: 'fit-content' }} className="p-3">
                                <Stack direction="row" alignItems="center">
                                    <Radio
                                        checked={selectedValue === 'c'}
                                        onChange={handleChange}
                                        value="c" 
                                        name="radio-buttons"
                                        inputProps={{ 'aria-label': 'C' }}
                                    />
                                    <p style={{ color: '#221F60', fontWeight: '600' }}>Meet in the conference room, <br /> prepare a few ideas</p>
                                </Stack>
                            </Box>

                            <ButtonBlue title="Next" link="/hobbies" center />

                        </Stack>

                    </Grid>
                </Grid>
            </Container>
        </section>
    )
}

export default CreateProfile