import React from 'react'
import Navbar from '../../components/Navbar'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const VideoContainer = () => {
  return (
    <>
        <Navbar />
      <section style={{backgroundColor: '#191835', height: '100vh'}}>
           <Stack direction="row" justifyContent="center" alignItems="center" alignContent="center">
            <div className="position-relative">
            <img src="/images/video/video-1.png" alt="" className="img-fluid mt-5" style={{width: '300px'}} />
            <div className="text-box position-absolute">
              <p>Click Here to Start?</p>
            </div>
            <div className="position-absolute video-arrow">
            <img src="/images/video/arrow.png" alt="" className="img-fluid mt-5" />
            </div>
            <div className="position-absolute video-button">
            <Button 
            onClick={()=>     window.location.href = '/video-one'          }
                sx={{ backgroundColor: '#fff', 
                      color: '#756DE9',
                      borderRadius: '99px',
                      fontSize: '16px', 
                      width: 'fit-content', 
                      padding: '25px, 40px, 25px, 40px', 
                      '&:hover': {
                        backgroundColor: '#fff', 
                      },
                }}
                variant="contained" className='w-100 px-5 mt-2' size='small'> <span className="dot"></span> RECORD NOW </Button>
            </div>

            </div>
           </Stack>
      </section> 
    </>
  )
}

export default VideoContainer