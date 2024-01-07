import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useState } from 'react';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';
import TopHeading from '../../components/TopHeading';
import ProgressBar from '../../components/ProgressBar';
import ButtonBlue from '../../components/ButtonBlue';
import Radio from '@mui/material/Radio';
import MobileNav from '../../components/MobileNav';
import MobileNina from '../../components/MobileNina';


const AboutYou = () => {
    const navigate = useNavigate()
    const [selectedValue, setSelectedValue] = useState('a');
    const handleChange = (event) => {
      setSelectedValue(event.target.value);
    };

    return (
        <section className='position-relative' style={{ height: '106vh' }}>
            <div>
                <div className='pt-0' maxWidth="lg" sx={{ position: 'relative', zIndex: '99' }}>
                    <Grid container>
                        <Grid item xs={12} md={4} className='mob-none' style={{ backgroundColor: '#fff', height: '106vh', position: 'relative' }}>
                            <img src="/images/ellipse.png" alt="" className="img-fluid " style={{ position: 'absolute', bottom: '0', width: '300px' }} />
                            <img src="/images/opportunities.png" alt="" className="img-fluid" style={{ position: 'absolute', bottom: '0', left: '1%', width: '220px' }} />
                            <img src="/images/vector-one.png" alt="" className="img-fluid mob-none" style={{ position: 'absolute', bottom: '35%', left: '45%', width: 'fit-content' }} />
                            <div className="mt-4">
                                <TopHeading textstart color />
                                <div className="mt-5 mx-5">
                                    <p className='mb-2 mt-5' style={{ color: '#030303', fontSize: '20px' }}> <b>1/5</b> </p>
                                    <p className='mb-2' style={{ color: '#030303', fontSize: '20px', fontWeight: '600', fontFamily: 'Poppins', }}> So here's a thought. Say your team is kicking off a huge project at work.</p>
                                    <p style={{ color: '#030303', fontSize: '20px', fontWeight: '600', fontFamily: 'Poppins', }} className='mt-4'> What's your plan of attack? </p>
                                </div>
                            </div>
                        </Grid>

                    <MobileNav />
                        
                        <Grid item xs={12} md={8} className='pt-lg-5 px-lg-s-des'>
                            <ProgressBar number="1/5" para1="So here's a thought. Say your team is kicking off a huge project at work."  />
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
                </div>
            </div>
        </section>
    )
}

export default AboutYou