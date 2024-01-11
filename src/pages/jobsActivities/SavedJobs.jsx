import React from 'react'
import Button from '@mui/material/Button';
import { Divider } from '@mui/material';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';

const SavedJobs = () => {
  return (
    <>
      <Box className="mb-4 ">
        <Button variant='contained' sx={{ textTransform: 'capitalize', width: 'fit-content', cursor: 'pointer', backgroundColor: '#756DE9' }} className='px-3 py-2 me-2 mb-2 roundedone'>
          Account Manager </Button>
        <Button sx={{ textTransform: 'capitalize', border: '1px dashed #756DE9', width: 'fit-content', cursor: 'pointer' }} className='px-3 py-2 me-2 mb-2 roundedone'>
          Media Manager </Button>
        <Button sx={{ textTransform: 'capitalize', border: '1px dashed #756DE9', width: 'fit-content', cursor: 'pointer' }} className='px-3 py-2 me-2 mb-2 roundedone'>
          Account Planner </Button>
      </Box>

      <Divider sx={{ backgroundColor: '#0000000f' }} />

      <h4 className="mt-2 mb-3">
        New Requests (2)
      </h4>

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={5}>
          <Grid item xs={12} md={6}>
            <Stack direction="row" justifyContent="space-between">
              <h6 style={{ fontSize: '16px' }}>Account Planner</h6>
              <p style={{ color: '#756DE9' }}> <i>45 mins ago</i> </p>
            </Stack>
            <p className='mt-2' style={{ fontSize: '14px' }}>
              <i>“Hi Janki, I think you'd be a good candidate for this role. Do reach out if it interests you.”</i>
            </p>


            {/* card  */}
            <Box style={{ padding: '20px 20px', background: `#ffffff`, borderRadius: '5px' }} className="mt-3">
              <Stack direction="row" justifyContent="space-between">
                <Box>
                  <Stack direction="row">
                    <img src="/images/ogilvy.png" alt="" className="img-fluid" style={{ width: '100px' }} />
                    <Box className="ms-3">
                      <h4 className="text-dark">Account Planner</h4>
                      <p style={{ color: '#ADADAD' }}>Ogilvy.Pvt. Ltd</p>
                      <Button variant="contained" className='mt-2' sx={{
                        backgroundColor: '#52C6AE33', color: '#52C6AE', borderRadius: '99px', fontWeight: '600', '&:hover': {
                          background: '#52C6AE33',
                          color: '#52C6AE',
                        },
                      }}>
                        Good Fit
                      </Button>
                    </Box>
                  </Stack>
                </Box>
              </Stack>

              <Divider sx={{ backgroundColor: '#0000000f' }} className='mt-3 mb-3' />

              <Stack direction="row" justifyContent="space-between">
                <Stack direction="row" justifyContent="space-evenly" alignItems="center">
                  <img src="/images/saved-jobs/icon-1.png" alt="" className='mt-3 me-3' />
                  <Box>
                    <p style={{ color: '#756DE9', fontSize: '12px', fontWeight: '500' }}>location</p>
                    <h6 style={{ fontSize: '14px', fontWeight: 'bold' }}>Mumbai</h6>
                  </Box>
                </Stack>

                <Stack direction="row" justifyContent="space-evenly" alignItems="center">
                  <img src="/images/saved-jobs/icon-2.png" alt="" className='mt-3 me-3' />
                  <Box>
                    <p style={{ color: '#756DE9', fontSize: '12px', fontWeight: '500' }}>CTC</p>
                    <h6 style={{ fontSize: '14px', fontWeight: 'bold' }}>8 - 12 LPA</h6>
                  </Box>
                </Stack>
              </Stack>

              <Stack direction="row" justifyContent="space-between" className='mt-4'>
                <Stack direction="row" justifyContent="space-evenly" alignItems="center">
                  <img src="/images/saved-jobs/icon-3.png" alt="" className='mt-3 me-3' />
                  <Box>
                    <p style={{ color: '#756DE9', fontSize: '12px', fontWeight: '500' }}>Experience</p>
                    <h6 style={{ fontSize: '14px', fontWeight: 'bold' }}>6 M- 1 Y</h6>
                  </Box>
                </Stack>

                <Stack direction="row" justifyContent="space-evenly" alignItems="center">
                  <img src="/images/saved-jobs/icon-4.png" alt="" className='mt-3 me-3' />
                  <Box>
                    <p style={{ color: '#756DE9', fontSize: '12px', fontWeight: '500' }}>Job Type</p>
                    <h6 style={{ fontSize: '14px', fontWeight: 'bold' }}>Full-Time</h6>
                  </Box>
                </Stack>
              </Stack>

              <Divider sx={{ backgroundColor: '#0000000f' }} className='mt-3 mb-3' />

              <Stack direction="row" alignItems="end">
                <img src="/images/saved-jobs/icon-5.png" alt="" className='me-2' />
                <p style={{ color: '#756DE9', fontSize: '12px', fontWeight: '500' }}>Key Skills</p>
              </Stack>

              <Box className="mt-3">
                <p>
                  Representative II, <span style={{ color: 'orange' }}>|</span>  Key Account Manager  <span style={{ color: 'orange' }}>|</span>  Sales Management  <span style={{ color: 'orange' }}>|</span>  Sales Operations  <span style={{ color: 'orange' }}>|</span>  Business Development  <span style={{ color: 'orange' }}>|</span>  Marketing Management  <span style={{ color: 'orange' }}>|</span>  Market Research  <span style={{ color: 'orange' }}>|</span>  Market Analysis  <span style={{ color: 'orange' }}>|</span>  Client Relationship...
                </p>
              </Box>


              <Stack direction="row" alignItems="end" className='mt-3'>
                <img src="/images/saved-jobs/icon-6.png" alt="" className='me-2' />
                <p style={{ color: '#756DE9', fontSize: '12px', fontWeight: '500' }}>Tools Known</p>
              </Stack>

              <Box className="mt-3">
                <p>
                  Zoho CRM  <span style={{ color: 'orange' }}>|</span>  Bitrix24  <span style={{ color: 'orange' }}>|</span>  Calandy
                </p>
              </Box>


              <Stack direction="row" justifyContent="center" className='mt-2'>
                <Button
                  style={{ padding: '15px 40px' }}
                  sx={{
                    backgroundColor: '#756DE9',
                    borderRadius: '99px',
                    fontSize: '16px',
                    textTransform: 'capitalize',
                    width: '330px',
                    '&:hover': {
                      backgroundColor: '#756DE9',
                    },
                  }}
                  variant="contained" className='w-100 mt-2 btn-pad' size='small'> Apply Now </Button>
              </Stack>



            </Box>
            {/* card  */}

            {/* card  */}
            <Box style={{ padding: '20px 20px', background: `#ffffff`, borderRadius: '5px' }} className="mt-3">
              <Stack direction="row" justifyContent="space-between">
                <Box>
                  <Stack direction="row">
                    <img src="/images/ogilvy.png" alt="" className="img-fluid" style={{ width: '100px' }} />
                    <Box className="ms-3">
                      <h4 className="text-dark">Account Planner</h4>
                      <p style={{ color: '#ADADAD' }}>Ogilvy.Pvt. Ltd</p>
                      <Button variant="contained" className='mt-2' sx={{
                        backgroundColor: '#52C6AE33', color: '#52C6AE', borderRadius: '99px', fontWeight: '600', '&:hover': {
                          background: '#52C6AE33',
                          color: '#52C6AE',
                        },
                      }}>
                        Good Fit
                      </Button>
                    </Box>
                  </Stack>
                </Box>
              </Stack>

              <Divider sx={{ backgroundColor: '#0000000f' }} className='mt-3 mb-3' />

              <Stack direction="row" justifyContent="space-between">
                <Stack direction="row" justifyContent="space-evenly" alignItems="center">
                  <img src="/images/saved-jobs/icon-1.png" alt="" className='mt-3 me-3' />
                  <Box>
                    <p style={{ color: '#756DE9', fontSize: '12px', fontWeight: '500' }}>location</p>
                    <h6 style={{ fontSize: '14px', fontWeight: 'bold' }}>Mumbai</h6>
                  </Box>
                </Stack>

                <Stack direction="row" justifyContent="space-evenly" alignItems="center">
                  <img src="/images/saved-jobs/icon-2.png" alt="" className='mt-3 me-3' />
                  <Box>
                    <p style={{ color: '#756DE9', fontSize: '12px', fontWeight: '500' }}>CTC</p>
                    <h6 style={{ fontSize: '14px', fontWeight: 'bold' }}>8 - 12 LPA</h6>
                  </Box>
                </Stack>
              </Stack>

              <Stack direction="row" justifyContent="space-between" className='mt-4'>
                <Stack direction="row" justifyContent="space-evenly" alignItems="center">
                  <img src="/images/saved-jobs/icon-3.png" alt="" className='mt-3 me-3' />
                  <Box>
                    <p style={{ color: '#756DE9', fontSize: '12px', fontWeight: '500' }}>Experience</p>
                    <h6 style={{ fontSize: '14px', fontWeight: 'bold' }}>6 M- 1 Y</h6>
                  </Box>
                </Stack>

                <Stack direction="row" justifyContent="space-evenly" alignItems="center">
                  <img src="/images/saved-jobs/icon-4.png" alt="" className='mt-3 me-3' />
                  <Box>
                    <p style={{ color: '#756DE9', fontSize: '12px', fontWeight: '500' }}>Job Type</p>
                    <h6 style={{ fontSize: '14px', fontWeight: 'bold' }}>Full-Time</h6>
                  </Box>
                </Stack>
              </Stack>

              <Divider sx={{ backgroundColor: '#0000000f' }} className='mt-3 mb-3' />

              <Stack direction="row" alignItems="end">
                <img src="/images/saved-jobs/icon-5.png" alt="" className='me-2' />
                <p style={{ color: '#756DE9', fontSize: '12px', fontWeight: '500' }}>Key Skills</p>
              </Stack>

              <Box className="mt-3">
                <p>
                  Representative II, <span style={{ color: 'orange' }}>|</span>  Key Account Manager  <span style={{ color: 'orange' }}>|</span>  Sales Management  <span style={{ color: 'orange' }}>|</span>  Sales Operations  <span style={{ color: 'orange' }}>|</span>  Business Development  <span style={{ color: 'orange' }}>|</span>  Marketing Management  <span style={{ color: 'orange' }}>|</span>  Market Research  <span style={{ color: 'orange' }}>|</span>  Market Analysis  <span style={{ color: 'orange' }}>|</span>  Client Relationship...
                </p>
              </Box>


              <Stack direction="row" alignItems="end" className='mt-3'>
                <img src="/images/saved-jobs/icon-6.png" alt="" className='me-2' />
                <p style={{ color: '#756DE9', fontSize: '12px', fontWeight: '500' }}>Tools Known</p>
              </Stack>

              <Box className="mt-3">
                <p>
                  Zoho CRM  <span style={{ color: 'orange' }}>|</span>  Bitrix24  <span style={{ color: 'orange' }}>|</span>  Calandy
                </p>
              </Box>


              <Stack direction="row" justifyContent="center" className='mt-2'>
                <Button
                  style={{ padding: '15px 40px' }}
                  sx={{
                    backgroundColor: '#756DE9',
                    borderRadius: '99px',
                    fontSize: '16px',
                    textTransform: 'capitalize',
                    width: '330px',
                    '&:hover': {
                      backgroundColor: '#756DE9',
                    },
                  }}
                  variant="contained" className='w-100 mt-2 btn-pad' size='small'> Apply Now </Button>
              </Stack>
            </Box>
            {/* card  */}

            {/* card  */}
            <Box style={{ padding: '20px 20px', background: `#ffffff`, borderRadius: '5px' }} className="mt-3">
              <Stack direction="row" justifyContent="space-between">
                <Box>
                  <Stack direction="row">
                    <img src="/images/ogilvy.png" alt="" className="img-fluid" style={{ width: '100px' }} />
                    <Box className="ms-3">
                      <h4 className="text-dark">Account Planner</h4>
                      <p style={{ color: '#ADADAD' }}>Ogilvy.Pvt. Ltd</p>
                      <Button variant="contained" className='mt-2' sx={{
                        backgroundColor: '#52C6AE33', color: '#52C6AE', borderRadius: '99px', fontWeight: '600', '&:hover': {
                          background: '#52C6AE33',
                          color: '#52C6AE',
                        },
                      }}>
                        Good Fit
                      </Button>
                    </Box>
                  </Stack>
                </Box>
              </Stack>

              <Divider sx={{ backgroundColor: '#0000000f' }} className='mt-3 mb-3' />

              <Stack direction="row" justifyContent="space-between">
                <Stack direction="row" justifyContent="space-evenly" alignItems="center">
                  <img src="/images/saved-jobs/icon-1.png" alt="" className='mt-3 me-3' />
                  <Box>
                    <p style={{ color: '#756DE9', fontSize: '12px', fontWeight: '500' }}>location</p>
                    <h6 style={{ fontSize: '14px', fontWeight: 'bold' }}>Mumbai</h6>
                  </Box>
                </Stack>

                <Stack direction="row" justifyContent="space-evenly" alignItems="center">
                  <img src="/images/saved-jobs/icon-2.png" alt="" className='mt-3 me-3' />
                  <Box>
                    <p style={{ color: '#756DE9', fontSize: '12px', fontWeight: '500' }}>CTC</p>
                    <h6 style={{ fontSize: '14px', fontWeight: 'bold' }}>8 - 12 LPA</h6>
                  </Box>
                </Stack>
              </Stack>

              <Stack direction="row" justifyContent="space-between" className='mt-4'>
                <Stack direction="row" justifyContent="space-evenly" alignItems="center">
                  <img src="/images/saved-jobs/icon-3.png" alt="" className='mt-3 me-3' />
                  <Box>
                    <p style={{ color: '#756DE9', fontSize: '12px', fontWeight: '500' }}>Experience</p>
                    <h6 style={{ fontSize: '14px', fontWeight: 'bold' }}>6 M- 1 Y</h6>
                  </Box>
                </Stack>

                <Stack direction="row" justifyContent="space-evenly" alignItems="center">
                  <img src="/images/saved-jobs/icon-4.png" alt="" className='mt-3 me-3' />
                  <Box>
                    <p style={{ color: '#756DE9', fontSize: '12px', fontWeight: '500' }}>Job Type</p>
                    <h6 style={{ fontSize: '14px', fontWeight: 'bold' }}>Full-Time</h6>
                  </Box>
                </Stack>
              </Stack>

              <Divider sx={{ backgroundColor: '#0000000f' }} className='mt-3 mb-3' />

              <Stack direction="row" alignItems="end">
                <img src="/images/saved-jobs/icon-5.png" alt="" className='me-2' />
                <p style={{ color: '#756DE9', fontSize: '12px', fontWeight: '500' }}>Key Skills</p>
              </Stack>

              <Box className="mt-3">
                <p>
                  Representative II, <span style={{ color: 'orange' }}>|</span>  Key Account Manager  <span style={{ color: 'orange' }}>|</span>  Sales Management  <span style={{ color: 'orange' }}>|</span>  Sales Operations  <span style={{ color: 'orange' }}>|</span>  Business Development  <span style={{ color: 'orange' }}>|</span>  Marketing Management  <span style={{ color: 'orange' }}>|</span>  Market Research  <span style={{ color: 'orange' }}>|</span>  Market Analysis  <span style={{ color: 'orange' }}>|</span>  Client Relationship...
                </p>
              </Box>


              <Stack direction="row" alignItems="end" className='mt-3'>
                <img src="/images/saved-jobs/icon-6.png" alt="" className='me-2' />
                <p style={{ color: '#756DE9', fontSize: '12px', fontWeight: '500' }}>Tools Known</p>
              </Stack>

              <Box className="mt-3">
                <p>
                  Zoho CRM  <span style={{ color: 'orange' }}>|</span>  Bitrix24  <span style={{ color: 'orange' }}>|</span>  Calandy
                </p>
              </Box>


              <Stack direction="row" justifyContent="center" className='mt-2'>
                <Button
                  style={{ padding: '15px 40px' }}
                  sx={{
                    backgroundColor: '#756DE9',
                    borderRadius: '99px',
                    fontSize: '16px',
                    textTransform: 'capitalize',
                    width: '330px',
                    '&:hover': {
                      backgroundColor: '#756DE9',
                    },
                  }}
                  variant="contained" className='w-100 mt-2 btn-pad' size='small'> Apply Now </Button>
              </Stack>
            </Box>
            {/* card  */}


          </Grid>
          <Grid item xs={12} md={6}>
            <Stack direction="row" justifyContent="space-between">
              <h6 style={{ fontSize: '16px' }}>Account Planner</h6>
              <p style={{ color: '#756DE9' }}> <i>45 mins ago</i> </p>
            </Stack>
            <p className='mt-2' style={{ fontSize: '14px' }}>
              <i>“Hi Janki, I think you'd be a good candidate for this role. Do reach out if it interests you.”</i>
            </p>

              {/* card  */}
          <Box style={{ padding: '20px 20px', background: `#ffffff`, borderRadius: '5px' }} className="mt-3">
            <Stack direction="row" justifyContent="space-between">
              <Box>
                <Stack direction="row">
                  <img src="/images/ogilvy.png" alt="" className="img-fluid" style={{ width: '100px' }} />
                  <Box className="ms-3">
                    <h4 className="text-dark">Account Planner</h4>
                    <p style={{ color: '#ADADAD' }}>Ogilvy.Pvt. Ltd</p>
                    <Button variant="contained" className='mt-2' sx={{
                      backgroundColor: '#52C6AE33', color: '#52C6AE', borderRadius: '99px', fontWeight: '600', '&:hover': {
                        background: '#52C6AE33',
                        color: '#52C6AE',
                      },
                    }}>
                      Good Fit
                    </Button>
                  </Box>
                </Stack>
              </Box>
            </Stack>

            <Divider sx={{ backgroundColor: '#0000000f' }} className='mt-3 mb-3' />

            <Stack direction="row" justifyContent="space-between">
              <Stack direction="row" justifyContent="space-evenly" alignItems="center">
                <img src="/images/saved-jobs/icon-1.png" alt="" className='mt-3 me-3' />
                <Box>
                  <p style={{ color: '#756DE9', fontSize: '12px', fontWeight: '500' }}>location</p>
                  <h6 style={{ fontSize: '14px', fontWeight: 'bold' }}>Mumbai</h6>
                </Box>
              </Stack>

              <Stack direction="row" justifyContent="space-evenly" alignItems="center">
                <img src="/images/saved-jobs/icon-2.png" alt="" className='mt-3 me-3' />
                <Box>
                  <p style={{ color: '#756DE9', fontSize: '12px', fontWeight: '500' }}>CTC</p>
                  <h6 style={{ fontSize: '14px', fontWeight: 'bold' }}>8 - 12 LPA</h6>
                </Box>
              </Stack>
            </Stack>

            <Stack direction="row" justifyContent="space-between" className='mt-4'>
              <Stack direction="row" justifyContent="space-evenly" alignItems="center">
                <img src="/images/saved-jobs/icon-3.png" alt="" className='mt-3 me-3' />
                <Box>
                  <p style={{ color: '#756DE9', fontSize: '12px', fontWeight: '500' }}>Experience</p>
                  <h6 style={{ fontSize: '14px', fontWeight: 'bold' }}>6 M- 1 Y</h6>
                </Box>
              </Stack>

              <Stack direction="row" justifyContent="space-evenly" alignItems="center">
                <img src="/images/saved-jobs/icon-4.png" alt="" className='mt-3 me-3' />
                <Box>
                  <p style={{ color: '#756DE9', fontSize: '12px', fontWeight: '500' }}>Job Type</p>
                  <h6 style={{ fontSize: '14px', fontWeight: 'bold' }}>Full-Time</h6>
                </Box>
              </Stack>
            </Stack>

            <Divider sx={{ backgroundColor: '#0000000f' }} className='mt-3 mb-3' />

            <Stack direction="row" alignItems="end">
              <img src="/images/saved-jobs/icon-5.png" alt="" className='me-2' />
              <p style={{ color: '#756DE9', fontSize: '12px', fontWeight: '500' }}>Key Skills</p>
            </Stack>

            <Box className="mt-3">
              <p>
                Representative II, <span style={{ color: 'orange' }}>|</span>  Key Account Manager  <span style={{ color: 'orange' }}>|</span>  Sales Management  <span style={{ color: 'orange' }}>|</span>  Sales Operations  <span style={{ color: 'orange' }}>|</span>  Business Development  <span style={{ color: 'orange' }}>|</span>  Marketing Management  <span style={{ color: 'orange' }}>|</span>  Market Research  <span style={{ color: 'orange' }}>|</span>  Market Analysis  <span style={{ color: 'orange' }}>|</span>  Client Relationship...
              </p>
            </Box>


            <Stack direction="row" alignItems="end" className='mt-3'>
              <img src="/images/saved-jobs/icon-6.png" alt="" className='me-2' />
              <p style={{ color: '#756DE9', fontSize: '12px', fontWeight: '500' }}>Tools Known</p>
            </Stack>

            <Box className="mt-3">
              <p>
                Zoho CRM  <span style={{ color: 'orange' }}>|</span>  Bitrix24  <span style={{ color: 'orange' }}>|</span>  Calandy
              </p>
            </Box>


            <Stack direction="row" justifyContent="center" className='mt-2'>
              <Button
                style={{ padding: '15px 40px' }}
                sx={{
                  backgroundColor: '#756DE9',
                  borderRadius: '99px',
                  fontSize: '16px',
                  textTransform: 'capitalize',
                  width: '330px',
                  '&:hover': {
                    backgroundColor: '#756DE9',
                  },
                }}
                variant="contained" className='w-100 mt-2 btn-pad' size='small'> Apply Now </Button>
            </Stack>
          </Box>
          {/* card  */}

              {/* card  */}
          <Box style={{ padding: '20px 20px', background: `#ffffff`, borderRadius: '5px' }} className="mt-3">
            <Stack direction="row" justifyContent="space-between">
              <Box>
                <Stack direction="row">
                  <img src="/images/ogilvy.png" alt="" className="img-fluid" style={{ width: '100px' }} />
                  <Box className="ms-3">
                    <h4 className="text-dark">Account Planner</h4>
                    <p style={{ color: '#ADADAD' }}>Ogilvy.Pvt. Ltd</p>
                    <Button variant="contained" className='mt-2' sx={{
                      backgroundColor: '#52C6AE33', color: '#52C6AE', borderRadius: '99px', fontWeight: '600', '&:hover': {
                        background: '#52C6AE33',
                        color: '#52C6AE',
                      },
                    }}>
                      Good Fit
                    </Button>
                  </Box>
                </Stack>
              </Box>
            </Stack>

            <Divider sx={{ backgroundColor: '#0000000f' }} className='mt-3 mb-3' />

            <Stack direction="row" justifyContent="space-between">
              <Stack direction="row" justifyContent="space-evenly" alignItems="center">
                <img src="/images/saved-jobs/icon-1.png" alt="" className='mt-3 me-3' />
                <Box>
                  <p style={{ color: '#756DE9', fontSize: '12px', fontWeight: '500' }}>location</p>
                  <h6 style={{ fontSize: '14px', fontWeight: 'bold' }}>Mumbai</h6>
                </Box>
              </Stack>

              <Stack direction="row" justifyContent="space-evenly" alignItems="center">
                <img src="/images/saved-jobs/icon-2.png" alt="" className='mt-3 me-3' />
                <Box>
                  <p style={{ color: '#756DE9', fontSize: '12px', fontWeight: '500' }}>CTC</p>
                  <h6 style={{ fontSize: '14px', fontWeight: 'bold' }}>8 - 12 LPA</h6>
                </Box>
              </Stack>
            </Stack>

            <Stack direction="row" justifyContent="space-between" className='mt-4'>
              <Stack direction="row" justifyContent="space-evenly" alignItems="center">
                <img src="/images/saved-jobs/icon-3.png" alt="" className='mt-3 me-3' />
                <Box>
                  <p style={{ color: '#756DE9', fontSize: '12px', fontWeight: '500' }}>Experience</p>
                  <h6 style={{ fontSize: '14px', fontWeight: 'bold' }}>6 M- 1 Y</h6>
                </Box>
              </Stack>

              <Stack direction="row" justifyContent="space-evenly" alignItems="center">
                <img src="/images/saved-jobs/icon-4.png" alt="" className='mt-3 me-3' />
                <Box>
                  <p style={{ color: '#756DE9', fontSize: '12px', fontWeight: '500' }}>Job Type</p>
                  <h6 style={{ fontSize: '14px', fontWeight: 'bold' }}>Full-Time</h6>
                </Box>
              </Stack>
            </Stack>

            <Divider sx={{ backgroundColor: '#0000000f' }} className='mt-3 mb-3' />

            <Stack direction="row" alignItems="end">
              <img src="/images/saved-jobs/icon-5.png" alt="" className='me-2' />
              <p style={{ color: '#756DE9', fontSize: '12px', fontWeight: '500' }}>Key Skills</p>
            </Stack>

            <Box className="mt-3">
              <p>
                Representative II, <span style={{ color: 'orange' }}>|</span>  Key Account Manager  <span style={{ color: 'orange' }}>|</span>  Sales Management  <span style={{ color: 'orange' }}>|</span>  Sales Operations  <span style={{ color: 'orange' }}>|</span>  Business Development  <span style={{ color: 'orange' }}>|</span>  Marketing Management  <span style={{ color: 'orange' }}>|</span>  Market Research  <span style={{ color: 'orange' }}>|</span>  Market Analysis  <span style={{ color: 'orange' }}>|</span>  Client Relationship...
              </p>
            </Box>


            <Stack direction="row" alignItems="end" className='mt-3'>
              <img src="/images/saved-jobs/icon-6.png" alt="" className='me-2' />
              <p style={{ color: '#756DE9', fontSize: '12px', fontWeight: '500' }}>Tools Known</p>
            </Stack>

            <Box className="mt-3">
              <p>
                Zoho CRM  <span style={{ color: 'orange' }}>|</span>  Bitrix24  <span style={{ color: 'orange' }}>|</span>  Calandy
              </p>
            </Box>


            <Stack direction="row" justifyContent="center" className='mt-2'>
              <Button
                style={{ padding: '15px 40px' }}
                sx={{
                  backgroundColor: '#756DE9',
                  borderRadius: '99px',
                  fontSize: '16px',
                  textTransform: 'capitalize',
                  width: '330px',
                  '&:hover': {
                    backgroundColor: '#756DE9',
                  },
                }}
                variant="contained" className='w-100 mt-2 btn-pad' size='small'> Apply Now </Button>
            </Stack>
          </Box>
          {/* card  */}


          </Grid>

        
        </Grid>
      </Box>
    </>
  )
}

export default SavedJobs