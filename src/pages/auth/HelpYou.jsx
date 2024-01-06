import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import TopHeading from '../../components/TopHeading';

const HelpYou = () => {
    const navigate = useNavigate()

    return (
        <section className='opportunities-bg' style={{ height: '97vh' }}>
            <Container maxWidth="md" sx={{ position: 'relative', zIndex: '99' }}>
                <TopHeading />

               <Stack direction="row" justifyContent="center">
               <img src="/images/helpyou.png" alt="" className="img-fluid text-center mt-5 pt-5" style={{width: '150px'}} />
               </Stack>

                <div className="text-center mt-4 mb-0">
                    <h6 className="text-white" style={{ fontSize: '27px' }}>
                        I will help you find your <br /> new job!
                    </h6>
                    <p className='text-white mt-2'>I'm available 24x7. Can I show you around?</p>
                </div>


              <div className="mx-lg-5 mt-3">
              <Button onClick={() => navigate('/about-you')} sx={{ fontWeight: 600,
                    backgroundColor: '#6352cc', textTransform: 'capitalize', fontSize: '16px', padding: '15px 0px', borderRadius: '99px', '&:hover': {
                        backgroundColor: '#6352cc',
                    },
                }} className='w-100 text-white mt-3' variant="text">Create a Profile</Button>

                <Button onClick={() => navigate('/helpyou')} sx={{ fontWeight: 600,
                    backgroundColor: '#fff', color: '#6352CC', textTransform: 'capitalize', fontSize: '16px', padding: '15px 0px', borderRadius: '99px', '&:hover': {
                        backgroundColor: '#fff',
                    },
                }} className='w-100  mt-3' variant="text">Broewse Jobs</Button>
              </div>


            </Container>
        </section>
    )
}

export default HelpYou