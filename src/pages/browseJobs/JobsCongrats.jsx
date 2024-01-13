import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import TopHeading from '../../components/TopHeading';

const JobsCongrats = () => {
    const navigate = useNavigate()

    return (
        <section className='opportunities-bg' style={{ height: '100vh' }}>
            <img src="/images/opportunities.png" alt="" className="img-fluid" style={{ position: 'absolute', bottom: '0', left: '10%', width: '300px' }} />
            <Container maxWidth="md" sx={{ position: 'relative', zIndex: '99' }}>

                <div className="text-center pt-4 mb-0">
                    <h6 className="text-white pt-5" style={{ fontSize: '27px' }}>
                        Congratulations! <br /> Application has been sent.
                    </h6>
                    <p className='text-white mt-2'>Ideally it takes 24 to 40 hours for hiring company to respond to the application.</p>
                </div>

                <h6 className="text-white pt-5 text-center" style={{ fontSize: '27px' }}>
                    What's next?
                </h6>

                <div className="mx-lg-5 mt-3">
                    <Button onClick={() => navigate('/about-you')} sx={{
                        fontWeight: 600,
                        backgroundColor: '#6352cc', textTransform: 'capitalize', fontSize: '16px', padding: '15px 0px', borderRadius: '99px', '&:hover': {
                            backgroundColor: '#6352cc',
                        },
                    }} className='w-100 text-white mt-3' variant="text">Browse More Jobs</Button>

                    <Button onClick={() => navigate('/helpyou')} sx={{
                        fontWeight: 600,
                        backgroundColor: '#fff', color: '#6352CC', textTransform: 'capitalize', fontSize: '16px', padding: '15px 0px', borderRadius: '99px', '&:hover': {
                            backgroundColor: '#fff',
                        },
                    }} className='w-100  mt-3' variant="text">Back to Profile</Button>
                </div>


            </Container>
        </section>
    )
}

export default JobsCongrats