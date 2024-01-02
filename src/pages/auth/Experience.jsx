import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useEffect, useState } from 'react';
import Stack from '@mui/material/Stack';
import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import Container from '@mui/material/Container';
import AsyncSelect from 'react-select/async';
import { colourOptions } from '../../data';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles'
import Checkbox from '@mui/material/Checkbox';
import React from "react";
import { FileUploader } from "react-drag-drop-files";
import { padding, width } from '@mui/system';

const fileTypes = ["JPG", "PNG", "GIF"];

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const CssTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      border: 'none',
      boxShadow: `0 0 10px #4b44d459`,
    },
    '&:hover fieldset': {
      border: 'none',
    },
    '&.Mui-focused fieldset': {
      border: 'none',
    },
  },
  '& input': {
    border: 'none',
    borderRadius: '99px',
  },
}));

const filterColors = (inputValue) => {
  return colourOptions.filter((i) =>
    i.label.toLowerCase().includes(inputValue.toLowerCase())
  );
};

const promiseOptions = (inputValue) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(filterColors(inputValue));
    }, 1000);
  });


function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ width: '80%', display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '60%', mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value,
        )}%`} <span style={{ fontSize: '13px' }}> <b>Up Next: Video CV</b> </span> </Typography>
      </Box>
    </Box>
  );
}

LinearProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
};


const Experience = () => {
  const navigate = useNavigate()
  const [progress, setProgress] = useState(10);
  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 10 : prevProgress + 10));
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);


  return (
    <section className='position-relative' style={{ height: '106vh' }}>
      <Container maxWidth="xl">
        <div className='pt-0' maxWidth="lg" sx={{ position: 'relative', zIndex: '99' }}>
          <Grid container spacing={5}>
            <Grid item xs={12} md={4} style={{ backgroundColor: '#FF8960', height: '106vh', position: 'relative' }}>
              <img src="/images/ellipse-two.png" alt="" className="img-fluid" style={{ position: 'absolute', bottom: '0', width: '70%' }} />
              <img src="/images/opportunities.png" alt="" className="img-fluid" style={{ position: 'absolute', bottom: '0', left: '1%', width: '50%' }} />
              <div className="mt-4">
                <p className="text-start text-white ms-3" style={{ fontSize: '20px', padding: '20px 0px' }}>CATALYST</p>
                <h2 className='text-white ms-3 mt-5 pt-5 position-relative' style={{ zIndex: '999' }}>
                  Tell us about your
                </h2>
                <h2 className='text-white ms-3 position-relative' style={{ zIndex: '999' }}>experiences</h2>
              </div>
            </Grid>
            <Grid item xs={12} md={8} className='pt-5 mt-5'>
              <Box sx={{ width: '100%' }}>
                <Stack direction="row" justifyContent="space-between" sx={{ flex: 1 }}>
                  <h4 style={{ textTransform: 'uppercase' }}>About You</h4>
                  <LinearProgressWithLabel sx={{ width: '100%' }} value={progress} />
                </Stack>
                <p className='mt-3'>1 step out of 2</p>
                <p className='mt-5'> {`< Back`} </p>
              </Box>

              <Box className="mt-4">
                <Stack direction="row" justifyContent="space-between">
                  <p className='mb-3 text-muted'> <b>Company Name</b> </p>
                </Stack>
                <AsyncSelect
                  isMulti
                  cacheOptions
                  defaultOptions
                  loadOptions={promiseOptions}
                  styles={{
                    control: (provided, state) => ({
                      ...provided,
                      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                      borderRadius: '99px',
                      padding: '6px 0px'
                    }),
                  }}
                />
              </Box>

              <Box className="mt-4">
                <p className='mb-3 text-muted'> <b>Designation at the Company</b> </p>
                <CssTextField
                  id="outlined-basic"
                  placeholder='Designation at the Company'
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
                  <p className='mb-2 text-muted'> <b>Function</b> </p>
                  <p className='mb-2 text-muted'>Optional</p>
                </Stack>
                <CssTextField
                  id="outlined-number"
                  type='number'
                  placeholder="Search Function or Department"
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


              <Box className="mt-3">
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <p className='mb-3 text-muted'> <b>Year</b> </p>
                    <CssTextField
                      id="outlined-number"
                      placeholder="2020"
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
                    <p className='mb-3 text-muted'> <b>Experience Duration</b> </p>
                    <CssTextField
                      id="outlined-number"
                      placeholder="3 years"
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

              <Box className="mt-3 mb-3">
                <Checkbox {...label} /> <span>Currently working here</span>
              </Box>

              <Box sx={{ border: '1px dashed blue', borderRadius: '99px', padding: '25px', textAlign: 'center', color: '#756DE9', cursor: 'pointer' }}>
                + Add More Experience
              </Box>


              <Box className="mt-4">
                <p className='mb-3 text-muted'> <b>Certificate Name</b> </p>
                <CssTextField
                  id="outlined-basic"
                  placeholder='Certificate Name'
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
                <p className='mb-3 text-muted'> <b>Year of Receiving it</b> </p>
                <CssTextField
                  id="outlined-number"
                  placeholder="2020"
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
              </Box>

              <Stack className="my-4" direction="row" justifyContent="center">
              <FileUploader handleChange={handleChange} name="file" types={fileTypes}  style={{ width: '100% !important' }} />
              </Stack>

              <Box sx={{marginTop: '20px', border: '1px dashed blue', borderRadius: '99px', padding: '25px', textAlign: 'center', color: '#756DE9', cursor: 'pointer' }}>
                Add More Certificate
              </Box>


              <Button onClick={() => navigate('/preference')} sx={{
                backgroundColor: '#756DE9', textTransform: 'capitalize', width: 'fit-content', padding: '15px 0px', borderRadius: '99px', '&:hover': {
                  backgroundColor: '#756DE9',
                },
              }} className='w-100 text-white mt-4 mb-5 px-5' variant="text"> Confirm </Button>
            </Grid>
          </Grid>
        </div>
      </Container>
    </section>
  )
}

export default Experience