import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useEffect, useState } from 'react';
import Stack from '@mui/material/Stack';
import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { colourOptions } from '../../data';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles'
import React from "react";
import { FileUploader } from "react-drag-drop-files";
import TopHeading from '../../components/TopHeading';
import ProgressBar from '../../components/ProgressBar';
import NormalHeading from '../../components/NormalHeading';
import Checkbox from '@mui/material/Checkbox';
import SearchTextBox from '../../components/SearchTextBox';

const fileTypes = ["JPG", "PNG", "GIF"];

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const CssTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      border: 'none',
      boxShadow: '0px 0px 11px 2px #4B44D40F inset',
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


const Experience = () => {

  const navigate = useNavigate()
  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
  };



  return (
    <section className='position-relative' style={{ height: '106vh' }}>
      <div maxWidth="xl">
        <div className='pt-0' maxWidth="lg" sx={{ position: 'relative', zIndex: '99' }}>
          <Grid container spacing={5}>
            <Grid item xs={12} md={4} style={{ backgroundColor: '#FF8960', height: '106vh', position: 'relative' }}>
              <img src="/images/ellipse-two.png" alt="" className="img-fluid" style={{ position: 'absolute', bottom: '0', width: '70%' }} />
              <img src="/images/opportunities.png" alt="" className="img-fluid" style={{ position: 'absolute', bottom: '0', left: '1%', width: '50%' }} />
              <div className="mt-4">
                <TopHeading textstart />
                <h2 className='text-white ms-3 mt-5 pt-5 position-relative px-5' style={{ zIndex: '999' }}>
                  Tell us about your
                </h2>
                <h2 className='text-white ms-3 position-relative px-5' style={{ zIndex: '999' }}>experiences</h2>
              </div>
            </Grid>
            <Grid item xs={12} md={8} className='pt-5 mt-5 pe-4'>
              <ProgressBar />

              <Box className="mt-4">
                <Stack direction="row" justifyContent="space-between">
                  <NormalHeading title="Company Name" />
                </Stack>
                 <SearchTextBox />
              </Box>

              <Box className="mt-4">
                <NormalHeading title="Designation at the Company" />
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
                  <NormalHeading title="Function" />
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
                    <NormalHeading title="Year" />
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
                    <NormalHeading title="Experience Duration" />
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

              <Box sx={{ border: '1px dashed blue', borderRadius: '99px', padding: '15px', textAlign: 'center', color: '#756DE9', cursor: 'pointer' }}>
                + Add More Experience
              </Box>


              <Box className="mt-4">
                <NormalHeading title="Certificate Name" />
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
                <NormalHeading title="Year of Receiving it" />
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

              <Stack className="drop_area_box mt-4" direction="row" justifyContent="center">
                <FileUploader className="drop_area drop_zone" handleChange={handleChange} name="file" types={fileTypes} style={{ width: '100% !important' }} >
                <div className='text-center'><p style={{color: '#756DE9', fontWeight: '600'}}>Browse Files</p> <p> Max File Size 2mb</p></div>
                  </FileUploader>
              </Stack>

              <Box sx={{ marginTop: '20px', border: '1px dashed blue', borderRadius: '99px', padding: '15px', textAlign: 'center', color: '#756DE9', cursor: 'pointer' }}>
                Add More Certificate
              </Box>


              <Button onClick={() => navigate('/preference')} sx={{
                backgroundColor: '#756DE9', fontSize: '16px', textTransform: 'capitalize', width: 'fit-content', 
                padding: '15px, 40px, 15px, 40px', borderRadius: '99px', '&:hover': {
                  backgroundColor: '#756DE9',
                },
              }} className='w-100 text-white mt-4 mb-5 px-5' variant="text"> Confirm </Button>
            </Grid>
          </Grid>
        </div>
      </div>
    </section>
  )
}

export default Experience