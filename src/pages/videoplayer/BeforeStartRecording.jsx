import Grid from '@mui/material/Grid';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { useState } from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import MobileNav from '../../components/MobileNav';


const BeforeStartRecording = () => {
  const [selectedValue, setSelectedValue] = useState('a');
  const navigate = useNavigate()

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
    <section className='position-relative' style={{ height: '100vh' }}>
      <div maxWidth="xl">
        <div className='pt-0' maxWidth="lg" sx={{ position: 'relative', zIndex: '99' }}>
          <Grid container spacing={5}>
            <Grid className='mob-none' item xs={12} md={4} style={{ backgroundColor: '#ffffff', height: '100vh', position: 'relative' }}>
              <img src="/images/opportunities.png" alt="" className="img-fluid" style={{ position: 'absolute', bottom: '0', left: '10%', width: '50%' }} />
              <img src="/images/vector-one.png" alt="" className="img-fluid mob-none" style={{ position: 'absolute', bottom: '35%', left: '45%', width: 'fit-content' }} />
              <div className="mt-4">
                <p className="text-start ms-3 text-dark" style={{ fontSize: '18px', padding: '20px 0px', fontWeight: '600' }}>CATALYST</p>
                <h2 className='text-dark ms-3 mt-5 pt-5 position-relative px-5' style={{ zIndex: '999' }}>
                  Before you start recording....
                </h2>
                <p className="text-muted ms-3 position-relative px-5">Few tips to prep you for the best outcome</p>
              </div>
            </Grid>

             <MobileNav />

            <Grid item xs={12} md={8} className='pt-5 pe-4 px-5' style={{ backgroundColor: '#756DE9', height: '100%' }}>
              <Box className="mt-lg-5">
                
                <Stack direction="row" alignItems="start" alignContent="start">
                  <div>
                    <FormControlLabel value="female" control={<Radio
                      {...controlProps('e')}
                      sx={{
                        color: '#fff',
                        '&.Mui-checked': {
                          color: '#fff',
                        },
                      }}
                    />} />
                  </div>
                  <div>
                    <h4 className='mb-2 text-white' style={{fontSize: '18px'}}>You looking good?</h4>
                    <p className='text-white' style={{fontSize: '14px'}}>Get ready as if you are going for an interview</p>
                  </div>
                </Stack>

                <Stack direction="row" alignItems="start" alignContent="start" className='mt-5'>
                  <div>
                    <FormControlLabel value="female" control={<Radio
                      {...controlProps('e')}
                      sx={{
                        color: '#fff',
                        '&.Mui-checked': {
                          color: '#fff',
                        },
                      }}
                    />} />
                  </div>
                  <div>
                    <h4 className='mb-2 text-white' style={{fontSize: '18px'}}>Family not yelling in the back?</h4>
                    <p className='text-white' style={{fontSize: '14px'}}>Find a quiet spot wherever you're recording</p>
                  </div>
                </Stack>
                
                <Stack direction="row" alignItems="start" alignContent="start" className='mt-5'>
                  <div>
                    <FormControlLabel value="female" control={<Radio
                      {...controlProps('e')}
                      sx={{
                        color: '#fff',
                        '&.Mui-checked': {
                          color: '#fff',
                        },
                      }}
                    />} />
                  </div>
                  <div>
                    <h4 className='mb-2 text-white' style={{fontSize: '18px'}}>Good lighting and background?</h4>
                    <p className='text-white' style={{fontSize: '14px'}}>Try to declutter the background, we suggest using a plain wall as your background</p>
                  </div>
                </Stack>

                <Stack direction="row" alignItems="start" alignContent="start" className='mt-5'>
                  <div>
                    <FormControlLabel value="female" control={<Radio
                      {...controlProps('e')}
                      sx={{
                        color: '#fff',
                        '&.Mui-checked': {
                          color: '#fff',
                        },
                      }}
                    />} />
                  </div>
                  <div>
                    <h4 className='mb-2 text-white' style={{fontSize: '18px'}}>Feeling confident and positive?</h4>
                    <p className='text-white' style={{fontSize: '14px'}}>Hey, enjoy the journey, believe in yourself!</p>
                  </div>
                </Stack>

                <Stack direction="row" alignItems="start" alignContent="start" className='mt-5'>
                  <div>
                    <FormControlLabel value="female" control={<Radio
                      {...controlProps('e')}
                      sx={{
                        color: '#fff',
                        '&.Mui-checked': {
                          color: '#fff',
                        },
                      }}
                    />} />
                  </div>
                  <div>
                    <h4 className='mb-2 text-white' style={{fontSize: '18px'}}>Will you keep it simple and short?</h4>
                    <p className='text-white' style={{fontSize: '14px'}}>Be yourself, avoid jargon. Prepare yourself before you record. This is normal, don't worry.</p>
                    
                <Button 
                onClick={()=> navigate('/video-cv')}
                sx={{ backgroundColor: '#BAB6F4', 
                      color: '#756DE9',
                      borderRadius: '99px',
                      fontSize: '16px', 
                      textTransform: 'capitalize',
                      width: 'fit-content', 
                      padding: '15px, 40px, 15px, 40px', 
                      '&:hover': {
                        backgroundColor: '#FFFFFF', 
                      },
                }}
                variant="contained" className='w-100 px-5 py-2 mt-5 mb-3' size='small'> LET'S GO</Button>
                  </div>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </div>
      </div>
    </section>
  )
}

export default BeforeStartRecording