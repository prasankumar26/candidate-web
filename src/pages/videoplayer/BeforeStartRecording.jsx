import Grid from '@mui/material/Grid';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { useState } from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';


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
    <section className='position-relative' style={{ height: '106vh' }}>
      <div maxWidth="xl">
        <div className='pt-0' maxWidth="lg" sx={{ position: 'relative', zIndex: '99' }}>
          <Grid container spacing={5}>
            <Grid item xs={12} md={4} style={{ backgroundColor: '#ffffff', height: '106vh', position: 'relative' }}>
              <img src="/images/opportunities.png" alt="" className="img-fluid" style={{ position: 'absolute', bottom: '0', left: '1%', width: '50%' }} />
              <div className="mt-4">
                <p className="text-start ms-3 text-dark" style={{ fontSize: '18px', padding: '20px 0px', fontWeight: '600' }}>CATALYST</p>
                <h2 className='text-dark ms-3 mt-5 pt-5 position-relative px-5' style={{ zIndex: '999' }}>
                  Before you start recording....
                </h2>
                <p className="text-muted ms-3 position-relative px-5">Few tips to prep you for the best outcome</p>
              </div>
            </Grid>
            <Grid item xs={12} md={8} className='pt-5 pe-4 px-5' style={{ backgroundColor: '#756DE9', height: '106vh' }}>
              <Box className="mt-5">
                
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
                    <p className='text-white' style={{fontSize: '14px'}}>Find a quiet spot wherever you’re recording</p>
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
                sx={{ backgroundColor: '#FFFFFF', 
                      color: '#000',
                      borderRadius: '99px',
                      fontSize: '16px', 
                      textTransform: 'capitalize',
                      width: 'fit-content', 
                      padding: '15px, 40px, 15px, 40px', 
                      '&:hover': {
                        backgroundColor: '#FFFFFF', 
                      },
                }}
                variant="contained" className='w-100 px-5 mt-5' size='small'> LET'S GO</Button>
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