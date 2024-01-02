import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import Stack from '@mui/material/Stack';

const HelpYou = () => {
    const navigate = useNavigate()

    return (
        <section className='opportunities-bg' style={{ height: '97vh' }}>
            <Container maxWidth="sm" sx={{ position: 'relative', zIndex: '99' }}>
                <p className="text-center text-white mb-5" style={{ fontSize: '20px', padding: '20px 0px' }}>CATALYST</p>

               <Stack direction="row" justifyContent="center">
               <img src="/images/helpyou.png" alt="" className="img-fluid text-center" style={{width: '150px'}} />
               </Stack>

                <div className="text-center mt-4 mb-0">
                    <p className="text-white" style={{ fontSize: '20px' }}>
                        <b>I will help you find your new job!</b>
                    </p>
                    <p className='text-white mt-2'>I'm available 24x7. Can I show you around?</p>
                </div>


                <Button onClick={() => navigate('/about-you')} sx={{
                    backgroundColor: '#6352cc', padding: '15px 0px', borderRadius: '99px', '&:hover': {
                        backgroundColor: '#6352cc',
                    },
                }} className='w-100 text-white mt-3' variant="text">Create a Profile</Button>

                <Button onClick={() => navigate('/')} sx={{
                    backgroundColor: '#fff', padding: '15px 0px', borderRadius: '99px', '&:hover': {
                        backgroundColor: '#fff',
                    },
                }} className='w-100 text-dark mt-3' variant="text">Broewse Jobs</Button>


            </Container>
        </section>
    )
}

export default HelpYou